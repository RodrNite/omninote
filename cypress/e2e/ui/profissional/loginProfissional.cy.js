describe('Login Profissional', () => {
  before(() => {
    cy.fixture('usuarios').as('usuarios')
  })

  it('Fazer o Login com sucesso sendo Profissional', function () {
    cy.loginProfissional(this.usuarios.profissional.username, this.usuarios.profissional.password)
    cy.visit('/')
    cy.get('div.py-2 p.font-medium').should('have.text', this.usuarios.profissional.nome)
  })
})