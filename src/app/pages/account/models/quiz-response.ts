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

export class StudentsQuestionaire{
  studentId: string = ""
  questId: string = ""
  answer: string = ""
}