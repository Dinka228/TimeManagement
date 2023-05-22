import React from 'react';
import {MDBCard, MDBCardBody, MDBCol} from "mdb-react-ui-kit";

const MessageItem = ({message}) => {
    return (
        <MDBCol style={{cursor:"pointer"}}>
            <MDBCard className='mt-4 justify-content-around' style={{borderColor:"black",borderWidth:1, borderStyle:"solid", width:200, height:50}}>
                <MDBCardBody className='d-flex flex-row'>
                    <div className='d-flex  ' style={{fontSize:10}}>
                        {message.text}
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default MessageItem;