import { Result, Results } from "../pages/account/models/report";

const characteristicsArr: Result = new Result()

export function findCharacteristics(type: Results) {
  getDI(type.diResult)
  getTEA(type.teaResult)
  getTEAP(type.teapResult)
  getTDAH(type.tdahResult)

  return characteristicsArr
}

function getDI(type: number){
  const tipeDI = 'DI'
  if (type>0.01 && type<=0.75) {
    characteristicsArr.di = {
      name: tipeDI,
      level: 'Nenhum Risco'
    }
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.di = {
      name: tipeDI,
      level: 'Baixo Risco'
    }
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.di = {
      name: tipeDI,
      level: 'Médio Risco'
    }
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.di = {
      name: tipeDI,
      level: 'Alto Risco'
    }
  }
}

function getTEA(type: number){
  const tipeTEA = 'TEA'
  if (type>0.01 && type<=0.75) {
    characteristicsArr.tea = {
      name: tipeTEA,
      level: 'Nenhum Risco'
    }
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.tea = {
      name: tipeTEA,
      level: 'Baixo Risco'
    }
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.tea = {
      name: tipeTEA,
      level: 'Médio Risco'
    }
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.tea = {
      name: tipeTEA,
      level: 'Alto Risco'
    }
  }
}

function getTEAP(type: number){
  const tipeTEAp = 'TEAp'
  if (type>0.01 && type<=0.75) {
    characteristicsArr.teap = {
      name: tipeTEAp,
      level: 'Nenhum Risco'
    }
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.teap = {
      name: tipeTEAp,
      level: 'Baixo Risco'
    }
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.teap = {
      name: tipeTEAp,
      level: 'Médio Risco'
    }
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.teap = {
      name: tipeTEAp,
      level: 'Alto Risco'
    }
  }
}

function getTDAH(type: number){
  const tipeTDAH = 'TDAH'
  if (type>0.01 && type<=0.75) {
    characteristicsArr.tdah = {
      name: tipeTDAH,
      level: 'Nenhum Risco'
    }
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.tdah = {
      name: tipeTDAH,
      level: 'Baixo Risco'
    }
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.tdah = {
      name: tipeTDAH,
      level: 'Médio Risco'
    }
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.tdah = {
      name: tipeTDAH,
      level: 'Alto Risco'
    }
  }
}