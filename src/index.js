import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from 'react-dom';
import { hello, goodbye} from './lib';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<div>
                    {hello}
                    {goodbye}
                </div>, document.getElementById('root'));
registerServiceWorker();
