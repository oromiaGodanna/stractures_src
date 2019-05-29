describe('new Organization Test', () => {
    
    beforeEach(() =>  {
        cy.visit('http://localhost:4200/newOrganization')
    })
    it('submit disabled untill all fileds are touched and submitted', () => {
        
        cy.get('[data-cy=submitBtn]')
        cy.get('[disabled]')

    })
    it('requires name, description and submit disabled', () => {
        cy.get('[data-cy=name]')
        .click()
        
        cy.get('[data-cy=description]')
        .click()
        cy.get('[data-cy=nameLabel]').click()

        cy.get('[data-cy=submitBtn]')
        cy.get('[disabled]')
    })

    it('requires name', () => {
        cy.get('[data-cy=name]')
        .click()

        cy.get('[data-cy=description]')
        .type('some description')
        .should('have.value', 'some description')

        cy.get('[data-cy=submitBtn]')
        cy.get('[disabled]')
    })

    it('requires description', () => {

        cy.get('[data-cy=description]')
        .click()

        cy.get('[data-cy=name]')
        .type('name')
        .should('have.value', 'name')

        

        cy.get('[data-cy=submitBtn]')
        cy.get('[disabled]')
    })
    it('navigates to home on successful login', () => {
        cy.get('[data-cy=name]')
        .type('name')
        .should('have.value', 'name')

        cy.get('[data-cy=description]')
        .type('some description')
        .should('have.value', 'some description')

        cy.get('[data-cy=submitBtn]').click()

        cy.url()
            .should('include', '/organizations')
        
    })
    
    it('on cancel', () => {
        
        cy.get('[data-cy=cancelBtn]').click()
        cy.url()
        .should('include', '/organizations')
        
    })
})