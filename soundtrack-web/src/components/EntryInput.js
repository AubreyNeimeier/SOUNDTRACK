import React, { Component } from 'react';


 class EntryInput extends Component{
    state = {
        entryContent: "write your thoughts, memories, concerns, inspirations etc here...."
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

        return (
            <div className="center-flex">
                <form onSubmit={this.handleSubmit}>
                    <label className="center-flex"> New Entry </label>
                    <textarea type="text" rows="20" name="entry" cols="50" value={this.state.entryContent} onChange={this.handleChange}/><br></br>
                    <input className="entry-button" type="submit" value="Save" />
                </form>
            </div>
        )
    }

}

export default EntryInput
//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated