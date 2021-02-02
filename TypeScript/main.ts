import 'fs';
import TrainMachine from './trainMachine'
import { getTestees } from './testee';
import LabelManager from './labelManager'
import Classification, { classifyGroup } from './classification'


const trainMachine = new TrainMachine(getTestees())
const labelManager = new LabelManager(trainMachine.songs(), trainMachine.labelCounts())
const classification = new Classification(labelManager.labelProbabilities, labelManager.probabilityOfChordsInLabels)

function classify(classifyGroup){
  classifyGroup.forEach(group=>{
    classification.classify(group);
  })
}

classify(classifyGroup)


classification.classify(['d', 'g', 'e', 'dm'])
classification.classify(['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m'])
