import 'fs';
import TrainMachine from './trainMachine'
import { getTestees } from './testee';
import LabelManager from './labelManager'
import Classification, { classifyGroup } from './classification'


const trainMachine = new TrainMachine(getTestees())
const labelManager = new LabelManager(trainMachine.songs(), trainMachine.labelCounts())
const classification = new Classification(labelManager.labelProbabilities, labelManager.probabilityOfChordsInLabels)

function logClassify(classifyGroup){
  classifyGroup.forEach(group => {
    classification.Classify(group);
  })
}

logClassify(classifyGroup)
