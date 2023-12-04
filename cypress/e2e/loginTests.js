import { onLoginPage } from "../support/page_objects/loginPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Login page tests', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
        navigateTo.loginPage()
    })

    it('Verify navigation to login page', () => {

        cy.get('.display-2').should('contain', 'Login')
        cy.url().then(url => {
            cy.wrap(url).should('contain','/login')
        })
        cy.title().then(title => {
            cy.wrap(title).should('contain','My Awesome App')
          })
        
    })

    
    it('Verify display error message when user does not exists', () => {
        let email = "userdoesnotexist@gmail.com"
        let password = "incorrectpassword"

        onLoginPage.login(email, password)

        cy.get('[role="status"]').then( popup => {
            cy.wrap(popup).should('contain', 'User does not exists')
            cy.wrap(popup).find('button').click()
        })

    })

    it('Verify display error when using incorrect password', () =>{

        let email = "admin@admin.com"
        let password = "incorrectpassword"

        onLoginPage.login(email, password)

        cy.get('[role="status"]').then( popup => {
            cy.wrap(popup).should('contain', 'Wrong password')
            cy.wrap(popup).find('button').click()
        })

    })

    it('Verify login with correct credentials', () =>{

        let email = "admin@admin.com"
        let password = "12345"

        onLoginPage.login(email, password)

        cy.get('.display-2').should('contain', 'Welcome Super Administrator')
        cy.url().then(url => {
            cy.wrap(url).should('contain','home')
        })
        cy.title().then(title => {
            cy.wrap(title).should('contain','My Awesome App')
          })

    })
     



})