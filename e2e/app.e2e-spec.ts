import { NextCheckingPage } from './app.po';

describe('next-checking App', () => {
  let page: NextCheckingPage;

  beforeEach(() => {
    page = new NextCheckingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
