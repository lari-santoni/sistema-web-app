export class ReportResult {
  name: string = ""
  school: string = ""
  professor = new Professor
  results: any
}

class Professor {
  name: string = ""
}

export class Results {
  diResult: number = 0
  teaResult: number = 0
  teapResult: number = 0
  tdahResul: number = 0
}