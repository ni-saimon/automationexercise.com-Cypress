class Signup{

    titleMrBtn = '#id_gender1'
    passwordInput = '[data-qa="password"]'
    dayDropdown = '[data-qa="days"]'
    monthDropdown = '[data-qa="months"]'
    yearDropdown = '[data-qa="years"]'
    newsletterCheckbox = '#newsletter'
    specialofferoptinCheckbox = '#optin'
    firstnameInput = '[data-qa="first_name"]'
    lastnameInput = '[data-qa="last_name"]'
    companyInput = '[data-qa="company"]'
    addressInput = '[data-qa="address"]'
    address2Input = '[data-qa="address2"]'
    contryDropdown = '[data-qa="country"]'
    stateInput = '[data-qa="state"]'
    cityInput = '[data-qa="city"]'
    zipcodeInput = '[data-qa="zipcode"]'
    mobileInput = '[data-qa="mobile_number"]'
    createaccountBtn = '[data-qa="create-account"]'
    confirmationMsg = 'b'
    
    constructor(){
        this.url = '/signup'
    }

    visit(){
        cy.visit(this.url)
    }

    title(){
        cy.get(this.titleMrBtn).click()
    }

    password(pass){
        cy.get(this.passwordInput).type(pass)
    }

    day(){
        cy.get(this.dayDropdown).select('23')
    }

    month(){
        cy.get(this.monthDropdown).select('September')
    }

    year(){
        cy.get(this.yearDropdown).select('2021')
    }

    receivenewsletter(){
        cy.get(this.newsletterCheckbox).click()
    }

    specialofferoptin(){
        cy.get(this.specialofferoptinCheckbox).click()
    }

    firstname(){
        cy.get(this.firstnameInput).type("Firstname")
    }

    lastname(){
        cy.get(this.lastnameInput).type("Lastname")
    }

    company(){
        cy.get(this.companyInput).type("Testcompany")
    }

    address(){
        cy.get(this.addressInput).type("Test address")
    }

    address2(){
        cy.get(this.address2Input).type("Test address 2")
    }

    country(){
        cy.get(this.contryDropdown).select('India')
    }

    state(){
        cy.get(this.stateInput).type("Test state")
    }

    city(){
        cy.get(this.cityInput).type("Test city")
    }

    zipcode(){
        cy.get(this.zipcodeInput).type("1000")
    }
    
    mobile(){
        cy.get(this.mobileInput).type("01234566789")
    }

    createaccount(){
        cy.get(this.createaccountBtn).click()
    }

    accountcreatedconfirmation(){
        cy.get(this.confirmationMsg).should('contain', 'Account Created!')
    }
}

export default Signup