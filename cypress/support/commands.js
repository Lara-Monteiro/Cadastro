// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitarServidor", visitarServidor => {
    cy.visit('?controller=authentication&back=my-account')
});

Cypress.Commands.add("preencherEmail", email => {
    cy.get("#email_create").type(email.Email);
    cy.get("#SubmitCreate").click()
});

Cypress.Commands.add("preencherTodosOsCampos", cadastro => {
    cy.get("#customer_firstname").type(cadastro.FirstName);
    cy.get("#customer_lastname").type(cadastro.LastName);
    cy.get("#passwd").type(cadastro.Password);
    cy.get("#address1").type(cadastro.Address);
    cy.get("#city").type(cadastro.City);
    cy.get("#id_state").select(cadastro.State);
    cy.get("input[name='postcode']").type(cadastro.PostalCode);
    cy.get("#phone_mobile").type(cadastro.Mobilephone);
    cy.get("#submitAccount").click()
});