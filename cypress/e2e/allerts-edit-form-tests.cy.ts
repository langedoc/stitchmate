describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  context('Main page', () => {
    it('Add new reminder button rendered with correct text', () => {
      cy.get("[data-test='add-reminder']").contains('Add a new reminder');
    })
  
    it('Renders allerts', () => {
      cy.get("[role='alert']").eq(0).contains(/short row 1/i)
    });
  })

  context('Edit form', () => {
    it('Renders edit form', () => {
      cy.visit("http://localhost:3000/reminders/-2/edit")
    })
  
    it('Allow users to modify the reminders title', () => {
      cy.visit("http://localhost:3000/reminders/-2/edit")
      cy.get("[id='reminderTitle']").type(' edited')
    })

    it('Save changes button clickable', () => {
      cy.visit("http://localhost:3000/reminders/-2/edit")
      cy.get("button").contains(/save changes/i).click()
    })

    it('Save changes button navigates to the main page', () => {
      cy.visit("http://localhost:3000/reminders/-2/edit")
      cy.get("button").contains(/save changes/i).click()
      cy.location("pathname").should("equal", "/")
    })
    



  })

})