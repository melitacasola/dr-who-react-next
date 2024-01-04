const speedFactor = 2

describe('Main Carousel Test', () => {
  beforeEach(() => {
    cy.viewport(1728, 1117)
    cy.clock(Date.now(), ['Date'])
    cy.visit('http://localhost:3000');

    // Optionally, you may need to wait for some initial data or animations
    cy.wait(1000);
  });

  it('should navigate to the next and previous image in the main carousel', () => {
    // Click the next button
    cy.get('[data-cy="next-image"]').click();

    // Validate that the title is updated
    cy.get('h1').should('contain.text', 'Allons-y!')

    cy.wait(1000 * speedFactor)
    cy.get('[data-cy="prev-image"]').click();
    
    cy.get('h1').should('contain.text', 'The Giggle')
    // Validate that the title is back to the initial one
    ;
  });

  it('should visit a specific URL when "Conoce A" navBar is clicked', () => { 
     // Adjust the wait time as needed
      
    cy.get('li:contains("Conoce a"):first').click()

    // Validate that the URL has changed
    cy.location('pathname').should('include', 'conoce-a')
    cy.wait(1000 * speedFactor)
  })

  it('should visit a specific URL when "Doctores" navBar is clicked', () => {
    
      
    cy.get('li:contains("Doctores"):first').click()

    // Validate that the URL has changed
    cy.location('pathname').should('include', 'doctors')
    cy.wait(1000 * speedFactor)
  })

});
