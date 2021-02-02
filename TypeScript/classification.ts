import { Chord } from './testee'
export default class Classification {
  private _chords
  private _classified = {}
  constructor( private _labelProbabilities, private _probabilityOfChordsInLabels){
    console.log(_labelProbabilities);
  }

  classify(chords: Chord[]){
    this._chords = chords
    Object.keys(this._labelProbabilities).forEach(function(obj) {
    var first = this._labelProbabilities[obj] + 1.01;
    this._chords.forEach(function(chord){
      var probabilityOfChordsInLabel = this._probabilityOfChordsInLabels[obj][chord];
      if(probabilityOfChordsInLabel === undefined){
        first + 1.01;
      } else {
        first = first * (probabilityOfChordsInLabel + 1.01);
      }
    });
    this._classified[obj] = first;
  });
  console.log(this._classified);
  }
}

export const classifyGroup = [
  ['d', 'g', 'e', 'dm'],
  ['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m']
]
