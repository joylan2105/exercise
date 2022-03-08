/// <reference types="Cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given (`user is in login page`, ()=> {
  cy.visit("https://dev-identifi.vercel.app/")
});
When (`enters email address`, ()=> {
  cy.get('[data-test="email.input"]').type("gidgetdelanasist@gmail.com")
});
And (`user clicks sign-in`, ()=>{
  cy.get('[data-test="signin.button"]').click()
}); 
And (`user enters password`, ()=>{
  cy.get('[data-test="password.input"]').type("Tagaytay123")
}); 
And (`user clicks sign-in`, ()=>{
  cy.get('[data-test="signin.button"]').click()
}); 
Then (`user should login successfully`, ()=>{
 cy.get('.css-70qvj9').find(`.css-1xmmf0j`).should("have.text", "Dashboard") 
});