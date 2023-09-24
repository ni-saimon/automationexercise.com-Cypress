import HomePage from "../PageObjects/pages/HomePage.js"
import Login from "../PageObjects/pages/Authentication/Login.js"
import Signup from "../PageObjects/pages/Authentication/Signup.js"
import Product from "../PageObjects/pages/Products/Products.js"
import Productdetails from "../PageObjects/pages/Products/Productdetails.js"
import Cart from "../PageObjects/pages/Cart.js"
import Checkout from "../PageObjects/pages/Checkout.js"
import Payment from "../PageObjects/pages/Payment.js"
import data from "../data.json"

describe('Automate a purchase', () => {

    const h = new HomePage();
    const l = new Login()
    const s = new Signup()
    const p = new Product()
    const d = new Productdetails()
    const c = new Cart()
    const ck = new Checkout()
    const pay = new Payment()
    let y = Math.floor(Math.random() * 999999)
    const pass = "12345678"
    const userName = "TestUser"
    const userEmail = "testuser"+y+"@email.com"
    const productname = data.ProductName
    const productcategory = data.Category
    const productprice = data.Price
    const quantity1 = -2
    const quantity2 = 10

    it('Verify Homepage', () => {
        h.visit()
        h.verifyHomepage()
    })

    it('Signup', () => {
        s.visit()
        l.clickSignup()
        l.inputSignupname(userName)
        l.inputSignupemail(userEmail)
        l.clickNewsignup()
        s.fillupsignupform(pass)
        s.createaccount()
        s.accountcreatedconfirmation()
        cy.wait(1000)
        cy.logout()
    })

    it('Login with invalid credentials', () => {
        s.visit()
        l.inputLoginpemail(userEmail)
        l.inputLoginpassword(pass+"1")
        l.clickLogin()
        l.invalidLoginmessage()
    })

    it('Login with valid credentials', () => {
        s.visit()
        l.inputLoginpemail(userEmail)
        l.inputLoginpassword(pass)
        l.clickLogin()
        p.visit()
        p.verifyTitle()
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
        cy.deleteDownloadsFolder()
        cy.logout()
    })
})