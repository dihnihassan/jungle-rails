
describe('ProductPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


  it("tests if users can navigate from the home page to the product detail page by clicking on a product", () => {
    cy.get(".products article a").first().click();
  });

  it("There are 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });
})
