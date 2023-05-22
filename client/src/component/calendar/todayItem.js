import React from 'react';
import {MDBCard, MDBCardBody, MDBCol} from "mdb-react-ui-kit";

const TodayItem = ({task}) => {
    return (
        <MDBCol style={{cursor:"pointer"}}>
            <MDBCard className='mt-1 justify-content-center' style={{borderColor:"black",borderWidth:3, borderStyle:"solid", width:200, height:30}}>
                <MDBCardBody className='d-flex flex-row justify-content-between'>
                    <div className='d-flex  ' style={{fontSize:14,fontStyle:"italic"}}>
                        {task.name}
                    </div>
                    <div className='d-flex ' style={{fontSize:14,fontStyle:"italic"}} >
                        <div>
                            {`${task.hours}:${task.minute}`}
                        </div>
                    </div>


                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default TodayItem;