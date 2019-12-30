import Forms = GoogleAppsScript.Forms.Form;
// import FormsApp = GoogleAppsScript.Forms.FormApp;

export class Form extends AbstractOpen {
  public constructor(formUrl: string) {
    super(formUrl);
  }

  /**
   * openApps
   * @param
   * @returns
   */
  public openApps(): Forms {
    const appsObject: Forms = FormApp.openByUrl(this.url);
    return appsObject;
  }
}
