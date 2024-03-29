describe('Test de la Clase 5 del Ejercicio 1', () => {

    describe('Basic working test', () => {
        beforeEach('Visitar la pagina ', () => {
            cy.visit('http://127.0.0.1:8080/Clase-5/Ejercicio%202/')
        })
        it('Test if first part of  the program is working ', () => {
            cy.get('#clases').type(4);
            cy.get('#calcular').click();
            expect(cy.get('.clase-de-argentina-programa').find('.contenedor-clases').should('have.exist', 4))

        })
        it('Test if second part of the program is working', () => {
            cy.get('#clases').type(2);
            cy.get('#calcular').click();
            cy.get('#horas-1').type(1);
            cy.get('#minutos-1').type(1);
            cy.get('#segundos-1').type(1);
            cy.get('#horas-2').type(1);
            cy.get('#minutos-2').type(1);
            cy.get('#segundos-2').type(1);
            cy.get('#tiempo').click()
            expect(cy.get('#resultado').should('be.visible'))
        })
        it('Test if the container results are good his content', () => {
            cy.get('#clases').type(2);
            cy.get('#calcular').click();
            cy.get('#horas-1').type(1);
            cy.get('#minutos-1').type(1);
            cy.get('#segundos-1').type(1);
            cy.get('#horas-2').type(1);
            cy.get('#minutos-2').type(1);
            cy.get('#segundos-2').type(1);
            cy.get('#tiempo').click()
            cy.get('#resultado h2').should('have.text', 'El tiempo total es:')
            cy.get('#resultado #resultado-horas').should('have.text', 'Horas totales: 2 ')
            cy.get('#resultado #resultado-minutos').should('have.text', ' Minutos Totales:2')
            cy.get('#resultado #resultado-segundos').should('have.text', 'Segundos Totales:2')
        })

        it('Test if the button Reset is working', () => {
            cy.get('#clases').type(2);
            cy.get('#calcular').click();
            cy.get('#horas-1').type(1);
            cy.get('#minutos-1').type(1);
            cy.get('#segundos-1').type(1);
            cy.get('#horas-2').type(1);
            cy.get('#minutos-2').type(1);
            cy.get('#segundos-2').type(1);
            cy.get('#reset').click()
            expect(cy.get('#contenedor-clases').should('not.exist'))
            expect(cy.get('.cuantas-clases').should('be.visible'))
        })
    })
    describe('A lot of more difficult test', () => {
        beforeEach('Visitar la pagina ', () => {
            cy.visit('http://127.0.0.1:8080/Clase-5/Ejercicio%202/')
        })
        it('Test error first part of the program', () => {
            cy.get('#calcular').click();
            expect(cy.get('#clases').should('have.class', 'border-danger'))
            expect(cy.get('#contenedor-errores').should('be.visible'))
            expect(cy.get('#contenedor-errores .mensaje-de-error').should('have.text', 'Se debe ingresar un numero entero'))
        })
        it('Test error second part of the program', () => {
            cy.get('#clases').type(0);
            cy.get('#calcular').click();
            cy.get('#tiempo').click()
            expect(cy.get('#contenedor-errores').should('be.visible'))
            expect(cy.get('#contenedor-errores .mensaje-de-error').should('have.text', 'Se debe ingresar un numero enteroSe debe ingresar un numero enteroSe debe ingresar un numero entero'))
            expect(cy.get('#horas-1').should('have.class', 'border-danger'));
            expect(cy.get('#minutos-1').should('have.class', 'border-danger'));
            expect(cy.get('#segundos-1').should('have.class', 'border-danger'));
        })
    })
})