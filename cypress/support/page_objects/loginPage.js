export class LoginPage {
    
    login(email, password){
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('[type="submit"]').click()
    }
    
}

export const onLoginPage = new LoginPage() 