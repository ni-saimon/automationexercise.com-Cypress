class Cart{

    productTitle = 'h4 > a'
    price = '.cart_price > p'
    quantity = '.disabled'
    total = '.cart_total_price'
    checkoutBtn = '.col-sm-6 > .btn'

    constructor(){
        this.url = '/view_cart'
    }

    visit(){
        cy.visit(this.url)
    }

    clickProduct(){
        cy.get(this.productTitle).click()
    }

   verifyPrice(productprice){
        cy.get(this.price).should('contain', productprice)
    }

    verifyQuantity(productquantity){
        cy.get(this.quantity).should('contain', productquantity)
    }

    verifyTotal(totalamount){
        cy.get(this.total).should('contain', totalamount)
    }

    clickCheckout(){
        cy.get(this.checkoutBtn).should('not.be.disabled').click()
    }
    
}

export default Cart