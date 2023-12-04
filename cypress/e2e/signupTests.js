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
})