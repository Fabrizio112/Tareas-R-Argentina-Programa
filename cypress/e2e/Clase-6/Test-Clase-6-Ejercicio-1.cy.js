describe('Test de la Clase 6 del Ejercicio 1', () => {
  describe('Basic Working Test', () => {
    beforeEach('Visitar la pagina ', () => {
      cy.visit('http://192.168.100.28:8080/Clase-6/Ejercicio1/')
    })
    it('Test if the first part of the porgram is working', () => {
      cy.get('#cantidad-familia').type(1);
      cy.get('#calcular-familia').click();
      expect(cy.get('#label-personas').should("not.visible"));
      expect(cy.get('#cantidad-familia').should("not.visible"));
      expect(cy.get('#calcular-familia').should("not.visible"));
      expect(cy.get('#entrada-personas').should("be.visible"));
      expect(cy.get('#botones').should("be.visible"));
    })
    it('Test if the second part of the porgram is working', () => {
      cy.get('#cantidad-familia').type(1);
      cy.get('#calcular-familia').click();
      cy.get(`[name="input1"]`).type(20);
      cy.get('#calcular-edad').click()
      expect(cy.get('#resultados').should('be.visible'))
      expect(cy.get('#calcular-edad').should('not.be.visible'))
      it('Test if the container results is writing good the results', () => {
        expect(cy.get('#resultados #mayor').should('have.text', 'La mayor edad de todas es 2'))
        expect(cy.get('#resultados #menor').should('have.text', 'La menor edad de todas es 2'))
        expect(cy.get('#resultados #promedio').should('have.text', 'El promedio de  edad de todo el grupo familiar es 2'))
      })
    })
    it('Test if the button "Empezar de nuevo" is working', () => {
      cy.get('#cantidad-familia').type(3);
      cy.get('#calcular-familia').click();
      cy.get('#reset').click();
      expect(cy.get('#entrada-personas').should("not.be.visible"));
      expect(cy.get('#botones').should("not.be.visible"));
      expect(cy.get('#label-personas').should("be.visible"));
      expect(cy.get('#cantidad-familia').should("be.visible"));
      expect(cy.get('#calcular-familia').should("be.visible"));
    })
  })
  describe('A lot of difficult test', () => {
    beforeEach('Visitar la pagina ', () => {
      cy.visit('http://192.168.100.28:8080/Clase-6/Ejercicio1/')
    })
    it("Test errors in the first part of the program", () => {
      cy.get('#calcular-familia').click();
      expect(cy.get('#cantidad-familia').should('have.class', 'border-danger'));
      expect(cy.get('#contenedor-errores').should("be.visible"))
      expect(cy.get('#contenedor-errores #hola').should("have.text", 'Este campo no puede enviarse con un cero'));
    })
    it('Test errors in the second part of the program', () => {
      cy.get('#cantidad-familia').type(1);
      cy.get('#calcular-familia').click();
      cy.get('#calcular-edad').click()
      expect(cy.get(`[name="input1"]`).should('have.class', 'border-danger'))
      expect(cy.get('#contenedor-errores').should("be.visible"))
      expect(cy.get('#contenedor-errores #hola').should("have.text", 'Este campo solo puede tener numeros enteros'));
    })
  })
})