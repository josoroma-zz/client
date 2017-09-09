import React from 'react';

import './AppMenu.css';

import {
  gql,
  graphql
} from 'react-apollo';

const AppMenuQuery = gql`
  query AppMenuQuery {
    options {
      id
      name
      route
    }
  }
`;

const AppMenu = ({ data: {loading, error, options }}) => {
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
          options.map(
            option => (
              <li key={option.id} className={'option ' + (option.id < 0 ? 'optimistic' : '')}>
                <a href="/{option.route}">{option.name}</a>
              </li>
            )
          )
        }
      </ul>
    </div>
  );
};

export default graphql(AppMenuQuery, {
  options: { pollInterval: 5000 },
})(AppMenu);
