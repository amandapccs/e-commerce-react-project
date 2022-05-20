# Boas vindas ao repositório do projeto do projeto E-Commerce Store.
Neste projeto foi criado uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvida em grupo suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_, em um cenário mais próximo ao do mercado de trabalho.


## Desenvolvimento
Foi desenvolvida uma aplicação em React que simula uma loja online, na qual os usuários podem:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.

## API do Mercado Livre
- Foram utilizados 2 endpoints da API do Mercado Livre para realizar as requisições. Uma para listaras categorias disponíveis:
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Outra para buscar por itens por termo:
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
 
Mais sobre a API do _Mercado Livre_: [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).

## Sobre a aplicação
 A tela básica da plataforma é a tela de **listagem de produtos**, onde quem usa buscará o que quer para adicionar ao carrinho e filtrará suas buscas.
A tela inicial possui um botão de carrinho de compras, que inicialmente mostra um valor "0" ao lado do ícone do carrinho, conforme o usuário adiciona produtos ao carrinho, esse número corresponde ao valor de itens selecionados. Por fim, ao clicar nesse botão, a pessoa será redirecionada para a página do carrinho (inicialmente vazia), na qual terão os produtos desejados.

- Após digitar seus termos na caixa de busca a requisição é realizada à API do Mercado Livre utilizando a ação de um botão, tendo como parâmetros a frase digitada, e tais produtos aparecem na tela numa exibição resumida.
- Após a busca, é possível ver uma listagem de produtos relacionados a pesquisa feita. Cada produto, ao ser clicado, rediciona a pessoa para uma  página de detalhes do produto contendo mais informações sobre este. A página de detalhes do produto conta com um botão para adicioná-lo carrinho.
- Ao invés de digitar em uma caixa de busca pelo produto, o usuário pode optar por filtrar os produtos de uma categoria e navegar nessa nova seleção de produtos.
- A quantidade de produtos adicionados ao carrinho é limitada pela quantidade disponível em estoque.
