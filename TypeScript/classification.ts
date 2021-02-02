import { Chord } from './testee'
export default class Classification {
  private ADDITION = 1.01
  private _chords

  constructor( private _labelProbabilities, private _probabilityOfChordsInLabels){
    console.log(_labelProbabilities);
  }

  public classify(chords: Chord[]){
    const classified = {}
    this._chords = chords

    Object.keys(this._labelProbabilities).forEach((obj) => {
      classified[obj] = this.getFirst(obj);
    });

    console.log(classified);
  }

  private getFirst(obj){
    let first = this.adding(this._labelProbabilities[obj]);
    this._chords.forEach((chord) => {
      const probability = this._probabilityOfChordsInLabels[obj][chord];
      first = (probability === undefined) ? this.adding(first) : first * this.adding(probability)
    });
    return first;
  }

  private adding(base: number): number{
    return base + this.ADDITION
  }
}

export const classifyGroup = [
  ['d', 'g', 'e', 'dm'],
  ['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m']
]
