import HomePage from '../../support/HomePage';

describe('New Organization', () => {
  const organizations = new HomePage();
  beforeEach(() => {
    organizations.visit();
  })
  it('should go to new organization page', () => {

    const newOrg = organizations.getNewOrg();
    newOrg.url().should('include', '/newOrganization');
  })
  it('Navigates to Departments list', () => {
    const depts = organizations.getDepartment();
    depts.url()
      .should('include', 'departments')

  })
  it('Delete initiates a popconfirm', () => {
    const deletePop = organizations.deletePop();
    deletePop.contains('Are you sure delete this Organization? All departments under will be removed if you confirm!')
  })
  it('Delets organization', () => {
    const deletOrg = organizations.deleteOrganization()
    deletOrg.contains('Organization Deleted Successfully.')
    //console.log(deletOrg +"return")
  })
  it('Cancel delete', () => {
    const cancelDelete = organizations.cancelDelete()
    cancelDelete.contains('Task canceled.')
    //console.log(cancelDelete +"return")
  })
});