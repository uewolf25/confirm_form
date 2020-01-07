export class Check {
  constructor() {}

  /**
   * - Student number check .
   * - studentNumber can devide '10' .
   * @param studentNumber string
   * @returns whether number can devided by '10' or not .
   */
  public numberCheck(studentNumber: string): boolean {
    let sumNumber: number = 0;
    let charactor: string[] = studentNumber.split('');

    for (let i = 0; i < charactor.length; i++) {
      sumNumber += Number(charactor[i]);
    }
    return sumNumber % 10 == 0 ? true : false;
  }
}
