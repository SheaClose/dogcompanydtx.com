describe("Check all of the views!!!!", function() {
  it(".should() - assert that <title> is correct", function() {
    cy.visit("http://localhost:4000");
    cy.title().should("include", "Dog Company Punk Rock!");
  });
  it(".should visit store - assert that products load", function() {
    cy.visit("http://localhost:4000");
    cy.get("[ui-sref='store']").click();
    cy.url().should("include", "/store");
    cy
      .get(".product-img")
      .its("length")
      .should("be.gt", 10);
  });
  it(".should select a product and verify products load", function() {
    cy.get(".product-img").then(images => {
      images[0].click();
      cy.url().should("include", "/product");
      cy
        .get(".responsive-img")
        .its("length")
        .should("be.gte", 1);
    });
  });
  it(".should add product to cart / remove from cart ", function() {
    let id;
    cy.get("[type=button]").click();
    cy.url().should("include", "/store");
    cy.visit("http://localhost:4000/#!/cart");
    cy.request("/api/cart/").then(({ body }) => {
      id = body[0]._id;
      cy.request(`/api/cart/${id}`).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.cart).to.have.length(1);
      });
    });
    cy.get("#delete_item").click();
    cy.get("[ui-sref='store']").click();
    cy.request(`/api/cart/`).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body[0].cart).to.have.length(0);
    });
  });
  it(".should add to cart and complete order", function() {
    cy.visit("http://localhost:4000/#!/store");
    cy.get(".product-img").then(images => {
      images[0].click();
      cy.url().should("include", "/product");
      cy
        .get(".responsive-img")
        .its("length")
        .should("be.gte", 1);
    });
    cy.get("[type=button]").click();
    cy.url().should("include", "/store");
    cy.visit("http://localhost:4000/#!/cart");
    cy.get('[href="#modal1"]').click();
    cy.get("input[type=text]").then(inputs => {
      inputs.map((_, input) => {
        if (input.className.indexOf("ng-hide") == -1) {
          cy.get(`#${input.id}`).type("test");
        }
      });
    });
    cy.get("[type='email']").type("test@test.com");
    cy.get('[ng-click="submitOrder()"]').click();
  });
});
