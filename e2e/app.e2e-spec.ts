import { OpenProjectPage } from './app.po';

describe('open-project App', function() {
  let page: OpenProjectPage;

  beforeEach(() => {
    page = new OpenProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
