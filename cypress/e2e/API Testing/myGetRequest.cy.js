describe('HTTP Request',()=>{
    it('get call',()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
          .its('status')
          .should('equal',200)
    })

    it('post call',()=>{
        cy.request({method:'POST',
                    url:'https://jsonplaceholder.typicode.com/posts',
                    body:{
                        title:'test post',
                        body:'this is post call',
                        userId:1
                    }
                })
                .its('status')
                .should('equal',201)
    })

    it('put call',()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title:'Test post  -  updated',
                body:'this is put call',
                userId:1,
                id:1
            }
        })
        .its('status')
        .should('equal',200)
    })
})