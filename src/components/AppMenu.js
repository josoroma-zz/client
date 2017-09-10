import React from 'react';

import './AppMenu.css';

import {
  gql,
  graphql
} from 'react-apollo';

const AppMenuQuery = gql`
  query AppMenuQuery {
    menus {
      id
      name
      route
    }
  }
`;

const AppMenuComponent = ({ data: {loading, error, menus }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="App-menu">
      <ul>
        {
          menus.map(
            menu => (
              <li key={menu.id} className="App-menu-option">
                <a href="/{menu.route}">{menu.name}</a>
              </li>
            )
          )
        }
      </ul>
    </div>
  );
};

const AppMenu = graphql(AppMenuQuery, {
  options: { pollInterval: 5000 }
})(AppMenuComponent);

export default AppMenu;
