describe('Class 5 Homework 1 Tests', () => {

    describe('Working basic test', () => {
        beforeEach('Go to the URL ', () => {
            cy.visit('http://192.168.100.28:8080/Clase-5/Tarea%201/')
        })
        it('Test if the calculator is working good', () => {
            cy.get('#salario-user').type(850000);
            cy.get('#calcular').click();
            expect(cy.get('#salario-mensual').should("value", (850000 / 12)));
        })
        it('Test if the button reset is working good', () => {
            cy.get('#salario-user').type(12000);
            cy.get('#calcular').click();
            expect(cy.get('#salario-mensual').should("value", 1000));
            cy.get('[type="reset"]').click()
            expect(cy.get('#salario-user').should("value", ""))
            expect(cy.get('#salario-mensual').should("value", ""))
        })

    })
    describe('A lot of more difficult tests', () => {
        beforeEach('Go to the URL ', () => {
            cy.visit('http://192.168.100.28:8080/Clase-5/Tarea%201/')
        })
        it('Test error calculator', () => {
            cy.get('#salario-user')
                .type(",");
            cy.get('#calcular').click();
            cy.get('#salario-user')
                .should("have.class", "border-danger")
                .and("have.class", "border")
                .and("have.class", "border-3")
            cy.get('#contenedor-errores').should("be.visible")
            cy.get('#contenedor-errores li').should("have.text", 'Este campo solo puede tener numeros enteros');
        })
    })
})
