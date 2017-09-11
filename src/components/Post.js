import React from 'react';

import {
  Link
} from 'react-router-dom'

import NotFound from './NotFound';

import {
  gql,
  graphql,
} from 'react-apollo';

const Post = ({ data: { loading, error, post }, match }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{ error.message }</p>;
  }

  if (post === null) {
    return <NotFound />
  }

  return (
    <div className="Post">
      <div className="Post-name">
        <h2>{ post.title }</h2>
      </div>

      <Link to="/">Back</Link>
    </div>
  );
}

export const PostQuery = gql`
  query PostQuery($id : ID!) {
    post(id: $id) {
      id
      title
    }
  }
`;

export default (graphql(PostQuery, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
    }
  }),
})(Post));
