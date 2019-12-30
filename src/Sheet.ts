import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import Sheets = GoogleAppsScript.Spreadsheet.Sheet;
// import SheetsApp = GoogleAppsScript.Spreadsheet.SpreadsheetApp;

export class Sheet /*extends AbstractOpen*/ {
  protected sheetsUrlForEveryone: string;
  protected sheetsUrlMenbers: string;
  private _sheetsForEveryoneObject: Spreadsheet;
  private _sheetsMenbersObject: Spreadsheet;

  public constructor(sheetsUrlForEveryone: string, sheetsUrlMenbers: string) {
    this.sheetsUrlForEveryone = sheetsUrlForEveryone;
    // super(sheetsUrlForEveryone);
    this.sheetsUrlMenbers = sheetsUrlMenbers;
  }

  /**
   * openApps
   * @param
   * @returns
   */
  public openApps() {
    this._sheetsForEveryoneObject = SpreadsheetApp.openByUrl(this.sheetsUrlForEveryone);
    this._sheetsMenbersObject = SpreadsheetApp.openByUrl(this.sheetsUrlForEveryone);
  }

  /**
   * getForEveryoneSheet
   * @param
   * @returns
   */
  private get getForEveryoneSheet(): Sheets[] {
    return this._sheetsForEveryoneObject.getSheets();
  }

  /**
   * getForEveryoneSheetSize
   * @param
   * @returns
   */
  private get getForEveryoneSheetSize(): Number {
    return this.getForEveryoneSheet.length;
  }

  /**
   * getForEveryoneSheetName
   * @param
   * @returns
   */
  public getForEveryoneSheetName(sheetTitle: string): Sheets {
    return this._sheetsForEveryoneObject.getSheetByName(sheetTitle);
  }

  /**
   * getMenbersSheet
   * @param
   * @returns
   */
  private get getMenbersSheet(): Sheets[] {
    return this._sheetsMenbersObject.getSheets();
  }
}
