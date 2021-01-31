import { Testee } from './testee'

export default class TrainMachine {
  private _songs = []
  private _labels = []
  private _allChords = []
  private _labelCounts = []

  constructor(testees: Testee[]){
    testees.forEach(testee=>{
      this.init(testee)
    })
  }

  private init(testee: Testee) {
    const chords = testee.chords()
    const label = testee.label()
    this.addSong(chords, label)
    this.addLabels(label)
    this.addChord(chords)
    this.addLabelCount(label)
  }

  private addSong(chords, label) {
    this._songs.push([label, chords]);
  }

  private addLabels(label) {
    this._labels.push(label);
  }

  private addChord(chords) {
    for (var i = 0; i < chords.length; i++) {
      if (!this._allChords.includes(chords[i])) {
        this._allChords.push(chords[i]);
      }
    }
  }

  private addLabelCount(label) {
    if(!!(Object.keys(this._labelCounts).includes(label))){
      this._labelCounts[label] = this._labelCounts[label] + 1;
    } else {
      this._labelCounts[label] = 1;
    }
  }

  public songs(){
    return this._songs;
  }

  public labelCounts(){
    return this._labelCounts;
  }
}
