class Productdetails{

    productImg = '.view-product > img'
    quantityBox = '#quantity'
    addtocartBtn = ':nth-child(5) > .btn'
    continueshoppingBtn = '.modal-footer > .btn'
    productName = '.product-information > h2'
    productCtgr = '.product-information > :nth-child(3)'
    productPrice = ':nth-child(5) > span'
    

    constructor(){
        this.url = '/products'
    }

    visit(){
        cy.visit(this.url)
    }

    quantity(quant){
        cy.get(this.quantityBox).clear().type(quant)
    }

    clickAddtocart(){
        cy.get(this.addtocartBtn).click()
    }

    clickContinueshopping(){
        cy.get(this.continueshoppingBtn).click()
    }

    verifyProductimage(){
        cy.get(this.productImg).should('be.visible')
    }

    verifyProductname(name){
        cy.get(this.productName).should('contain', name)
    }

    verifyProductcategory(category){
        cy.get(this.productCtgr).should('contain', "Category: "+category)
    }

    verifyProductprice(price){
        cy.get(this.productPrice).should('contain', price)
    }
    
}

export default Productdetails