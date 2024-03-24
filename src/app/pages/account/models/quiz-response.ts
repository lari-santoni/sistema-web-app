export class ReportInfo {
  studentName: string = "";
  studentAge: string = "";
  professorName: string = "";
}

export class ReportAnswers {
  studentName: string = "";
  professorName: string = "";
  school: string = "";
  timeClass: string = "";
  detected: IdentifiedCharacteristics[] = []
}

export class IdentifiedCharacteristics {
  caracteristics: string = "";
  level: string = "";
}

export class Quiz {
  id: string = ""
  type: string = ""
  question: string = ""
  maxAge?: number
  minAge?: number
}

export class StudentsQuestionnaire{
  studentId: string = ""
  questId: string = ""
  answer: string = ""
}

export class UpQuiz {
  studentId: string = ""
  answer: string = ""
  questId: string = ""
  question: QuestsUpQuiz = new QuestsUpQuiz()
}


export class QuestsUpQuiz {
  id: string = ""
  type: string = ""
  question: string = ""
}