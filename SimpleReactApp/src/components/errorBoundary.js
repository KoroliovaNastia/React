/* @flow */
import * as React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: React.Node,
};

type State = {
  error: Object,
  errorInfo: Object,
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Object, errorInfo: Object) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <>
          <h2>Oops.... something went wrong.</h2>
          <details>
            {error && error.toString()}
            <br />
            {errorInfo.componentStackS}
          </details>
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
