import 'fs';
import TrainMachine from './trainMachine'
import { getTestees } from './testee';
import { LabelManager } from './labelManager'


const trainMachine = new TrainMachine(getTestees())
const labelManager = new LabelManager(trainMachine)

function classify(chords){
  var ttal = labelManager.labelProbabilities;
  console.log(ttal);
  var classified = {};
  Object.keys(ttal).forEach(function(obj) {
    var first = labelManager.labelProbabilities[obj] + 1.01;
    chords.forEach(function(chord){
      var probabilityOfChordsInLabel = labelManager.probabilityOfChordsInLabels[obj][chord];
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
