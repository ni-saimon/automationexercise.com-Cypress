import Login from "../PageObjects/pages/Authentication/Login.js"
import Signup from "../PageObjects/pages/Authentication/Signup.js"
import Product from "../PageObjects/pages/Products/Products.js"
import Productdetails from "../PageObjects/pages/Products/Productdetails.js"
import Cart from "../PageObjects/pages/cart.js"
import Checkout from "../PageObjects/pages/checkout.js"
import Payment from "../PageObjects/pages/payment.js"
import data from "../data.json"

describe('LoginTest', () => {

    const l = new Login()
    const s = new Signup()
    const p = new Product()
    const d = new Productdetails()
    const c = new Cart()
    const ck = new Checkout()
    const pay = new Payment()
    const productname = data.ProductName
    const productcategory = data.Category
    const productprice = data.Price
    const quantity1 = -2
    const quantity2 = 10


    beforeEach("Visit signup/login page", () => {
        s.visit()
    })

    /*it('Login with invalid credentials', () => {
        cy.fixture('credentials').then(function (data) {
			this.data = data
            l.inputLoginpemail(this.data.useremail)
            l.inputLoginpassword(this.data.password+"1")
            l.clickLogin()
            l.invalidLoginmessage()
		})
    })*/

    it('Login with valid credentials', () => {
        cy.fixture('credentials').then(function (data) {
			this.data = data
            l.inputLoginpemail(this.data.useremail)
            l.inputLoginpassword(this.data.password)
            l.clickLogin()
            p.visit()
            p.searchProduct(productname)
            p.submitSearch()
            p.verifyFirstproducttitle(productname)
            p.clickProduct()
            d.verifyProductname(productname)
            d.verifyProductcategory(productcategory)
            d.verifyProductprice(productprice)
            d.quantity(quantity1)
            d.clickAddtocart()
            d.clickContinueshopping()
            c.visit()
            c.verifyPrice(productprice)
            c.verifyQuantity(quantity1)
            c.verifyTotal("Rs. "+(productprice.slice(4, productprice.length))*quantity1)
            c.clickProduct()
            d.quantity(quantity2)
            d.clickAddtocart()
            d.clickContinueshopping()
            c.visit()
            c.verifyPrice(productprice)
            c.verifyQuantity(quantity1+quantity2)
            c.verifyTotal("Rs. "+(productprice.slice(4, productprice.length))*(quantity1+quantity2))
            c.clickCheckout()
            ck.verifyAddress()
            ck.placeOrder()
            pay.inputcardinfo()
            pay.clickPaymentbutton()
            pay.downloadInvoice()
            cy.verifydownloadedfile("invoice.txt")
            cy.deleteDownloadsFolder();
            cy.logout()
		})
    })
})