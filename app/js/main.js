
/*window.onload = () => {
    const accordion1 = new Accordion('#a1', 3);
    accordion1.init();
    accordion1.loadAjaxContent('data/users.json');
};*/
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

const data = {
	summary: 'Header',
	details: 'Content text This is quite awesome'
};

ReactDOM.render(<Accordion summary={data.summary} details={data.details} />, document.getElementById('a1'));
