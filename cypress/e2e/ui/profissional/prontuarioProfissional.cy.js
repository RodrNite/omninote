describe('Prontuário - Profissional', () => {
  before(() => {
    cy.fixture('usuarios').as('usuarios')
  })

  it('Deve acessar o prontuário com sucesso', function () {
    cy.loginProfissional(this.usuarios.profissional.username, this.usuarios.profissional.password)
    cy.visitProntuario()
    cy.verificarProntuario()
  })
})