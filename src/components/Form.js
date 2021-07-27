import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comment : '',
             topic : 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({username : event.target.value})
    }
    
    handleChangeComment = (event) => {
        this.setState({comment : event.target.value})
    }

    handleTopicChange = (event) => {
        this.setState({topic : event.target.value})
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
        this.setState({comment : ''})
    }

    render() {
        return (
            <form action="" onSubmit = {this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value = {this.state.username} onChange = {this.handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="comments">Comment</label>
                    <textarea name="comment" id="comment" cols="30" rows="10" value={this.state.comment} 
                    onChange = {this.handleChangeComment}></textarea>
                </div>
                <div>
                    <label htmlFor="topic">Topic</label>
                    <select name="topic" id="topic" value = {this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="svelte">Svelte</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default Form
