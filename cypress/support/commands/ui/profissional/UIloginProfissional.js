Cypress.Commands.add('loginProfissional', (username, password) => {
  cy.session('sessao-profissional', () => {
    cy.visit('/login')
    cy.get('#username').type(username, { log: false })
    cy.get('#password').type(password, { log: false })
    cy.get('.min-h-11').click()
    cy.url().should('not.include', '/login')
  })
})