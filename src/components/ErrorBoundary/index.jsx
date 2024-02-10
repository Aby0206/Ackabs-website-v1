import React from 'react';
// import './styles.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('Error ',JSON.stringify(error));
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch',JSON.stringify(error));

    console.log(error, JSON.stringify(errorInfo));
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
