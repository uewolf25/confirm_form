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
   * @param
   * @returns
   */
  public openApps(object: SheetsApp): Spreadsheet {
    const appsObject: Spreadsheet = object.openByUrl(this.url);
    return appsObject;
  }
}
