import { Results } from "../pages/account/models/report";

const characteristicsArr = []

export function findCharacteristics(type: Results) {
  getDI(type.diResult)
  getTEA(type.teaResult)
  getTEAP(type.teaResult)
  getTDAH(type.tdahResul)
}

function getDI(type: number){
  if (type>0.01 && type<=0.75) {
    characteristicsArr.push({
      name: 'DI',
      level: 'Nenhum Risco'
    })
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.push({
      name: 'DI',
      level: 'Baixo Risco'
    })
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.push({
      name: 'DI',
      level: 'Médio Risco'
    })
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.push({
      name: 'DI',
      level: 'Alto Risco'
    })
  }
}
function getTEA(type: number){
  if (type>0.01 && type<=0.75) {
    characteristicsArr.push({
      name: 'TEA',
      level: 'Nenhum Risco'
    })
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.push({
      name: 'TEA',
      level: 'Baixo Risco'
    })
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.push({
      name: 'TEA',
      level: 'Médio Risco'
    })
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.push({
      name: 'TEA',
      level: 'Alto Risco'
    })
  }
}
function getTEAP(type: number){
  if (type>0.01 && type<=0.75) {
    characteristicsArr.push({
      name: 'TEAp',
      level: 'Nenhum Risco'
    })
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.push({
      name: 'TEAp',
      level: 'Baixo Risco'
    })
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.push({
      name: 'TEAp',
      level: 'Médio Risco'
    })
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.push({
      name: 'TEAp',
      level: 'Alto Risco'
    })
  }
}
function getTDAH(type: number){
  if (type>0.01 && type<=0.75) {
    characteristicsArr.push({
      name: 'TDAH',
      level: 'Nenhum Risco'
    })
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.push({
      name: 'TDAH',
      level: 'Baixo Risco'
    })
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.push({
      name: 'TDAH',
      level: 'Médio Risco'
    })
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.push({
      name: 'TDAH',
      level: 'Alto Risco'
    })
  }
}