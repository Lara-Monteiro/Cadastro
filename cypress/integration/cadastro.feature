Feature: cadastrar um usuário no AutomationPractice

    Scenario: Cadastro efetuado com sucesso
        Given que o usuário acessa o servidor
        When fornece um email válido
        And preenche o formulário de Cadastro
        Then deve ter seu perfil cadastrado com sucesso

    Scenario: Tentativa de cadastro com email invalido
        Given que o usuário acessa o servidor
        When fornece um email invalido
        Then deve ser disparado uma mensagem de erro

    Scenario: Tentativa de cadastro com campos requeridos em branco
        Given que o usuário acessa o servidor
        When fornece um email válido
        And salva com campos requeridos em branco
        Then deve ser diparado uma mensagem de erro
    
    Scenario: Tentativa de cadastro com email já existente
        Given que o usuário acessa o servidor
        When fornece um email já cadastrado
        Then deve ser disparado mensagem de erro