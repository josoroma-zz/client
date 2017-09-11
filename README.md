# Client

```
nvm use node

npm install -g create-react-app

create-react-app client

cd client

 yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
```

## React Apollo Client

```
yarn add react-apollo apollo-client graphql-tag graphql-tools apollo-test-utils
```

## React Router

 * https://github.com/ReactTraining/react-router

```
yarn add react-router-dom
```

## UI

 * https://material-ui-1dab0.firebaseapp.com/getting-started/installation

```
yarn add material-ui@next material-ui-icons
```

Please note that @next will only point to pre-releases; to get the latest stable release use @latest instead.

### static propTypes

```
static propTypes = {
  classes: PropTypes.object.isRequired
};

static defaultProp = {
  classes: []
};
```

### App.propTypes

Class:

```
App.propTypes = {
  classes: PropTypes.object.isRequired
};

HOC:

App.defaultProps = {
  status: "Main App"
};
```
