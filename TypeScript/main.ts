import 'fs';
import TrainMachine from './trainMachine'
import { getTestees } from './testee';

var labelProbabilities = [];
var chordCountsInLabels = {};
var probabilityOfChordsInLabels = {};

function setLabelProbabilities(trainMachine, labelCounts){
  Object.keys(labelCounts).forEach(function(label){
    var numberOfSongs = trainMachine.getNumberOfSongs();
    labelProbabilities[label] = labelCounts[label] / numberOfSongs;
  });
};

function setChordCountsInLabels(songs){
  songs.forEach(function(i){
    if(chordCountsInLabels[i[0]] === undefined){
      chordCountsInLabels[i[0]] = {};
    }
    i[1].forEach(function(j){
      if(chordCountsInLabels[i[0]][j] > 0){
        chordCountsInLabels[i[0]][j] = chordCountsInLabels[i[0]][j] + 1;
      } else {
        chordCountsInLabels[i[0]][j] = 1;
      }
    })
  })
}

function setProbabilityOfChordsInLabels(songs){
  probabilityOfChordsInLabels = chordCountsInLabels;
  Object.keys(probabilityOfChordsInLabels).forEach(function (i){
    Object.keys(probabilityOfChordsInLabels[i]).forEach(function (j) {
      probabilityOfChordsInLabels[i][j] = probabilityOfChordsInLabels[i][j] * 1.0 / songs.length;
    });
  });
}

const trainMachine = new TrainMachine(getTestees())

setLabelProbabilities(trainMachine, trainMachine.getLabelCounts);
setChordCountsInLabels(trainMachine.getSongs);
setProbabilityOfChordsInLabels(trainMachine.getSongs);

function classify(chords){
  var ttal = labelProbabilities;
  console.log(ttal);
  var classified = {};
  Object.keys(ttal).forEach(function(obj) {
    var first = labelProbabilities[obj] + 1.01;
    chords.forEach(function(chord){
      var probabilityOfChordsInLabel = probabilityOfChordsInLabels[obj][chord];
      if(probabilityOfChordsInLabel === undefined){
        first + 1.01;
      } else {
        first = first * (probabilityOfChordsInLabel + 1.01);
      }
    });
    classified[obj] = first;
  });
  console.log(classified);
};

classify(['d', 'g', 'e', 'dm']);
classify(['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m']);
