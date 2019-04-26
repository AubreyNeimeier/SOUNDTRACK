import React, { Component } from 'react';


 class EntryInput extends Component {
    state = {
        entryContent: "write your thoughts, memories, concerns, inspirations etc after completing your morning pages.",
        cloudContent: '"Morning Pages are three pages of longhand, stream of consciousness writing done first thing in the morning. *There is no wrong way to do Morning Pages they are not high art. They are not even “writing. They are about anything and everything that crosses your mind– and they are for your eyes only. Morning Pages provoke, clarify, comfort, cajole, prioritize and synchronize the day at hand. Do not over-think Morning Pages: just put three pages of anything on the page...and then do three more pages tomorrow." - Julia Cameron'
    }

    handleChangeEntry = (e) => {
        this.setState({
            entryContent: e.target.value
        })

    }

    handleChangeCloud = (e) => {
        this.setState({
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
                            <label className="center-flex"> Morning Pages </label>
                            <textarea type="text" rows="10" name="cloud" cols="50" value={this.state.cloudContent} onChange={this.handleChangeCloud}/><br></br>
                            <input className="entry-button" type="submit" value="Declutter" />
                    </form>
                </div>  

                <div className="center-flex">
                    <form onSubmit={this.handleSubmitEntry}>
                        <label className="center-flex"> New Entry </label>
                        <textarea type="text" rows="20" name="entry" cols="50" value={this.state.entryContent} onChange={this.handleChangeEntry}/><br></br>
                        <input className="entry-button" type="submit" value="Save" />
                    </form>
                </div>
            </div>
        )
    }

}

export default EntryInput
//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated
//testing commit so making a change