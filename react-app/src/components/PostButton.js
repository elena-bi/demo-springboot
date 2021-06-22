import React from 'react'
import {doFetchWithPost} from '../connection/fetches'

const messageToPost = 'test-message-handlePostButton';


export default class PostButton extends React.Component {
    handlePostButtonClick(event, url) {
        //do a POST fetch to a url
        doFetchWithPost(url, messageToPost).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        return (
            <button onClick={(event) => this.handlePostButtonClick(event, this.props.postAddress)}>
                Post message to server!
            </button>
        )
    }
}
