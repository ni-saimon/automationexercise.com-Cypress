e2e testing of automationexercise.com

Video:
https://github.com/ni-saimon/automationexercise.com-Cypress/assets/40791066/0a7a518e-b6cc-4837-b8b4-1cbd1b061b5d

Test cases:
1. Visit https://automationexercise.com/
2. Verify that the home page is visible successfully
3. Sign Up with all the required and non-required fields (Date of Birth) including assertions
4. Log out from the website.
5. Login User with incorrect email and password. Verify the warning/error message.
6. Login User with the correct email and password. Verify All Products and product detail page.
7. Search Product. You can choose your desired product. Verify 'SEARCHED PRODUCTS' is visible.
8. Add Products to Cart.
9. Add quantity as negative such as (-2) for the product and click on Add to Cart button and Continue Shopping button.
10. Verify Price, negative Quantity and Negative Total.
11. Add the same Product to the cart, add a quantity of 10 for the product, and click on the Add to Cart button and Continue Shopping button.
12. Verify Price, Quantity and Total.
13. Verify Proceed to Checkout Button is not disabled and click on the button
14. Verify the details of DELIVERY ADDRESS and BILLING ADDRESS are the same.
15. Place an Order and fill up Payment details. You can put dummy card information.
16. Download the invoice.
17. Verify the invoice.txt file exists in the project, verify the text in the file and after that remove the text file from the project.
18. Log out from the website.
