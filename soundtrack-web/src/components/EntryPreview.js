import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class EntryPreview extends Component {
        state = {
            votes: 0
        }
        

        upVote = (state) => {
            this.setState({
                votes: this.state.votes + 1
            })
        }
        render(){
        return (
            <div id={this.props.entry.id} className="past-entry-box-content" >
            
            <Link className="Entry-Link" to={`/entries/${this.props.entry.id}`}>{this.props.entry.date}</Link> 
            <button onClick={this.upVote} > Like this </button> {this.state.votes}
            <hr/>
            <p className="past-entry-box-text" > {this.props.entry.entry_text} </p>
           
            </div>

           
        )
    }
    }

export default EntryPreview
// {props.entry.date} 
// 
                