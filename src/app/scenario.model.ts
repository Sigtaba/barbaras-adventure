import { Answer } from './answer.model';
export class Scenario {
  constructor(public name: string,
              public story: string,
              public question: string,
              public answerOne: Answer,
              public answerTwo: Answer,
              public answerThree: Answer,
              public id: number) {}
}
