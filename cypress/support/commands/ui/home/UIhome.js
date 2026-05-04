Cypress.Commands.add('visitHome', () => {
  cy.visit('/login')
})

Cypress.Commands.add('clicarPlanos', () => {
  cy.contains('Planos').click()
  cy.url().should('include', '/planos')
})

Cypress.Commands.add('clicarComoFunciona', () => {
  cy.contains('Como funciona').click()
  cy.url().should('include', '/funcionamento')
})

Cypress.Commands.add('clicarCriarConta', () => {
  cy.contains('Criar conta').click()
  cy.url().should('include', '/criar-conta')
})

Cypress.Commands.add('clicarEntrar', () => {
  cy.contains('Entrar').click()
  cy.url().should('include', '/login')
})

Cypress.Commands.add('visitPlanos', () => {
  cy.visit('/planos')
})

Cypress.Commands.add('verificarPlanos', () => {
  cy.url().should('include', '/planos')
  cy.contains('Planos para sua rotina clínica').should('be.visible')
  cy.contains('Plano Básico').should('be.visible')
  cy.contains('R$ 49,90 / mês').should('be.visible')
  cy.contains('Plano Clínico').should('be.visible')
  cy.contains('R$ 74,90 / mês').should('be.visible')
  cy.contains('Plano Pro').should('be.visible')
  cy.contains('R$ 99,90 / mês').should('be.visible')
})

Cypress.Commands.add('verificarBotoesWhatsapp', () => {
  cy.get('a[href="https://wa.me/5581992871707"]')
    .should('have.length', 4)
})

Cypress.Commands.add('visitCriarConta', () => {
  cy.visit('/criar-conta')
})

Cypress.Commands.add('verificarPaginaCriarConta', () => {
  cy.url().should('include', '/criar-conta')
  cy.contains('Crie sua conta de teste gratuita').should('be.visible')
})

Cypress.Commands.add('verificarCamposCriarConta', () => {
  cy.get('#trial-full-name').should('exist')
  cy.get('#trial-username').should('exist')
  cy.get('#trial-email').should('exist')
  cy.get('#trial-password').should('exist')
  cy.get('#trial-confirm-password').should('exist')
  cy.contains('Ao criar sua conta').should('exist')
  cy.get('.shadow-xl > .min-h-11')
})