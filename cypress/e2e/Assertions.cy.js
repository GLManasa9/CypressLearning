describe('Assertions demo',()=>{
    it("Implicit assertion",()=>{
        cy.visit("http://google.com")
        // cy.url().should('include','google.com')
        // cy.url().should('eq','http://www.google.com')
        // cy.url().should('contain','google')

        // cy.url().should('include','google.com')
        // .should('eq','http://www.google.com')
        // .should('contain','google')

        cy.url().should('include','google.com')
        .and('contain','google')

        //Negative Assertions
        cy.url().should('include','google.com')
        .and('not.eq','http://www.google.com')
        .and('contain','google')


        cy.title().should('eq','Google').and('contain','Google')
        cy.get('.lnXdpd')
        .should('be.visible')//checks visibility        
        .and('exist')//checks exist in DOM

        cy.get('#APjFqb').type('selenium testng{enter}')
        cy.get('#APjFqb').should('include','selenium')

        cy.xpath("//a").should('have.length','168')

    })
})