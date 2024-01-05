describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1728, 1117)
    cy.visit('http://localhost:3000/doctors')

    cy.get('#drSearch').type('guerrero', { force: true })
    cy.get('#idSearch').submit()
  })
})