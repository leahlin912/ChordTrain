import { Testee } from './testee'

export default class TrainMachine {
  private songs = []
  private labels = []
  private allChords = []
  private labelCounts = []

  constructor(testees: Testee[]){
    testees.forEach(testee=>{
      this.init(testee)
    })
  }

  private init({chords, label}: Testee) {
    this.addSong(chords, label)
    this.addLabels(label)
    this.addChord(chords)
    this.addLabelCount(label)
  }

  private addSong(chords, label) {
    this.songs.push([label, chords]);
  }

  private addLabels(label) {
    this.labels.push(label);
  }

  private addChord(chords) {
    for (var i = 0; i < chords.length; i++) {
      if (!this.allChords.includes(chords[i])) {
        this.allChords.push(chords[i]);
      }
    }
  }

  private addLabelCount(label) {
    if(!!(Object.keys(this.labelCounts).includes(label))){
      this.labelCounts[label] = this.labelCounts[label] + 1;
    } else {
      this.labelCounts[label] = 1;
    }
  }

  public getSongs(){
    return this.songs;
  }

  public getNumberOfSongs(): number{
    return this.songs.length;
  }

  public getLabelCounts(){
    return this.labelCounts;
  }
}
