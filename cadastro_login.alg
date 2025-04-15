algoritmo "Cadastro_e_Login"
var
   nomeUsuarioCadastrado, senhaCadastrada: caractere
   nomeUsuarioLogin, senhaLogin: caractere
   cadastroRealizado: logico

inicio
   cadastroRealizado <- falso

   // Cadastro do usuário
   escreva("=== CADASTRO DE USUÁRIO ===", "\n")
   escreva("Digite o nome de usuário para cadastro: ")
   leia(nomeUsuarioCadastrado)
   escreva("Digite a senha: ")
   leia(senhaCadastrada)

   cadastroRealizado <- verdadeiro
   escreva("\nCadastro realizado com sucesso!\n\n")

   // Login do usuário
   se cadastroRealizado então
      escreva("=== LOGIN DE USUÁRIO ===", "\n")
      escreva("Digite o nome de usuário: ")
      leia(nomeUsuarioLogin)
      escreva("Digite a senha: ")
      leia(senhaLogin)

      // Verifica se os dados são iguais aos cadastrados
      se (nomeUsuarioLogin = nomeUsuarioCadastrado) e (senhaLogin = senhaCadastrada) então
         escreva("\nLogin realizado com sucesso! Bem-vindo(a), ", nomeUsuarioLogin, "!\n")
      senao
         escreva("\nUsuário ou senha incorretos. Tente novamente.\n")
      fimse
   fimse

fimalgoritmo
