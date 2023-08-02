describe('CSS locators',()=>{
    it('css locators test1',()=>{
        cy.visit("http://amazon.in")
        cy.get(".nav-a[href='/deals?ref_=nav_cs_gb']").click()
        cy.get("#anonCarousel1 > ol > li:nth-child(2) > a").contains("Deal of the Day")
    })
})  


//Implicit Assertions - BUILT IN
//1.should 2.and
//Explicit Assertions
//1. expect - BDD 2. Assert - TDD