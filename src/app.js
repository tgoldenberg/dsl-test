'use strict';
import { add2 } from './b';
import './main.less';

const resultEl = document.querySelector('#result');
resultEl.textContent = add2(5);
