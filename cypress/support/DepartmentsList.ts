class DepartmentList {
    visit() {
       cy.visit('/');
       return cy.get('[data-cy=orgList]').find('[data-cy=departmentsBtn]').first().click()
      
      }
    goToNewDept(){
      return cy.get('[data-cy=newDepartment]').click();
    }
    goToDeptDetail(){
      return cy.get('[data-cy=departmentsList]').find('[data-cy=departmentName]').first().click()
    }
    viewTree(){
      cy.get('[data-cy=treeView]').click();
      return cy.get('[data-cy=treeItem]').find('.ant-tree-title').first().click();
    }
    editDept(){
      return cy.get('[data-cy=editDept]').first().click()
  }
   
    
  }
  
  export default DepartmentList;