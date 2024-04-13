export class ReportResult {
  name: string = ""
  age: string = ""
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
  tdahResult: number = 0
}

export class Result {
  di: ItemResult = new ItemResult()
  tea: ItemResult = new ItemResult()
  teap: ItemResult = new ItemResult()
  tdah: ItemResult = new ItemResult()
}

export class ItemResult {
  name?: string = ''
}

export class Characteristics {
  student: StudentChar = new StudentChar()
}

class StudentChar {
  questions: QuestionList[] = []
}

export class QuestionList {
  question: QuestionFinal = new QuestionFinal()
}

export class QuestionFinal {
  question: string = ''
}