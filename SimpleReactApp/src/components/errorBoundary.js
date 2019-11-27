import React, {Component} from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        const {error, errorInfo} = this.state;
        const {children} = this.props;
        if (errorInfo) {
            return (
                <>
                    <h2>Oops.... something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStackS}
                    </details>
                </>
            )
        }

        return children;
    }
}

export default ErrorBoundary