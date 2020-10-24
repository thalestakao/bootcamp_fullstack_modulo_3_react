# Trabalho Prático

## ENUNCIADO

1.  Criar uma aplicação com React, realizar cálculo de valorização/depreciação com base em um capital inicial, taxa de juros mensal e quantidade de parcelas mensal, utilizando o conceito de juros compostos:

    - Criar o projeto com o pacote create-react-app ou utilizar o projeto \_react-projetobase, já disponibilizado pelo professor no fórum do módulo. Esta última é a forma recomendada pelo professor.
    - Definir os elementos que farão parte do estado da aplicação. O estado da aplicação deve ser composto do capital inicial, a taxa de juros mensal e o período. A taxa de juros pode ser tanto positiva (investimento) quanto negativa (depreciação). A implementação da manipulação do estado da aplicação pode ser
    - O aluno deve pesquisar/investigar como deve ser feito o cálculo das prestações, com base nas imagens abaixo e no vídeo de apresentação do professor. Há várias formas de se implementar esse cálculo.
    - A interface fica a critério do aluno. O foco da avaliação serão os cálculos e conceitos relacionados à React Hooks.

2.  Algumas dicas com base na implementação feita pelo professor, que foi feita com a utilização de React Hooks - Faça com que os três inputs do estado da aplicação sejam do tipo number, para conseguir manipular os dados com as setas “para cima” e “para baixo” do teclado. - Será cobrado nas questões apenas o valor do capital inicial de até 100.000 reais, taxa de juros entre -12% e 12% ao mês e parcelas de 1 a 36. - Além dos três inputs, crie mais uma variável de estado, que será responsável por controlar as “parcelas.

    - Faça a implementação do cálculo das parcelas com useEffect, utilizando como deps as variáveis de estado referentes aos três inputs. Nesta implementação, eu (Raphael Gomide) não reaproveitei o valor atual das parcelas.
    - Quebre a aplicação em quatro componentes: `<App />, <Form />` (com os 3 inputs), `<Installments />` e `<Installment />` (parcelas/parcela, em inglês)

## RUN ONLINE

1. Faça fork do projeto no github
2. Acesse o stackblitz e faça uma conta lá, importante fazer login com o github nele. https://stackblitz.com/
3. Acesse https://stackblitz.com/github/SEU_USUARIO_GITHUB/bootcamp_fullstack_modulo_3_react?file=src%2Findex.js
