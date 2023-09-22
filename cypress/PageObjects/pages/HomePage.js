class HomePage{
    
    homeImage = 'a > img'

    visit(){
        cy.visit("/")
    }

    verifyHomepage(){
        cy.get(this.homeImage).should('be.visible')
    }
}

export default HomePage