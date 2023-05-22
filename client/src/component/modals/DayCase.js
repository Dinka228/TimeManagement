import React, {useContext} from 'react';
import {
    MDBBtn, MDBCard, MDBCardBody,
    MDBCheckbox,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Dropdown, Form} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {Context} from "../../index";
import TaskItem from "../calendar/TaskItem";

const DayCase = ({show,onHide}) => {
    const {calendar} = useContext(Context)
    return (
        <>
            <MDBModal
                staticBackdrop
                tabIndex="-1"
                show={show}
                onHide={onHide}
            >
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader className='d-flex justify-content-center align-items-center'>
                            <MDBModalTitle className='d-flex justify-content-center align-items-center'>{calendar.selectDay + " " + calendar.currentMonthsName}</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {
                                calendar.tasks.filter(taskFilter=>{
                                    if(+taskFilter.day === +calendar.selectDay){
                                        return taskFilter
                                    }
                                }).map(task=><TaskItem task={task}/>)
                            }

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default DayCase;