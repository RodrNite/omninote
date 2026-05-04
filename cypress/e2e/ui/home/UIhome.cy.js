describe('Home - Profissional', () => {
  beforeEach(() => {
    cy.visitHome()
  })

  it('Deve navegar para a página de Planos', () => {
    cy.clicarPlanos()
  })

  it('Deve navegar para a página Como Funciona', () => {
    cy.clicarComoFunciona()
  })

  it('Deve navegar para a página Criar Conta', () => {
    cy.clicarCriarConta()
  })

  it('Deve navegar para a página de Login', () => {
    cy.clicarEntrar()
  })
})

describe('Planos', () => {
  beforeEach(() => {
    cy.visitPlanos()
  })

  it('Deve exibir os três planos com seus preços', () => {
    cy.verificarPlanos()
  })

  it('Deve exibir o botão de criar conta de teste', () => {
    cy.contains('Criar conta de teste agora').should('be.visible')
  })

  it('Deve exibir a seção de perguntas frequentes', () => {
    cy.contains('Perguntas frequentes').should('be.visible')
  })

  it('Deve exibir quatro botões direcionando para o WhatsApp', () => {
    cy.verificarBotoesWhatsapp()
  })
})

describe('Criar Conta', () => {
  beforeEach(() => {
    cy.visitCriarConta()
  })

  it('Deve exibir a página de criar conta', () => {
    cy.verificarPaginaCriarConta()
  })

  it('Deve exibir todos os campos do formulário', () => {
    cy.verificarCamposCriarConta()
  })
})
