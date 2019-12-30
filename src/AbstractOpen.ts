import FormsApp = GoogleAppsScript.Forms.FormApp;
import SheetsApp = GoogleAppsScript.Spreadsheet.SpreadsheetApp;
abstract class AbstractOpen {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  /**
   * openApps
   */
  public abstract openApps(object: FormsApp | SheetsApp): Object;
}
