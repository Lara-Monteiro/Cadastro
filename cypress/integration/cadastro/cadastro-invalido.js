
Given(/^que o usuário acessa o servidor$/, () => {
	cy.visitarServidor();
});

When(/^fornece um email invalido$/, () => {
	const email = {
        Email: "lara123"
    };

    cy.preencherEmail(email);
});

Then(/^deve ser disparado uma mensagem de erro$/, () => {
	cy.get("#create_account_error").should("contain", "Invalid email address.");
});
