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
  protected abstract openApps(object: FormsApp | SheetsApp): void;
}
