import { NgTagsInputWithAngularCLIFinalPage } from './app.po';

describe('ng-tags-input-with-angular-clifinal App', function() {
  let page: NgTagsInputWithAngularCLIFinalPage;

  beforeEach(() => {
    page = new NgTagsInputWithAngularCLIFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
