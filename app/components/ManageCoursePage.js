import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../actions/authorActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }
    render () {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
            />
        );
    }
}

function mapStateToProps (state, ownProps) {
    let course = {
        id: '', title: '', watchHref: '',
        authorId: '', length: '', category: ''
    };

    const authorsFormattedForDropDown = state.authors.map ( (author) => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormattedForDropDown
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
