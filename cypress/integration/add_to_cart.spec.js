
describe('AddToCart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("There are 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });

  it("tests that users can click the 'Add to Cart' button for a product on the home page", () => {
    cy.contains("My Cart (0)");
    cy.get(".products article").contains('Add').first().click({force: true});
    cy.contains("My Cart (1)");
  });

})
