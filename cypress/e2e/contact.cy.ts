describe('template spec', () => {
  it('passes', () => {
    cy.viewport(550, 750)
    cy.visit('/')

    const randomEmail = `test${Math.floor(Math.random() * 1000000)}@example.com`
    cy.get('#name').type('Melita')
    cy.get('#email').type(randomEmail)
    cy.get('#message').type('cypress es super bonito para testear!! no dejen de usarlo!')

    cy.get('#myBtnId').click()
  })
})