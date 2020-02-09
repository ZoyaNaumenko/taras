describe('My First test', function(){
    it('open website', function(){
        cy.visit('https://row.jimmychoo.com/en/myaccount')
        cy.url().should('include', '/en/myaccount')
    })

    it('fill login field', function () {
        cy.get('input#dwfrm_login_username.f-email.email.f-state-required').eq(1).type('zoia.tretiak@gmail.com')
      })
    it('fill login field', function () {
        cy.get('input#dwfrm_login_password.f-password.f-state-required').eq(1).type('!Q2w3e4r')
      })  
    it('submit form', function () {
        // cy.get('#dwfrm_login').eq(1).submit()
        cy.get('button[name="dwfrm_login_login"]').eq(1).click()
        cy.wait(500)

        // cy.get('.usermenu-label usermenu-label-name').should('zoia')                    // Assert that '.error' is empty
    })  
})