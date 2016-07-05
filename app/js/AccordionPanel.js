import React from 'react';

const styles = {
    expanded: {
        display: 'inherit'
    },
    contract: {
        display: 'none'
    }
};

class AccordionPanel extends React.Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            expanded: false
        };
    }
    toggle () {
         this.setState({
            expanded: !this.state.expanded
        })
    }
    render() {
        const stateStyle = this.state.expanded ? styles.expanded: styles.contract;
        return (
            <div>
                <dt onClick={this.toggle} class="Accordion-header">{this.props.header}</dt>
                <dd class="Accordion-content" style={stateStyle}>
                    <p>{this.props.content}</p>
                </dd>
            </div>
        );
    }
}

export default AccordionPanel;
