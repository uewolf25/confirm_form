import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import Sheets = GoogleAppsScript.Spreadsheet.Sheet;

export class Sheet /*extends AbstractOpen*/ {
  protected sheetsUrlForEveryone: string;
  protected sheetsUrlMenbers: string;
  private _sheetsForEveryoneObject: Spreadsheet;
  private _sheetsMenbersObject: Spreadsheet;

  private _sheetForEveryone: Sheets[]; // sheet for publication
  private _sheetSize: number; // sheet for publication of size
  private _sheetsName: Sheets; // sheet for publication of name
  private _sheetMenbers: Sheets[]; // menbers sheet

  public constructor(sheetsUrlForEveryone: string, sheetsUrlMenbers: string) {
    this.sheetsUrlForEveryone = sheetsUrlForEveryone;
    // super(sheetsUrlForEveryone);
    this.sheetsUrlMenbers = sheetsUrlMenbers;
    this.openApps();
    this.initialize();
  }

  /**
   * openApps: create App object .
   * @param
   * @returns
   */
  public openApps() {
    this._sheetsForEveryoneObject = SpreadsheetApp.openByUrl(this.sheetsUrlForEveryone);
    this._sheetsMenbersObject = SpreadsheetApp.openByUrl(this.sheetsUrlForEveryone);
  }

  /**
   * initialize: Initialize field value .
   * @param
   * @returns
   */
  private initialize() {
    this._sheetForEveryone = this._sheetsForEveryoneObject.getSheets();
    this._sheetSize = this._sheetForEveryone.length;
    this._sheetMenbers = this._sheetsMenbersObject.getSheets();
  }

  /**
   * setForEveryoneSheetName: Set sheet name{eventTitle} .
   * @param
   */
  public setForEveryoneSheetName(eventTitle: string) {
    this._sheetsName = this._sheetsForEveryoneObject.getSheetByName(eventTitle);
    Logger.log(this._sheetsName);
  }

  /**
   * insertSheets: Insert new sheet .
   */
  public insertSheets(eventTitle: string) {
    try {
      SpreadsheetApp.openByUrl(this.sheetsUrlForEveryone).insertSheet(eventTitle, this._sheetSize);
    } catch (error) {
      Logger.log(`エラー：${eventTitle}はシートに挿入できません。${error}`);
    }
  }
}
