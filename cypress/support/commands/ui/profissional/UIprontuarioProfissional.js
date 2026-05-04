Cypress.Commands.add('visitProntuario', () => {
  cy.visit('/prontuario')
})

Cypress.Commands.add('verificarProntuario', () => {
  cy.url().should('include', '/prontuario')
  cy.contains('Prontuário Eletrônico').should('be.visible')
})