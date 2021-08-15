
Given(/^que o usuário acessa o servidor$/, () => {
	cy.visitarServidor();
});

When(/^fornece um email já cadastrado$/, () => {
	const email = {
        Email: "lara.smont_@gmail.com"
    };

    cy.preencherEmail(email);;
});

Then(/^deve ser disparado mensagem de erro$/, () => {
	cy.get("#create_account_error").should("contain","An account using this email address has already been registered. Please enter a valid password or request a new one. ");
});
