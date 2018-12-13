describe('End to end tests', function() {
  it('Loads the app', function() {
    cy.visit('/')
    // Check UI elements are present
    cy.get('[data-cy=play]')
    cy.get('[data-cy=settings]')
    cy.get('[data-cy=game]')
  })

  it('Can change settings', function() {
    cy.visit('/settings')
    // Check UI elements are present with default values
    cy.get('[data-cy=rows]')
      .should('have.value', '10')
      .clear()
      .type('9')
    cy.get('[data-cy=cols]')
      .should('have.value', '10')
      .clear()
      .type('11')
    cy.get('[data-cy=init-pop]').should('have.value', '50')
    // Click the back button and make sure we end back at the home page.
    cy.get('[data-cy=back]').click()
    cy.url().should('eq', Cypress.config('baseUrl') + '/')
    // Get the rows in the game and check the number matches our setting.
    cy.get('[data-cy=game] .row')
      .should('have.length', 9)
      // And for one row, check that the number of columns matches our setting.
      .first()
      .within(() => {
        cy.get('.cell').should('have.length', 11)
      })
  })

  it('Initialises the grid to match the data', function(){
    // Loop through each row in the game
    cy.get('[data-cy=game] .row').each(($row, rowIdx) => {
      cy.wrap($row).within(() => {
        // Loop through each cell in the row
        cy.get('.cell').each(($cell, colIdx) => {
          cy.wrap($cell)
            // The md-checkbox is the child of the cell.
            .children()
            .then(mdCheckbox => {
              // The appearance of the checkbox is determined by the md-checked class.
              let alive = Cypress.$(mdCheckbox).hasClass('md-checked')
              alive = alive ? 'on' : 'off'
              cy.wrap(mdCheckbox)
                .find('input')
                .should('have.value', alive)
            })
        })
      })
    })
  })
})
