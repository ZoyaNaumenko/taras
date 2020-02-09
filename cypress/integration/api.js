describe('get home page', function(){
    it('get', function(){
        cy.request({
            method: 'GET',
            url: 'https://row.jimmychoo.com/en/home',

        })
        .then(responce =>{
            expect(responce.status).to.eq(200);
        }); 
    })
})