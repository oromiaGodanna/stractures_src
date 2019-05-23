describe('new Organization Test', function(){
    
    beforeEach(function () {
        cy.visit('http://localhost:4200/newOrganization')
    })
    it('submit disabled untill all fileds are touched and submitted', function(){
        
        cy.contains('submit')
        cy.get('[disabled]')

    })
    it('requires name', function(){
        cy.get('input.ant-input')
        .click()
        
    })
    it('requires description', function(){
        cy.get('textarea.ant-input')
        .click()
        
    })
    it('navigates to / on successful login', function(){
        cy.get('input.ant-input')
        .type('name')
        .should('have.value', 'name')

        cy.get('textarea.ant-input')
        .type('some description')
        .should('have.value', 'some description')

        cy.contains('submit').click()

        cy.url()
            .should('include', '/organizations')
        
    })
    
    it('on cancel', function(){
        
        cy.contains('cancel').click()
        cy.url()
        .should('include', '/organizations')
        
    })
})