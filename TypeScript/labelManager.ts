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
      this.initChordCountsInLabels(i)

      i[1].forEach((j) => {
        const temp = this.chordCountsInLabels[i[0]]
        if(temp[j] > 0){
          temp[j] = temp[j] + 1;
        } else {
          temp[j] = 1;
        }
      })
    })
  }

  private initChordCountsInLabels(song){
    if(this.chordCountsInLabels[song[0]] === undefined){
      this.chordCountsInLabels[song[0]] = {};
    }
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

