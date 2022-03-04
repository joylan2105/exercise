/// <reference types="Cypress"/>

describe('My First Test', () => { //cypress testing standards
    it('Visits HOV website', () => {
      cy.visit("https://dev-identifi.vercel.app/dashboard")
      cy.get('[data-test="email.input"]').type("tomelli2105@gmail.com")
      cy.get('[data-test="signin.button"]').click()
      cy.get('[data-test="password.input"]').type("Tagaytay123")
      cy.get('[data-test="signin.button"]').click()


    })
  })