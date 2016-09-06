import { MapAngular2Page } from './app.po';

describe('map-angular2 App', function() {
  let page: MapAngular2Page;

  beforeEach(() => {
    page = new MapAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
