class HomePage{

    
    homeImage = 'a > img'

    verifyHomepage(){
        cy.get(this.homeImage).should('be.visible')
    }
}

export default HomePage