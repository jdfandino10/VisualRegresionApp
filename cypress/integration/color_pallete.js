describe('Color pallete visual regresion test', function() {

    it('changes pallete', function() {
      cy.visit('https://jdfandino10.github.io/ColorPallete/public/');
      cy.screenshot();
      cy.get('#actions').contains('Generar nueva paleta').click();
      cy.screenshot();
    });

});
