import { beforeAll } from "vitest"

describe('count down button tests', () => {

  it('should contain countup button and  increments the count value', () => {
    cy.visit('/')
    cy.get('.text-8xl.text-center.z-10.relative.text-zinc-800.p-16') 
      .should('be.visible')

    cy.get('span').should('contain.text',1) 
    cy.get('.text-8xl.text-center.z-10.relative.text-zinc-800.p-16').click()
    cy.get('span').should('contain.text',2) 
  })
  it('should contain countdown button and  decrements the count value', () => {
    cy.visit('/')
    cy.get('[data-test="count-down-button"]').should('be.visible')
    cy.get('[data-test="count-down-button"]').click();
    cy.get('span').should('contain.text',1) 
  })
  // it('should contain counter progress bar', () => {
  //   cy.visit('/')
  //   cy.get('[data-test="counter-progress"]').should('be.visible')
  
  // })
})