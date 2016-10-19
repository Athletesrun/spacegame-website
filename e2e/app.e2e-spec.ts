import { SpacegameWebsitePage } from './app.po';

describe('spacegame-website App', function() {
  let page: SpacegameWebsitePage;

  beforeEach(() => {
    page = new SpacegameWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
