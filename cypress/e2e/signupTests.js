import { SignupPage, onSignupPage } from "../support/page_objects/signupPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Signup page tests', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
        navigateTo.signupPage()
    })

    it('Verify navigation to signup page', () => {

        cy.get('.display-2').should('contain', 'Signup')
        cy.url().then(url => {
            cy.wrap(url).should('contain','/signup')
        })
        cy.title().then(title => {
            cy.wrap(title).should('contain','My Awesome App')
          })
        
    })

    it('Verify display error message when user already exists', () => {
        let name = "Another User";
        let email = "admin@admin.com";
        let password = "12345";

        onSignupPage.signup(name, email, password)

        cy.get('[role="status"]').then( popup => {
            cy.wrap(popup).should('contain', 'E-mail already exists')
            cy.wrap(popup).find('button').click()
        })


    })

})