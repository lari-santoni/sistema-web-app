import { Result, Results } from "../pages/account/models/report";

let characteristicsArr: string[]= []
const typeDI = 'Deficiência Intelectual (DI)'
const typeTEA = 'Transtorno do Espectro Autista (TEA)'
const typeTEAp = 'Transtorno Específico de Aprendizagem (TEAp)'
const typeTDAH = 'Transtorno de Déficit de Atenção/Hiperatividade (TDAH)'

export function findCharacteristics(type: Results){
  getDI(type.diResult,typeDI)
  getTEA(type.teaResult,typeTEA)
  getTEAP(type.teapResult,typeTEAp)
  getTDAH(type.tdahResult,typeTDAH)

  return characteristicsArr
}

function getDI(type:number, tDI:string){
  if (type>=0 && type<=0.75) {
    // pass
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.push('Baixo Risco para '+ tDI)
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.push('Médio Risco para '+ tDI)
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.push('Alto Risco para '+ tDI)
  }
}

function getTEA(type:number, tTEA:string){
  if (type>=0 && type<=0.75) {
    // pass
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.push('Baixo Risco para '+ tTEA)
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.push('Alto Risco para '+ tTEA)
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.push('Alto Risco para '+ tTEA)
  }
}

function getTEAP(type:number, tTEAP:string){
  if (type>=0 && type<=0.75) {
    // pass
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.push('Baixo Risco para '+ tTEAP)
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.push('Médio Risco para '+ tTEAP)
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.push('Alto Risco para '+ tTEAP)
  }
}

function getTDAH(type:number, tTDAH:string){
  if (type>=0 && type<=0.75) {
    // pass
  }
  else if (type>0.75 && type<=1.50){
    characteristicsArr.push('Baixo Risco para '+ tTDAH)
  }
  else if (type>1.50 && type<=2.25){
    characteristicsArr.push('Médio Risco para '+ tTDAH)
  }
  else if (type>2.25 && type<=3){
    characteristicsArr.push('Alto Risco para '+ tTDAH)
  }
}