

it('webapp deve estar online', function(){
    cy.visit('/')

    cy.title()
        .should('eql', 'Samurai Barbershop by QAninja')

})