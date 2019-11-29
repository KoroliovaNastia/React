describe('Search form', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    const typedText = 'soon';

    it('accepts input value', () => {

        cy.get('.uk-search-field')
            .type(typedText)
            .should('have.value', typedText);   
    })

    it('filter movies by title', () => {
        cy.get('.uk-search-field')
            .type(typedText)
            .get('[data-cy=search]')
            .click()
            .get('.container')
            .first()
            .find('.movie')
            .should('have.length', 1)
    })

    it('filter movies if change filter to genre', () => {
        cy.get('.filter-container')
            .find('[data-cy=genre]')
            .click()
            .get('.uk-search-field')
            .type(typedText)
            .get('[data-cy=search]')
            .click()
            .get('.container')
            .first()
            .find('.movie')
            .should('have.length', 0)     
    })
})