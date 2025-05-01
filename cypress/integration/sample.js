describe("My First Test", () => {
    it("My first case", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
        cy.get('#checkBoxOption2').check().should('be.checked');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
    });
})