import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid, Form, Container } from 'semantic-ui-react';

class MessageTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    handleMessageChange = (e, { message, value }) => this.setState({ [message]: value })

    handleMessageSubmit = () => this.setState({ message: '' })

    render() {

        const { message } = this.state

        return (
            <Container style={{ height: '90%' }} >
                <Segment style={{ height: '80%' }}>
                    {/* all chat messages should appear in here */}
                </Segment>

                <Form
                    style={{ height: '20%' }}
                    onSubmit={this.handleMessageSubmit}
                    widths={false}
                >
                    <Form.Group >
                        <Form.Input
                            placeholder='Message'
                            message='message'
                            value={message}
                            onChange={this.handleMessageChange}
                        />

                        <Form.Button content='Submit'/>
                    </Form.Group>
                </Form >
            </Container >
        )
    }
};

// const mapState = (state) => {
//     return {
//     };
// };

// const mapDispatch = (dispatch) => {
//     return {
//     };
// };

// export default connect(mapState, mapDispatch)(MessageTab);
export default (MessageTab);
