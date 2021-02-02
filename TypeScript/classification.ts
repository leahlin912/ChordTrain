import { Chord } from './testee'
export default class Classification {
  private ADDITION = 1.01
  private _chords
  private _classified = {}

  constructor( private _labelProbabilities, private _probabilityOfChordsInLabels){
    console.log(_labelProbabilities);
  }

  classify(chords: Chord[]){
    this._chords = chords
    Object.keys(this._labelProbabilities).forEach(function(obj) {
    let first = this.adding(this._labelProbabilities[obj]);
    this._chords.forEach(function(chord){
      const probabilityOfChordsInLabel = this._probabilityOfChordsInLabels[obj][chord];
      if(probabilityOfChordsInLabel === undefined){
        this.adding(first);
      } else {
        first = first * this.adding(probabilityOfChordsInLabel);
      }
    });
    this._classified[obj] = first;
  });

  console.log(this._classified);
  }

  private adding(base){
    return base + this.ADDITION
  }
}

export const classifyGroup = [
  ['d', 'g', 'e', 'dm'],
  ['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m']
]
