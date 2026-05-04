describe('Login Paciente', () => {
  before(() => {
    cy.fixture('usuarios').as('usuarios')
  })

  it('Fazer o Login com sucesso sendo Paciente', function () {
    cy.loginPaciente(this.usuarios.paciente.cpf, this.usuarios.paciente.senha)
    cy.visit('/paciente/dashboard')
    cy.get('div.py-2 p.font-medium').should('have.text', this.usuarios.paciente.nome)
  })
})