import { DogFoodCalculatoPage } from './app.po';

describe('dog-food-calculato App', () => {
  let page: DogFoodCalculatoPage;

  beforeEach(() => {
    page = new DogFoodCalculatoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
