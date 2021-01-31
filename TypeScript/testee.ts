const enum Label {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

type Chord = string

export class Testee {
  constructor(private _chords: Chord[], private _label: Label){}

  public chords() {
    return this._chords
  }

  public label() {
    return this._label
  }
}

const chordMap = {
  imagine: ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'],
  somewhere_over_the_rainbow: ['c', 'em', 'f', 'g', 'am'],
  tooManyCooks: ['c', 'g', 'f'],
  iWillFollowYouIntoTheDark: ['f', 'dm', 'bb', 'c', 'a', 'bbm'],
  babyOneMoreTime: ['cm', 'g', 'bb', 'eb', 'fm', 'ab'],
  creep: ['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'],
  army: ['ab', 'ebm7', 'dbadd9', 'fm7', 'bbm', 'abmaj7', 'ebm'],
  paperBag: ['bm7', 'e', 'c', 'g', 'b7', 'f', 'em', 'a', 'cmaj7', 'em7', 'a7', 'f7', 'b'],
  toxic: ['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7', 'g7'],
  bulletproof: ['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'],
}

const labelMap = {
  imagine: Label.Easy,
  somewhere_over_the_rainbow: Label.Easy,
  tooManyCooks: Label.Easy,
  iWillFollowYouIntoTheDark: Label.Medium,
  babyOneMoreTime: Label.Medium,
  creep: Label.Medium,
  paperBag: Label.Hard,
  toxic: Label.Hard,
  bulletproof: Label.Hard,
}

export function getTestees(): Testee[] {
  const testees = Object.keys(labelMap).map(key => {
    return new Testee(chordMap[key], labelMap[key])
  })

  return testees
}
