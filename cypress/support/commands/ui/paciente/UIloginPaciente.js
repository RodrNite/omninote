Cypress.Commands.add('loginPaciente', (cpf, senha) => {
  cy.session('sessao-paciente', () => {
    cy.visit('/paciente/login')
    cy.get('#cpf').type(cpf, { log: false })
    cy.get('#senha').type(senha, { log: false })
    cy.get('.min-h-11').click()
    cy.url().should('not.include', '/paciente/login')
  })
})
