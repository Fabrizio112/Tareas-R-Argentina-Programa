describe('Test de la Clase 5 de la Tarea 1', () => {
    beforeEach('Visitar la pagina ', () => {
        cy.visit('http://192.168.100.28:8080/Clase-5/')
    })
    it('Probar si la calculadora funciona de forma correcta', () => {
        cy.get('#salario-user').type(850000);
        cy.get('#calcular').click();
        expect(cy.get('#salario-mensual').should("value", (850000 / 12)));
    })
    it('Probar si el boton de resetear funciona de forma correcta', () => {
        cy.get('#salario-user').type(12000);
        cy.get('#calcular').click();
        expect(cy.get('#salario-mensual').should("value", 1000));
        cy.get('[type="reset"]').click()
        expect(cy.get('#salario-user').should("value", ""))
        expect(cy.get('#salario-mensual').should("value", ""))
    })

})
