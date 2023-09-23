class Payment{
    
    cardnameInp = '[data-qa="name-on-card"]'
    cardnoInp = '[data-qa="card-number"]'
    cardcvcInp = '[data-qa="cvc"]'
    cardexpInp = '[data-qa="expiry-month"]'
    cardyearInp = '[data-qa="expiry-year"]'
    payBtn = '[data-qa="pay-button"]'
    invoiceBtn = '.col-sm-9 > .btn-default'

    constructor(){
        this.url = '/payment'
    }

    visit(){
        cy.visit(this.url)
    }

    inputName(){
        cy.get(this.cardnameInp).type("A B")
    }

    inputNo(){
        cy.get(this.cardnoInp).type("1111111111111111")
    }

    inputCVC(){
        cy.get(this.cardcvcInp).type("111")
    }

    inputExpirationmonth(){
        cy.get(this.cardexpInp).type("11")
    }

    inputExpirationyear(){
        cy.get(this.cardyearInp).type("1111")
    }

    inputcardinfo(){
        this.inputName()
        this.inputNo()
        this.inputCVC()
        this.inputExpirationmonth()
        this.inputExpirationyear()
    }

    clickPaymentbutton(){
        cy.get(this.payBtn).click()
    }

    downloadInvoice(){
        cy.get(this.invoiceBtn).click()
    }
}

export default Payment