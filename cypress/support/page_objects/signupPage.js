
export class SignupPage {


    signup(name, email, password){
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#confirmPassword').type(password)
        cy.get('[type="submit"]').click()

        
    }



}

export const onSignupPage = new SignupPage()