describe('visit', () => { 
  it('visits the application', async () => { 
    cy.visit('http://localhost:3000')
    
    // get the counter button and click it
    const counterButton = cy.get('[data-cy="count-up"]').get('button')
    counterButton.contains('1')
    // click the button 
    counterButton.click().click()
    // check for incremented value
    counterButton.get('span').should('have.text', '3')

    const diminishButton = cy.get('[data-cy="count-down"]')
    diminishButton.click()
    counterButton.get('span').should('have.text', '2')


    // check if new counter dialog opens
    const newReminderButton = cy.get('[data-cy="add-reminder-button"]')
    newReminderButton.click()
    //check if clicking it opens the new dialogue
    cy.url().should('include', '/reminders/new')
    
    const uniqueText = Date.now().toString()
    // fill out the form:
    const reminderTitleInput = cy.get('#reminderTitle')
    reminderTitleInput.clear() //type('{selectall}{del}')
    reminderTitleInput.type(uniqueText)
    
    // fill out the form:
    const startRowInput = cy.get('#start')
    startRowInput.clear() //type('{selectall}{del}')
    startRowInput.type('a random string to test if only numbers are accepted')
    startRowInput.should('have.value', '')
    startRowInput.type('2')
    startRowInput.should('have.value', '2')
    
    // fill out the form:
    const rowsInput = cy.get('#rows')
    rowsInput.clear() //type('{selectall}{del}')
    rowsInput.type('a random string to test if only numbers are accepted')
    rowsInput.should('have.value', '')
    rowsInput.type('3')
    rowsInput.should('have.value', '3')
    
    // fill out the form:
    const timesInput = cy.get('#times')
    timesInput.clear() //type('{selectall}{del}')
    timesInput.type('a random string to test if only numbers are accepted')
    timesInput.should('have.value', '')
    timesInput.type('4')
    timesInput.should('have.value', '4')
    
    // fill out the form:
    const noteTextArea = cy.get('textarea')
    noteTextArea.clear() //type('{selectall}{del}')
    noteTextArea.type(uniqueText)
    noteTextArea.should('have.value', uniqueText)
    
    //submit
    const submitButton = cy.get('form').submit()
    
    // find the item in the list of reminders
    cy.get('h4').should('contain.text', uniqueText)
    cy.get('p').should('contain.text', uniqueText)
    
    const newReminderInList = cy.get('h4').contains(uniqueText)
    
    // check if we can delete the entry:
    newReminderInList.click()
    cy.get('h2').should('contain', uniqueText)
    cy.get('button').contains('edit').click()
    
    cy.url().should('include', 'reminders/1/edit')
    
    cy.get('[data-cy="delete-reminder-button"]').click()
    cy.get('button').contains('Delete').click()

    //check if item is in list:
    cy.get('h4').should('not.contain', uniqueText)

  // check if we can edit the reminder
    // change the form data:
      // fill out the form:
      // const uniqueText2 = Date.now().toString()
      // const editNoteTextArea = cy.get('textarea')
      // editNoteTextArea.clear() //type('{selectall}{del}')
      // editNoteTextArea.type(uniqueText2)
      // editNoteTextArea.should('have.value', uniqueText2)

    // TO DO: ADD CHECK TO SEE IF THE REMINDER APPEARS
    // TO DO: ADD CHECK FOR DIFFERENT REMINDER TYPES    
  })
})