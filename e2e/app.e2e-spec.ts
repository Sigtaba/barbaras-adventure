import { AdventuresOfBarbPage } from './app.po';

describe('adventures-of-barb App', () => {
  let page: AdventuresOfBarbPage;

  beforeEach(() => {
    page = new AdventuresOfBarbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
