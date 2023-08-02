describe('Alerts',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('JS Alert',()=>{
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.eq('I am a JS Alert')
        })
        //alert window automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    //cypress clicks on ok - default behavior
    it('JS Confirmation Alert - ok',()=>{
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window.confirm',(t)=>{
            expect(t).to.eq('I am a JS Confirm')
        })
        //alert window automatically closed by cypress
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    //have to clicks on cancel
    it('JS Confirmation Alert - Cancel',()=>{
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window.confirm',(t)=>{
            expect(t).to.eq('I am a JS Confirm')
        })

        cy.on('window:confirm',()=>false)
        //alert window automatically closed by cypress
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('JS Prompt - ok',()=>{

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('manasa')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text','You entered: manasa')
    })

    //not working, have to check solution
    it('JS Prompt - cancel',()=>{

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('manasa')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt',()=>false)
        cy.get('#result').should('have.text','You entered: manasa')
    })

    it.only('Authenticated alert',()=>{
        
    })
})