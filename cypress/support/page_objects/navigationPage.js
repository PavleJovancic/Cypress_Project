export class NavigationPage {

    loginPage(){
        cy.contains('Login').click()
    }

    logout(){
        cy.get('[type="button"]').contains('Logout').click()
    }

    signupPage(){
        cy.contains('Sign Up').click()
    }



}

export const navigateTo = new NavigationPage()