import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import SheetsApp = GoogleAppsScript.Spreadsheet.SpreadsheetApp;

export class Sheet extends AbstractOpen {

  protected sheetsUrlForEveryone: string;
  protected sheetsUrlMenbers: string;

  constructor(sheetsUrlForEveryone: string, sheetsUrlMenbers: string) {
    super(sheetsUrlForEveryone);
    this.sheetsUrlMenbers = sheetsUrlMenbers;
  }

  /**
   * openApps
   */
  protected openApps(object: SheetsApp) {
    let appsObject: Object = object.openByUrl(this.url);
  }
}
