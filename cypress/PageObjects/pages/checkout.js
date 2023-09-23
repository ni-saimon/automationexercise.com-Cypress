class Checkout{

    daname = '#address_delivery > .address_firstname'
    dacompany = '#address_delivery > :nth-child(3)'
    daaddress = '#address_delivery > :nth-child(4)'
    daaddress2 = '#address_delivery > :nth-child(5)'
    dalongaddress = '#address_delivery > .address_city'
    dacountry = '#address_delivery > .address_country_name'
    daphone = '#address_delivery > .address_phone'
    baname = '#address_invoice > .address_firstname'
    bacompany = '#address_invoice > :nth-child(3)'
    baaddress = '#address_invoice > :nth-child(4)'
    baaddress2 = '#address_invoice > :nth-child(5)'
    balongaddress = '#address_invoice > .address_city'
    bacountry = '#address_invoice > .address_country_name'
    baphone = '#address_invoice > .address_phone'
    placeorderBtn = ':nth-child(7) > .btn'

    constructor(){
        this.url = '/checkout'
    }

    visit(){
        cy.visit(this.url)
    }

    placeOrder(){
        cy.get(this.placeorderBtn).click()
    }

    verifyAddress(){
        cy.compareTwoElements(this.daname, this.baname)
        cy.compareTwoElements(this.dacompany, this.bacompany)
        cy.compareTwoElements(this.daaddress, this.baaddress)
        cy.compareTwoElements(this.daaddress2, this.baaddress2)
        cy.compareTwoElements(this.dalongaddress, this.balongaddress)
        cy.compareTwoElements(this.dacountry, this.bacountry)
        cy.compareTwoElements(this.daphone, this.baphone)
    }
}

export default Checkout