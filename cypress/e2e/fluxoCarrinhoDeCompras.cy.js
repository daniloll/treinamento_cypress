describe('Acessar primeiro acesso e adicionar item ao carrinho', () => {
  it.only('Deve acessar a url com sucesso', () => {

    cy.acessPage('https://www.automationexercise.com');

    //Acessar Link superior
    cy.get('a[href="/login"]').click()

    //Efetuar novo cadastro

    cy.get('[data-qa="signup-name"]').type("teste")
    cy.get('[data-qa="signup-email"]').type("dlima10@mail.com")
    cy.get('[data-qa="signup-button"]').click()

    cy.get('[data-qa="password"]').type("12345")

    cy.get('[data-qa="days"]').select("2")
    cy.get('[data-qa="months"]').select("February")
    cy.get('[data-qa="years"]').select("1982")

    cy.get('[name="newsletter"]').click()
    cy.get('[name="optin"]').click()

    cy.get('[data-qa="first_name"]').type("Danilo Leandro")
    cy.get('[data-qa="last_name"]').type("Lima")
    cy.get('[data-qa="company"]').type("MinhaEmpresa")
    cy.get('[data-qa="address"]').type("Meu Endereço completo, 100")
    cy.get('[data-qa="address2"]').type("endereco completo")
    cy.get('[data-qa="country"]').type("Brazil")

    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type("Pernambuco")
    cy.get('[data-qa="city"]').type("Ipubi")
    cy.get('[data-qa="zipcode"]').type("56260-000")
    cy.get('[data-qa="mobile_number"]').type("81987572140")

    cy.get('[data-qa="create-account"]').click()

    //Confirmacao de cadstro de usuario

    cy.get('h2[data-qa="account-created"]')
      .should('be.visible')
      .and('have.text', "Account Created!")

    cy.get('[data-qa="continue-button"]').click()

    cy.wait(10000);

    cy.get("a[href='/product_details/2']").click()

    //Validar e guardar informações do produto
    cy.get(".product-information > h2")
      .should("be.visible")

    cy.get("div[class='product-information'] span span")

    //Adicionar produto ao carrinho
    cy.get("div[class='product-information'] button").click()

    //Validar mensagem de sucesso
    cy.get('.modal-title')
      .should('be.visible')

    // Acessar o carrinho para validar informações do produto  
    cy.contains('u', "View Cart").click()


    cy.contains('li', "Shopping Cart")
      .should("be.visible")

    cy.get('.cart_total_price')
      .should('be.visible')
      .and('have.text', "Rs. 400")


  })
})