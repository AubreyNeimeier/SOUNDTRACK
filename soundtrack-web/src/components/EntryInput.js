import React, { Component } from 'react';


 class EntryInput extends Component{
    state = {
        entryContent: " "
    }

    handleChange = (e) => {
        this.setState({
            entryContent: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.createEntry(this.state)
        this.setState({
            entryContent: " "
        })
    }
    render() {
        const { entries } = this.props

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea type="text" rows="20" name="entry" cols="50" value={this.state.entryContent} onChange={this.handleChange}/>
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }

}

export default EntryInput
//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated