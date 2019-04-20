import React, { Component } from 'react';


 class EntryInput extends Component {
    state = {
        entryContent: "write your thoughts, memories, concerns, inspirations etc here....",
        cloudContent: "write your cloud thoughts here"
    }

    handleChange = (e) => {
        this.setState({
            entryContent: e.target.value,
            cloudContent: e.target.value
        })

    }

    handleSubmitEntry = (e) => {
        e.preventDefault()
        
        {this.props.createEntry(this.state)}
        this.setState({
            entryContent: " "
        })
    }

    handleSubmitCloud = (e) => {
        e.preventDefault()
        {this.props.createCloud(this.state)}
        this.setState({
            cloudContent: " "
        })
    }
    render() {

        return (
            <div>
                <div className="right-flex">
                    <form onSubmit={this.handleSubmitCloud}>
                            <label className="center-flex"> New Entry </label>
                            <textarea type="text" rows="10" name="cloud" cols="50" value={this.state.cloudContent} onChange={this.handleChange}/><br></br>
                            <input className="entry-button" type="submit" value="Declutter" />
                    </form>
                </div>  

                <div className="center-flex">
                    <form onSubmit={this.handleSubmitEntry}>
                        <label className="center-flex"> New Entry </label>
                        <textarea type="text" rows="20" name="entry" cols="50" value={this.state.entryContent} onChange={this.handleChange}/><br></br>
                        <input className="entry-button" type="submit" value="Save" />
                    </form>
                </div>
            </div>
        )
    }

}

export default EntryInput
//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated