describe('My First Test', () => {
    it('Test1-positivie', function()
    {
      cy.visit("http://www.google.com")
      cy.title().should('eq','Google')
    })


    it('Test2-negative',function(){
        cy.visit("http://www.google.com")
        cy.title().should('eq','Google')
    })

    it('Test3-negative',function(){
      cy.visit("http://www.google.com")
      cy.title().should('not.eq','Mansa')
  })
  })