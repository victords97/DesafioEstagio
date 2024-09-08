Cadastro de Usuários
Este projeto é uma aplicação simples de cadastro de usuários desenvolvida como parte de um desafio técnico. O objetivo é permitir que os usuários sejam cadastrados, editados e excluídos, tudo isso com uma interface web básica, utilizando HTML, CSS, Bootstrap e JavaScript.

Funcionalidades
Lista de Usuários:

Exibe uma lista de usuários cadastrados.
Cada linha da lista mostra o nome e o e-mail do usuário.
Opções para Editar e Excluir cada usuário.
Botão Novo Usuário para adicionar um novo usuário.
Cadastro de Usuários:

Formulário para cadastrar novos usuários ou editar usuários existentes.
Campos:
Nome: Campo de texto, limitado a 150 caracteres.
E-mail: Campo de e-mail, validado, com limite de 100 caracteres.
Senha: Campo de senha, limitado a 8 caracteres.
Status: Campo de seleção (Combobox) com duas opções: Ativo ou Excluído.
Validação dos dados via JavaScript.
Validações:

Verificação se os campos obrigatórios estão preenchidos.
Verificação básica de formato de e-mail.
Limitação de tamanho dos campos, como nome e senha.
Tecnologias Utilizadas
HTML: Usado para a estrutura da página.
CSS: Usado para o estilo da página.
Bootstrap: Utilizado para melhorar o layout e o design da aplicação, tornando-a responsiva e visualmente mais agradável.
JavaScript: Usado para a lógica do aplicativo, incluindo validações, manipulação de DOM e gerenciamento de usuários (adicionar, editar, excluir).
Funcionalidades Detalhadas
1. Lista de Usuários
A lista de usuários é exibida em uma tabela. Cada usuário tem as seguintes informações:
Nome: O nome do usuário.
E-mail: O endereço de e-mail do usuário.
A tabela também tem dois botões para cada usuário:
Editar: Abre o modal de edição, onde os dados do usuário podem ser alterados.
Excluir: Remove o usuário da lista.
2. Cadastro e Edição de Usuários
O formulário de cadastro/edição é exibido em um modal.
Ao clicar em Novo Usuário, o formulário aparece vazio.
Ao clicar em Editar, o formulário é preenchido com os dados do usuário selecionado para edição.
O botão Salvar adiciona ou atualiza o usuário e atualiza a lista de usuários.
3. Validação
Nome: Valida se o campo não está vazio e se contém no máximo 150 caracteres.
E-mail: Valida se o campo está preenchido e se contém um formato de e-mail válido.
Senha: Valida se o campo contém no máximo 8 caracteres.
Status: Valida se o status foi selecionado corretamente entre Ativo e Excluído.
Melhorias Futuras
Algumas melhorias que podem ser feitas no projeto:

Integração com banco de dados: Atualmente, os dados são armazenados diretamente no código (em um array). A próxima etapa seria integrar um banco de dados para persistir os dados.
Filtro de pesquisa: Adicionar um campo de pesquisa para filtrar usuários na tabela.
Melhor validação de e-mail: Implementar uma validação de e-mail mais robusta, usando expressões regulares.
Paginação da lista: Implementar paginação para gerenciar grandes listas de usuários.
