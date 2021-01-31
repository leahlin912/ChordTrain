export class LabelManager {
  public labelProbabilities = [];
  public chordCountsInLabels = {};
  public probabilityOfChordsInLabels = {};

  constructor(trainMachine){
    this.setLabelProbabilities(trainMachine, trainMachine.getLabelCounts);
    this.setChordCountsInLabels(trainMachine.getSongs);
    this.setProbabilityOfChordsInLabels(trainMachine.getSongs);
  }

  private setLabelProbabilities(trainMachine, labelCounts){
    Object.keys(labelCounts).forEach(function(label){
      var numberOfSongs = trainMachine.getNumberOfSongs();
      this.labelProbabilities[label] = labelCounts[label] / numberOfSongs;
    });
  }

  private setChordCountsInLabels(songs){
    songs.forEach(function(i){
      if(this.chordCountsInLabels[i[0]] === undefined){
        this.chordCountsInLabels[i[0]] = {};
      }
      i[1].forEach(function(j){
        if(this.chordCountsInLabels[i[0]][j] > 0){
          this.chordCountsInLabels[i[0]][j] = this.chordCountsInLabels[i[0]][j] + 1;
        } else {
          this.chordCountsInLabels[i[0]][j] = 1;
        }
      })
    })
  }

  private setProbabilityOfChordsInLabels(songs){
    this.probabilityOfChordsInLabels = this.chordCountsInLabels;
    Object.keys(this.probabilityOfChordsInLabels).forEach(function (i){
      Object.keys(this.probabilityOfChordsInLabels[i]).forEach(function (j) {
        this.probabilityOfChordsInLabels[i][j] = this.probabilityOfChordsInLabels[i][j] * 1.0 / songs.length;
      });
    });
  }
}

