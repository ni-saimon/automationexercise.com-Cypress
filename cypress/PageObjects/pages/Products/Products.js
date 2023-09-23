class Product{

    productsLink = '.shop-menu > .nav > :nth-child(2) > a'
    title = '.title'
    searchbox = '#search_product'
    submitsearchBtn = '#submit_search'
    firstProduct = ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'
    firstproductTitle = '.productinfo > p'

    constructor(){
        this.url = '/products'
    }

    visit(){
        cy.visit(this.url)
    }

    verifyTitle(){
        cy.get(this.title).should('contain', 'All Products')
    }

    clickProduct(){
        cy.get(this.firstProduct).click()
    }

    searchProduct(productname){
        cy.get(this.searchbox).type(productname)
    }

    verifyFirstproducttitle(productname){
        cy.get(this.firstproductTitle).should('contain',productname)
    }

    submitSearch(){
        cy.get(this.submitsearchBtn).click()
    }
}

export default Product