describe('home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.wait(1000);
    });
    
    it("should display menus", () => {
        cy.get('nav a').should('have.length', 2);
        cy.get(".home-container").should('have.length', 1);

        cy.get('nav a').first().should('have.text', 'Home');
        // cy.get('nav a').last().should('have.text', 'About');
        cy.get('nav a').eq(1).should('have.text', 'About');

        cy.get('nav a').contains('About').click();
        cy.get(".about-container").should('have.length', 1);

        cy.get('nav a').contains('Home').click();
        cy.get(".home-container").should('have.length', 1);
    });

    it("should display/decrement/increment count", () => {
        cy.get(".home-container").should('contain', "count: 0");

        cy.get("button").contains("+").click();
        cy.wait(500)
        cy.get(".home-container").should('contain', "count: 1");
        cy.get("button").contains("+").click();
        cy.wait(500)
        cy.get(".home-container").should('contain', "count: 2");

        cy.get("button").contains("-").click();
        cy.wait(500)
        cy.get(".home-container").should('contain', "count: 1");
        cy.get("button").contains("-").click();
        cy.wait(500)
        cy.get(".home-container").should('contain', "count: 0");
    });
});