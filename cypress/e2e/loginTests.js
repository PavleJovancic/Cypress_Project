import { navigateTo } from "../support/page_objects/navigationPage"

describe('Login page tests', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it.only('Verify navigation to login page', () => {

        navigateTo.loginPage()
        cy.get('.display-2').should('contain', 'Login')
        cy.url().then(url => {
            cy.wrap(url).should('contain','/login')
        })
        
    })
})