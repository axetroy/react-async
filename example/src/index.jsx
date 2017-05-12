import React from 'react';
import { render } from 'react-dom';
import Async, { Resolve, Reject } from '../../lib/react-async';

const element = document.createElement('div');
document.body.appendChild(element);
render(
  <div>
    hello world
    <Async
      promise={
        new Promise(function(resolve, reject) {
          console.log('run promise');
          setTimeout(() => {
            reject();
          }, 3000);
        })
      }
    >
      <div>hello aaa</div>
      123
      <Resolve>
        promise resolve
      </Resolve>
      <Reject>
        promise reject
      </Reject>
    </Async>
  </div>,
  element
);
