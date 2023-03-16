describe('Class 5 Exercise 1 TESTS', () => {

    describe('Basic Working Test', () => {
        beforeEach('Visit URL ', () => {
            cy.visit('http://192.168.100.28:8080/Clase-5/Ejercicio%201/')
        })
        it('Test if the formulary is working good', () => {
            cy.get('#firstname-user').type("Fabrizio")
            cy.get('#secondname-user').type("Adrian")
            cy.get('#surname-user').type("Avila")
            cy.get('#age-user').type(20)
            cy.get('#boton').click();
            expect(cy.get('.encabezado').should("be.visible"))
            expect(cy.get('.encabezado h1').should("have.text", 'Bienvenido! Fabrizio Adrian Avila de 20 años de edad'))
        })
        it('Test if the button "RESETEAR" is working good', () => {
            cy.get('#firstname-user').type("Fabrizio")
            cy.get('#secondname-user').type("Adrian")
            cy.get('#surname-user').type("Avila")
            cy.get('#age-user').type(20)
            cy.get('[type="reset"]').click();
            expect(cy.get('#firstname-user').should("have.value", ""))
            expect(cy.get('#secondname-user').should("have.value", ""))
            expect(cy.get('#surname-user').should("have.value", ""))
            expect(cy.get('#age-user').should("have.value", ""))
        })
    })
    describe('A lot of more difficult Test', () => {
        beforeEach('Visit URL ', () => {
            cy.visit('http://192.168.100.28:8080/Clase-5/Ejercicio%201/')
        })
        it('Test Error', () => {
            cy.get('#firstname-user').type(".");
            cy.get('#surname-user').type("-");
            cy.get('#age-user').type(0);
            cy.get('#boton').click();
            cy.get('#firstname-user').should("have.class", "border-warning").and("have.class", "border").and("have.class", "border-3");
            cy.get('#secondname-user').should("have.class", "border-warning").and("have.class", "border").and("have.class", "border-3");
            cy.get('#surname-user').should("have.class", "border-warning").and("have.class", "border").and("have.class", "border-3");
            cy.get('#age-user').should("have.class", "border-warning").and("have.class", "border").and("have.class", "border-3");
            cy.get('#contenedor-errores').should("be.visible")
            cy.get('#contenedor-errores li').should("have.text", `Este campo solo puede tener LetrasEste campo solo puede tener LetrasEste campo solo puede tener LetrasEste campo solo puede tener numeros enteros`);
        })
    })
})