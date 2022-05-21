# Projeto E-Commerce - JavaScript - React
Neste projeto foi criado uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvida em grupo suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_, em um cenário mais próximo ao do mercado de trabalho.

## Sumário

[Tecnologias](#tecnologias)

[Desenvolvimento](#desenvolvimento)

[Como instalar e inicializar o projeto](#como-instalar-e-inicializar-o-projeto)

[API do Mercado Livre](#api-do-mercado-livre)

[Detalhes e funcionamento](#detalhes-e-funcionamento)

[Imagens do projeto](#imagens-do-projeto)

[Pessoas Responsáveis](#pessoas-responsáveis)

## Tecnologias
- Código escrito na linguagem JavaScript;
- Utiliza a biblioteca React para construção de interfaces;

## Desenvolvimento
Foi desenvolvida uma aplicação em React que simula uma loja online, na qual os usuários podem:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.

## Como instalar e inicializar o projeto
- Instale as dependências:
  - `npm install`
- Inicialize o projeto:
  - `npm start`

## API do Mercado Livre
- Foram utilizados 2 endpoints da API do Mercado Livre para realizar as requisições. Uma para listaras categorias disponíveis:
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Outra para buscar por itens por termo:
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
 
Mais sobre a API do _Mercado Livre_: [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).

## Detalhes e funcionamento
 A tela básica da plataforma é a tela de **listagem de produtos**, onde quem usa buscará o que quer para adicionar ao carrinho e filtrará suas buscas.
A tela inicial possui um botão de carrinho de compras, que inicialmente mostra um valor "0" ao lado do ícone do carrinho, conforme o usuário adiciona produtos ao carrinho, esse número corresponde ao valor de itens selecionados. Por fim, ao clicar nesse botão, a pessoa será redirecionada para a página do carrinho (inicialmente vazia), na qual terão os produtos desejados. Após selecionar os produtos, a página do carrinho possui um botão "Pagamento" que redireciona o cliente para a página de checkout.

- Após digitar seus termos na caixa de busca a requisição é realizada à API do Mercado Livre utilizando a ação de um botão, tendo como parâmetros a frase digitada, e tais produtos aparecem na tela numa exibição resumida.
- Após a busca, é possível ver uma listagem de produtos relacionados a pesquisa feita. Cada produto, ao ser clicado, rediciona a pessoa para uma  página de detalhes do produto contendo mais informações sobre este. A página de detalhes do produto conta com um botão para adicioná-lo carrinho.
- Ao invés de digitar em uma caixa de busca pelo produto, o usuário pode optar por filtrar os produtos de uma categoria e navegar nessa nova seleção de produtos.
- A quantidade de produtos adicionados ao carrinho é limitada pela quantidade disponível em estoque.

## Imagens do projeto
![IuBKwf3](https://user-images.githubusercontent.com/97243572/169661582-1678f82f-6aab-417d-a075-bcb8c5eb4c8c.png)
- Tela com listagem de produtos

![Pw0CATY](https://user-images.githubusercontent.com/97243572/169661597-49805e12-d66d-476b-8f2b-d30044b533df.png)
- Página do carrinho com os itens selecionados

![4lOa4zB](https://user-images.githubusercontent.com/97243572/169661609-be3239d8-83aa-4ea0-b4ee-c46e230a49e2.png)
- Página de checkout, mostrando os produtos que estavam no carrinho, formulário de informações do comprador e formulário de pagamento.

## Pessoas Responsáveis
- [amandapccs](https://github.com/amandapccs)
- [MariaIsabellaMiranda](https://github.com/MariaIsabellaMiranda)
- [juniorhaussler](https://github.com/juniorhaussler)
- [tithos924](https://github.com/tithos924)

