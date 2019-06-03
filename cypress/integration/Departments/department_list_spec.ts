import DepartmentList from '../../support/DepartmentsList';

describe('Department List', () => {
    const departments = new DepartmentList();
    beforeEach(() => {
        const depts = departments.visit();
        depts.url()
          .should('include', 'departments')
    })
    it('should go to new department page', () => {
        const newDept = departments.goToNewDept();
        newDept.url().should('include', '/newDepartment');
     
    })
    it('should go to details from the list', () => {
        const newDept = departments.goToDeptDetail();
        newDept.url().should('include', '/detail');
     
    })

    it('should switch to tree view', () => {
        const dept = departments.viewTree();
        dept.url().should('include', '/detail')
    
      })
      it('should go to Edit page', () => {
        const newDept = departments.editDept();
        newDept.url().should('include', '/edit');
     
    })
})