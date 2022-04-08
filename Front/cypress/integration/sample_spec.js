describe("Add product to cart then delete it", () => {
  it("Test go to product", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Summer Smith").click();
    cy.get(".quantity").contains("70");
    cy.get(".addProduct").click();
    cy.get("#backToHome").click();
    cy.get("#back").click();
    cy.get("#suppr-0").click();
    cy.get(".message").contains("Produit bien supprimé");
  });
});
