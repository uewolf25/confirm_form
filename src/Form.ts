import Forms = GoogleAppsScript.Forms.Form;
import FormsApp = GoogleAppsScript.Forms.FormApp;

export class Form extends AbstractOpen {
  constructor(formUrl: string) {
    super(formUrl);
  }

  /**
   * openApps
   * @param
   * @returns
   */
  // public openApps(object: FormsApp): Object {
  //   const appsObject: Object = object.openByUrl(this.url);
  //   return appsObject;
  // }
  public openApps(object: FormsApp): Forms {
    const appsObject: Forms = object.openByUrl(this.url);
    return appsObject;
  }
}
