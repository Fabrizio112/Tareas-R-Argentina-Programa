describe('Test de la Clase 6 del Ejercicio 2', () => {

    describe('Basic working test', () => {
        beforeEach('Visitar la pagina ', () => {
            cy.visit('http://127.0.0.1:8080/Clase-6/Ejercicio%202/')
        })
        it('Test if the button "Agregar" is working', () => {
            cy.get('#agregar').click();
            expect(cy.get(".minibox1").should("be.visible"))
        })
        it('Test if the button "Quitar" is working', () => {
            cy.get('#agregar').click();
            cy.get('#quitar').click();
            expect(cy.get(".minibox1").should("not.exist"))
        })
        it('Test if the program is working ', () => {
            cy.get('#agregar').click();
            cy.get(`[name="input-salario1"]`).type(120000)
            cy.get('#calcular').click();
            expect(cy.get('.resultado').should('be.visible'))
            it('Test if the container results is correct', () => {
                expect(cy.get('.resultado #mayor-anual').should('have.value', 120000))
                expect(cy.get('.resultado #menor-anual').should('have.value', 120000))
                expect(cy.get('.resultado #anual-promedio').should('have.value', 120000))
                expect(cy.get('.resultado #mensual-promedio').should('have.value', (120000 / 12)))
            })
        })
    })
    describe('A little more difficult test', () => {
        beforeEach('Visitar la pagina ', () => {
            cy.visit('http://127.0.0.1:8080/Clase-6/Ejercicio%202/')
        })
        it('Test Empty Errors', () => {
            cy.get('#calcular').click();
            expect(alert('No se puede calcular si no agregas nada ,Por favor agrega casilleros para realizar tu calculo'))
        })
        it('Test empty inputs error', () => {
            cy.get('#agregar').click();
            cy.get('#calcular').click();
            expect(cy.get(`[name="input-salario1"]`).should('have.class', 'border-danger'))
            expect(cy.get('#contenedor-errores').should('be.visible'))
            expect(cy.get('#contenedor-errores .mensajes-de-error').should('have.text', 'Este campo solo puede tener numeros enteros'))
        })
    })
})