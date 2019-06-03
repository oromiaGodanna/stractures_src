class NewOrganization {
    visit() {
      cy.visit('http://localhost:4200/newOrganization')
      }
    newOrg() {
      return cy.get(`[data-cy = newOrg]`).click();
    }
    checkSubmit(){
      return cy.get('[data-cy=submitBtn]')
    }
    checkEmptyFields(){
      cy.get('[data-cy=name]')
      .click()
      
      cy.get('[data-cy=description]')
      .click()
      cy.get('[data-cy=nameLabel]').click()

      return cy.get('[data-cy=submitBtn]')
    }
    requiresName(){
      cy.get('[data-cy=name]')
      .click()

      cy.get('[data-cy=description]')
      .type('some description')
      .should('have.value', 'some description')

      return cy.get('[data-cy=submitBtn]')
    }
    requiresDescription(){
      cy.get('[data-cy=description]')
      .click()

      cy.get('[data-cy=name]')
      .type('name')
      .should('have.value', 'name')

      

      return cy.get('[data-cy=submitBtn]')
    }
    onSuccess(){
      cy.get('[data-cy=name]')
      .type('name')
      .should('have.value', 'name')

      cy.get('[data-cy=description]')
      .type('some description')
      .should('have.value', 'some description')

      return cy.get('[data-cy=submitBtn]').click()
    }
    onCancel(){
      return cy.get('[data-cy=cancelBtn]').click()
    }
    
  }
  
  export default NewOrganization;