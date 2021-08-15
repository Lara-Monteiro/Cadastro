
Given(/^que o usuário acessa o servidor$/, () => {
	cy.visitarServidor();
});

When(/^fornece um email válido$/, () => {
	const email = {
        Email: "lara.tt1t@gmail.com"
    };

    cy.preencherEmail(email);
});

When(/^salva com campos requeridos em branco$/, () => {
	cy.get("#submitAccount").click();
});

Then(/^deve ser diparado uma mensagem de erro$/, () => {
	cy.get("div[class='alert alert-danger']").should("contain", "There are 8 errors");
});