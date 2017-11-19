import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

const MessageTab = (props) => {

    return (
        <Segment style={{ height: '90%', color: 'black' }}>
            <h1>This is MessageTab</h1>
            {/* this segment usable for players and log */}
        </Segment>
    );
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
