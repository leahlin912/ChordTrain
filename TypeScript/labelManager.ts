export default class LabelManager {
  public labelProbabilities = [];
  public chordCountsInLabels = {};
  public probabilityOfChordsInLabels = {};

  constructor(songs, labelCounts){
    this.setLabelProbabilities(songs, labelCounts);
    this.setChordCountsInLabels(songs);
    this.setProbabilityOfChordsInLabels(songs);
  }

  private setLabelProbabilities(songs, labelCounts){
    Object.keys(labelCounts).forEach((label) => {
      const numberOfSongs = songs.length;
      this.labelProbabilities[label] = labelCounts[label] / numberOfSongs;
    });

  }

  private setChordCountsInLabels(songs){
    songs.forEach((i) => {
      if(this.chordCountsInLabels[i[0]] === undefined){
        this.chordCountsInLabels[i[0]] = {};
      }
      i[1].forEach((j) => {
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
    Object.keys(this.probabilityOfChordsInLabels).forEach((i) => {
      Object.keys(this.probabilityOfChordsInLabels[i]).forEach((j) => {
        this.probabilityOfChordsInLabels[i][j] = this.probabilityOfChordsInLabels[i][j] * 1.0 / songs.length;
      });
    });
  }
}

