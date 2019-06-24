import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';

class SearchBar extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{ error }</div>
                </div>
            );
        }
    }
    
    renderInput = ({ input, label, meta }) => {
        // console.log(meta)
        const className=`field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValue) => {
        // formValue is whatever the user has entered 
        this.props.fetchVideos(formValue);
    }

    render() {
        // console.log(this.props)
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="query" component={this.renderInput} label="Type to search" />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formValue) => {
    const errors = {};

    if (!formValue.query) {
        errors.query = "Enter search query"; // errors.query must match Field name!
    } 

    return errors;
}

const formWrapped = reduxForm({
    validate,
    form: 'userInput'
})(SearchBar);

export default connect(null, { fetchVideos })(formWrapped);

