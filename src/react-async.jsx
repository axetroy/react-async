import React, { Component, PropTypes } from 'react';

const PENDING = 'pending';
const RESOLVE = 'resolve';
const REJECT = 'reject';
const FINALLY = 'finally';

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

export default class Async extends Component {
  static PropTypes = {
    value: PropTypes.string,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
  };

  state = {
    status: PENDING
  };

  componentDidMount() {
    const promise = this.props.await;
    this.handlePromise(promise);
  }

  componentWillReceiveProps(nextProps) {
    const promise = nextProps.await;
    this.handlePromise(promise);
  }

  handlePromise(promise) {
    if (!isPromise(promise)) return;
    this.setState({ status: 'pending' });
    promise
      .then(() => {
        this.setState({ status: RESOLVE });
      })
      .catch(() => {
        this.setState({ status: REJECT });
      });
  }

  render() {
    const { children } = this.props;
    const promise = this.props.await;
    if (!isPromise(promise)) return <div />;

    return (
      <div
        className={
          'react-async' +
            (this.props.className ? ' ' + this.props.className : '')
        }
        style={this.props.style}
        key={Math.random()}
      >
        {children
          .filter(child => {
            if (typeof child === 'function') return true;
            if (typeof child !== 'object') return true;
            if (typeof child.type === 'string') return true;
            if (!child.type) return true;
            const { status } = this.state;
            const childName = child.type.name.toLowerCase();
            const isMatchStatus = childName === status;
            const isAsyncDone =
              [REJECT, RESOLVE].findIndex(v => status === v) >= 0 &&
              childName === FINALLY;
            return isMatchStatus || isAsyncDone;
          })
          .map(child => {
            if (typeof child === 'function') {
              return (
                <div className="react-async-function" key={Math.random()}>
                  {child.call(this, this)}
                </div>
              );
            } else {
              return child;
            }
          })}
      </div>
    );
  }
}

export class Pending extends Component {
  render() {
    return (
      <div className="react-async-pending" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export class Resolve extends Component {
  render() {
    return (
      <div className="react-async-resolve" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export class Reject extends Component {
  render() {
    return (
      <div className="react-async-reject" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export class Finally extends Component {
  render() {
    return (
      <div className="react-async-finally" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}
