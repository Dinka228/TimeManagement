import React from 'react';
import {MDBCard, MDBCardBody, MDBCol} from "mdb-react-ui-kit";

const TaskItem = ({task}) => {
    return (
        <MDBCol md={2} style={{cursor:"pointer"}}>
            <MDBCard className='mt-4 justify-content-center' style={{borderColor:"black",borderWidth:3, borderStyle:"solid", width:450}}>
                <MDBCardBody className='d-flex flex-column'>
                    <div className='d-flex justify-content-md-start' style={{fontSize:20,fontStyle:"italic"}}>
                        {task.name}
                    </div>
                    <div style={{fontSize:16,fontStyle:"italic"}}>
                        {task.type}
                    </div>
                    <div className='d-flex flex-row justify-content-end' style={{fontSize:16,fontStyle:"italic"}} >
                        <div>
                            {`${task.hours}:${task.minute}`}
                        </div>
                    </div>


                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default TaskItem;