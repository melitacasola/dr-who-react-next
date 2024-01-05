

describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1728, 1117)
    cy.clock(Date.now(), ['Date'])
    cy.visit('http://localhost:3000/doctors')

    cy.get('#drSearch').type('guerrero', { force: true })
    cy.wait(1000)
    cy.get('#idSearch').submit()
  })
})