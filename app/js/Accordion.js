import React from 'react';
import AccordionPanel from './AccordionPanel';


class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState ({ 
                panels: [
                    { header: 'Section 1', content: 'Section 1 Content....' },
                    { header: 'Section 2', content: 'Section 2 Content....' },
                    { header: 'Section 3', content: 'Section 3 Content....' },
                    { header: 'Section 4', content: 'Section 4 Content....' },
                ]});
        }, 1000);
    }
    
    render() {
        let panels;
        if (this.state.panels) {
            panels = this.state.panels.map((panel, i) => {
                return (<AccordionPanel key={i} header={panel.header} content={panel.content}/>);
            });
        }
        return (
            <dl class="Accordion">
                {panels}
            </dl>
        );
    }
}

// Accordion from eggHead
/*const styles = {
    active: {
        display: 'inherit'
    },
    inactive: {
        display: 'none'
    }
};

class Accordion extends React.Component {

    constructor() {
        super();
        this.state = {
            active: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            active: !this.state.active
        })
    }

    render () {
        const stateStyle = this.state.active ? styles.active: styles.inactive;
        return (
            <section>
                <a onClick={this.toggle}>
                    {this.props.summary}
                </a>
                <p style={stateStyle}>
                    {this.props.details}
                </p>
            </section>
        );
    }
}

Accordion.propTypes = {
    summary: React.PropTypes.string.isRequired,
    details: React.PropTypes.string.isRequired
};

*/

/*
class Accordion {

    constructor(target, defaultPanel = 0) {

        this.panels = [];
        this.error = false;
        this.defaultPanel = defaultPanel;
        if (target) { 
            this.target = target;        
        }
        else {
            this.dispatchError('No id target passed as param');
        }
    }

    init () {

        if (!this.error) { 
            this.validateHtml();
            this.getPanels();
            this.addClickEventToPanelHeaders();
            this.closeAllPanels();
            if (this.defaultPanel > this.panels.length){
                this.defaultPanel = 0;
            }
            this.openPanel(this.panels[this.defaultPanel]);
        }
    }

    validateHtml () {

        if (!this.error) {
            if (!document.querySelector(this.target)) {
                this.dispatchError('No HTML elements for id target: ' + this.target);
                return;
            }
            if (!document.querySelector(this.target).classList.contains('Accordion')) {
                this.dispatchError('Target doesn\'t have Accordion class');
                return;
            }
            let headers = document.querySelectorAll(this.target + ' .Accordion-header');
            let contents = document.querySelectorAll(this.target + ' .Accordion-content');
            if (headers.length == 0 || contents.length == 0 || headers.length != contents.length) {
                this.dispatchError('Accordion is empty or dt and dd elements doesn\'t match');
            }
        }
    }

    getPanels () {

        if (!this.error) {
            let headers = document.querySelectorAll(this.target + ' .Accordion-header');
            let contents = document.querySelectorAll(this.target + ' .Accordion-content');
            let numPanels = headers.length;
            for (let i = 0; i < numPanels; i++) {
                this.panels[i] = {
                    header: headers[i], 
                    content: contents[i]
                }
            }
        }
    }

    addClickEventToPanelHeaders () {

        if (!this.error) {
            this.panels.forEach((panel) => {
                panel.header.addEventListener('click', (e) => {
                    this.closeAllPanels();
                    this.openPanel(panel);
                });
            });
        }
    }

    closeAllPanels () {

        if (!this.error) {
            for (let i = 0; i < this.panels.length; i++) {
                this.panels[i].content.classList.remove('is-open');
                this.panels[i].content.classList.add('is-close');
            }
        }
    }

    openPanel (panel) {

        if (!this.error) {
            panel.content.classList.remove('is-close');
            panel.content.classList.add('is-open');
        }
    }

    loadAjaxContent (url) {

        if (!this.error) {
            if (url) {
                return fetch(url)
                    .then((response) => response.json())
                    .then((users) => {
                        let html = '';
                        users.forEach((user) => {
                            html += `<p>${user.name} - ${user.email}</p>`;
                        });
                        this.panels[this.panels.length-1].content.innerHTML = html;
                    })
                    .catch(e => this.dispatchError(e));
            }
            else {
                return Promise.reject();
                this.dispatchError('No url passed as param');
            }
        }
    }

    dispatchError (e) {
        if (e){
            console.log (e);
            this.error = true;
            if (document.querySelector(this.target)){
                document.querySelector(this.target).innerHTML = `<div class="u-error">${e}</div>`;
            }
        }
    }
}*/

export default Accordion;
