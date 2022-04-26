import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="pesquisar" data-testid="home-initial-message">
          <input id="pesquisar" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}

export default Home;
