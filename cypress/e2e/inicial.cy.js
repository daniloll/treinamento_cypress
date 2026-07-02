describe(' Suite Inicial', ()=> {
  it('Deve logar com sucesso', () => {

    cy.acessPage();

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')

    cy.get('button[type="submit"]').click()

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')
  })
  it('Nao deve logar com sucesso senha incorreta', () => {
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana321')

    cy.get('button[type="submit"]').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
  it('Nao deve logar com sucesso email incorreto', () => {
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papi@webdojo.com')
    cy.get('#password').type('katana321')

    cy.get('button[type="submit"]').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

})