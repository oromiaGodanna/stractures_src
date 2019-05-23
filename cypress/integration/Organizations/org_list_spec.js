describe('organization list Test', function(){
    
    beforeEach(function () {
        cy.visit('/')
    })
    it('Navigates to New Organizations', function(){
        cy.contains('New Organization').click()

        cy.url()
            .should('include', '/newOrganization')
    })
    it('Navigates to Departments list', function(){
        
        cy.get('.ant-collapse-content-box').first().find('.ant-btn').click()

        cy.url()
            .should('include', 'departments')

    })
    it('Delets organization', function(){
        
     
       
        cy.get('.ant-collapse-extra').first().click()

        cy.get('.ant-popover-inner-content').find('.ant-btn-primary').click()
        cy.get('.ant-collapse-extra').should('have.length', 10)
        

    })
    it('Cancel delete', function(){
        cy.get('.ant-collapse-extra').first().click()

        cy.get('div.ant-popover-inner-content').find('.ant-btn-default').click()
    })

})