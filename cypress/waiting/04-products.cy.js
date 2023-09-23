import Product from "../PageObjects/pages/Products/Products.js"
import Productdetails from "../PageObjects/pages/Products/Productdetails.js"

describe('Product details', () => {

    const p = new Product()
    const d = new Productdetails()

    beforeEach("Visit products page", () => {
        p.visit()
    })

    it('Verify Products page', () => {
        p.verifyTitle()
    })
})