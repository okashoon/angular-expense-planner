import { ExpensePlannerPage } from './app.po';

describe('expense-planner App', () => {
  let page: ExpensePlannerPage;

  beforeEach(() => {
    page = new ExpensePlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
