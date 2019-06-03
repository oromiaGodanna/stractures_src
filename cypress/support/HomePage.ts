class HomePage {
    visit() {
        cy.visit('/');
      }
    getNewOrg() {
      return cy.get(`[data-cy = newOrg]`).click();
    }
    getDepartment(){
        return cy.get('[data-cy=orgList]').first().find('[data-cy=departmentsBtn]').click()
    }
    deletePop(){
        cy.get('[data-cy=popconfirm]').first().click()
        return cy.get('.ant-popover-inner-content')
    }
    deleteOrganization(){
        cy.get('[data-cy=popconfirm]').first().click()
        cy.get('.ant-popover-inner-content').find('.ant-btn-primary').click()
        return cy.get('.ant-message-notice-content')
    }
    cancelDelete(){
        cy.get('[data-cy=popconfirm]').first().click()
        cy.get('div.ant-popover-inner-content').find('.ant-btn-default').click()
        return cy.get('.ant-message-notice-content')
    }
    
  }
  
  export default HomePage;