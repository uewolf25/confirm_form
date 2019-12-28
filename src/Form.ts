import Forms = GoogleAppsScript.Forms.Form;
import FormsApp = GoogleAppsScript.Forms.FormApp;

export class Form extends AbstractOpen {

  constructor(formUrl: string) {
    super(formUrl);
  }

  /**
   * openApps
   */
  protected openApps(object: FormsApp) {
    let appsObject: Object = object.openByUrl(this.url);
  }
  
}