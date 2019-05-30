describe('organization list Test', () => {
    before(function () {
        // runs once before all tests in the block
      })
    
      after(function () {
        // runs once after all tests in the block
      })
    
    beforeEach(() =>  {
        cy.visit('/')
    })
    it('Navigates to New Organizations', () => {
        cy.contains('New Organization').click()

        cy.url()
            .should('include', '/newOrganization')
    })
    it('Navigates to Departments list', () => {
        
        cy.get('[data-cy=orgList]').first().find('[data-cy=departmentsBtn]').click()

        cy.url()
            .should('include', 'departments')

    })
    it('Delets organization', () => {
        
     
       
        cy.get('[data-cy=popconfirm]').first().click()

        cy.get('.ant-popover-inner-content').find('.ant-btn-primary').click()
        
        

    })
    it('Cancel delete', () => {
        cy.get('[data-cy=popconfirm]').first().click()

        cy.get('div.ant-popover-inner-content').find('.ant-btn-default').click()
    })

})