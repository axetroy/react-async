import React, { Component, PropTypes } from 'react';

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

function link(namespace) {
  return function(target) {
    target.prototype.link = function() {};
  };
}

export default class Async extends Component {
  static PropTypes = {
    value: PropTypes.string,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
  };

  state = {
    status: 'pending',
    pending: <div />,
    resolve: <div />,
    reject: <div />,
    ['finally']: <div />
  };

  componentDidMount() {
    const { promise } = this.props;
    if (!isPromise(promise)) return;
    promise
      .then(() => {
        this.setState({ status: 'resolve' });
      })
      .catch(() => {
        this.setState({ status: 'reject' });
      });
  }

  componentWillUnmount() {}

  render() {
    const { promise, children } = this.props;
    if (!isPromise(promise)) return <div />;

    console.log(children);

    return (
      <div>
        async {this.state.status}
        {children
          .filter(v => {
            if (typeof v !== 'object') return true;
            if (typeof v.type === 'string') return true;
            if (!v.type) return true;
            return v.type.name.toLowerCase() === this.state.status;
          })
          .map(v => v)}
      </div>
    );
  }
}

export class Resolve extends Component {
  render() {
    return this.props.children;
  }
}

export class Reject extends Component {
  render() {
    return this.props.children;
  }
}

export class Finally extends Component {
  render() {
    return this.props.children;
  }
}
