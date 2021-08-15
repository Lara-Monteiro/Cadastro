
Given(/^que o usuário acessa o servidor$/, () => {
	cy.visitarServidor();
});

When(/^fornece um email válido$/, () => {
	const email = {
        Email: "lara.smont_01234@gmail.com"
    };

    cy.preencherEmail(email);
});

When(/^preenche o formulário de Cadastro$/, () => {
	const cadastro = {
        FirstName: "Lara",
        LastName: "Monteiro",
        Password: "Teste123",
        Address: "Teste Teste, 0000",
        City: "Montgomery",
        State: "1",
        PostalCode: "00000",
        Mobilephone: "000000000"
    };
    
    cy.preencherTodosOsCampos(cadastro);
});

Then(/^deve ter seu perfil cadastrado com sucesso$/, () => {
	cy.get("h1[class='page-heading']").should("contain", "My account");
});
