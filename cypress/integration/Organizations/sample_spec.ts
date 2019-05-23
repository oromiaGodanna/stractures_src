
describe('my frist test', function(){
    it('Clicks an elementGets, types and asserts', function(){
        cy.visit('http://localhost:4200/organizations')
        cy.pause()
        cy.contains('New Organization').click()

        cy.url()
            .should('include', '/newOrganization')
        cy.get('input.ant-input')
        .type('name')
        .should('have.value', 'name')
    })

})