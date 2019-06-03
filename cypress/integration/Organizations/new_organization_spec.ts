import NewOrganization from '../../support/NewOrganization';

describe('New Organization', () => {
    const organizations = new NewOrganization();
    beforeEach(() => {
        organizations.visit();
    })

    it('submit disabled untill all fileds are touched and submitted', () => {

        const newOrg = organizations.checkSubmit()
        newOrg.get('[disabled]')

    })
    it('requires name, description and submit disabled', () => {
        const newOrg = organizations.checkEmptyFields()
        newOrg.get('[disabled]')
    })

    it('requires name', () => {
        const newOrg = organizations.requiresName();
        newOrg.get('[disabled]')
    })

    it('requires description', () => {

        const newOrg = organizations.requiresDescription();
        newOrg.get('[disabled]')
    })
    it('navigates to home on successful login', () => {

        const newOrg = organizations.onSuccess()
        newOrg.url()
            .should('include', '/organizations')

    })

    it('on cancel', () => {

        const newOrg = organizations.onCancel();
        newOrg.url()
            .should('include', '/organizations')

    })

})