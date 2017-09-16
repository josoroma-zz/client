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

 - https://github.com/ReactTraining/react-router

```
yarn add react-router-dom
```

## UI

 - https://material-ui-1dab0.firebaseapp.com/getting-started/installation

```
yarn add material-ui@next material-ui-icons
```

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

## High order components (component composition pattern)

 - https://www.youtube.com/watch?v=LTunyI2Oyzw

Is actually a function that accepts a component as a parameter and reutrns an augmented version of this original component. We can do things like:

 * Messing with the original passed props: inspecting them or even chaging them.

 * Handler Hijacking: Which means rendering something else entirely instead of rendering the original component.

## custom-react-scripts

 - https://github.com/kitze/custom-react-scripts

Allow custom config for `create-react-app` without ejecting:

Features:

 * Decorators
 * babel-preset-stage-0
 * Less
 * Sass
 * CSS modules
 * Sass modules
 * Less modules
 * Stylus modules

## HOC - Configurable prop name

```
class CustomHOC extens Component {
  loadTime: PropTypes.string;

  render() {
    return(
      <p>
        {this.props.loadTime}
      </p>
    )
  }
}
```

```
@CustomHOC;
export default App;
 ||
export default CustomHOC(App);
```

```
@CustomHOC('CustomProp');
export default App;
 ||
export default CustomHOC('CustomProp')(App);
```

### Curried function

Is a function that receives one single parameter at a time, returning a new function that accepts another single parameter until all the parameters are provided.

```
@CustomHOC('contacts')

...

const CustomHOC = (propName) => (WrappedComponent) => {
  return class CustomHOC extens Component {
    componentDidMount() {
      this.startTime = Date.now();
    }

    componentWillUpdate() {
      this.endTime = Date.now();
    }

    isEmpty() {
      return(
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length)) && prop.length === 0)
        (prop.constructor === Object && Object.keys(prop).length ===0)
      )
    }

    render() {
      const customProps = {
        loadTime: ((this.endTime - this.startTime) / 1000)
      };
      return this.isEmpty(this.props[propName])? <div className='loader'></div> : <WrappedComponent {...this.props} {...customProps}>
    }
  }
}
```

## Redux (State Management)

Provides a `Store` that holds our `Application State Tree`. The `Store` then provides a `Dispatch` mechanism and lets us register `Reducers` in our application.

### Functional Unidirectional Data Flow

As stuff happens, a user clicks a button for example, We dispacth actions and they reach reducers to update the Aplication State Tree.

### Middleware (Redux, Saga, Thunk, Apollo)

 - https://www.youtube.com/watch?v=T-qtHI1qHIg

Is an instrument in Redux that let us add custom functions to extend the library. When We register a `Middleware Function` with the `Redux Store`, We will sit in the midlle between the dispatch function and the reducers.

When an action gets dispatch our `Middleware Function` is invoked before the action reaches the reducers, this give us the power to execute any arbitrary code during the dispacth, most importantly this gives us the power to make changes to the action or even dispacth new actions.

```
// Curried Function
const myMiddleware = store => next => action => {

}
```

## Redux Thunk Tricks

 - https://www.youtube.com/watch?v=xihoZZU0gao&t=32s

Redux Thunk is the most used library for `side effects` and `asynchronous calls` in `Redux`.
