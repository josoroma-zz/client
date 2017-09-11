import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

import Paper from 'material-ui/Paper';

import {
  Link
} from 'react-router-dom'

import {
  gql,
  graphql,
} from 'react-apollo';

import styles from './Posts.ui.css';

export const PostsQuery = gql`
  query PostsQuery {
    posts {
      id
      title
    }
  }
`;

const Posts = ({ data: { loading, error, posts }, classes }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{ error.message }</p>;
  }

  return (
    <div className="Posts">
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map(p => (
              <TableRow key={p.id} className={ 'post' + (p.id < 0 ? ' optimistic' : '') }>
                <TableCell><Link to={ p.id < 0 ? `/` : `post/${p.id}` }>{p.title}</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

Posts.propTypes = {
  classes: PropTypes.object.isRequired
};

Posts.defaultProps = {
  status: "Posts Component"
};

export default graphql(PostsQuery, {
  options: { pollInterval: 5000 },
})(withStyles(styles)(Posts));
