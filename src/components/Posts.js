import React from 'react';

import {
  Link
} from 'react-router-dom'

import {
  gql,
  graphql,
} from 'react-apollo';

const Posts = ({ data: { loading, error, posts } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="Posts">
      {
        posts.map(p => (
          <div key={p.id} className={'post' + (p.id < 0 ? ' optimistic' : '')}>
            <Link to={p.id < 0 ? `/` : `post/${p.id}`}>
              {p.title}
            </Link>
          </div>
          )
        )
      }
    </div>
  );
};

export const PostsQuery = gql`
  query PostsQuery {
    posts {
      id
      title
    }
  }
`;

export default graphql(PostsQuery, {
  options: { pollInterval: 5000 },
})(Posts);
