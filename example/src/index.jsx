import React from 'react';
import { render } from 'react-dom';
import Async, {
  Resolve,
  Reject,
  Finally,
  Pending
} from '../../lib/react-async';

const element = document.createElement('div');
document.body.appendChild(element);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promise: this.createPromise()
    };
  }
  createPromise() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.setState({ promise: this.createPromise() });
          }}
        >
          Click and refresh
        </button>
        <Async await={this.state.promise}>
          <div>async header, i will always here</div>
          {component => {
            return (
              <div>
                async status: {component.state.status}
              </div>
            );
          }}
          <Pending>promise pending</Pending>
          <Resolve>
            promise resolve block
          </Resolve>
          <Reject>
            promise reject block
          </Reject>
          <Finally>
            promise finally block
          </Finally>
        </Async>
      </div>
    );
  }
}

render(<App />, element);
