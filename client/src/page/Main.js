import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {
    MDBBtn,
    MDBCard, MDBCardBody, MDBCardImage,
    MDBCol,
    MDBCollapse,
    MDBContainer, MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler, MDBRow
} from "mdb-react-ui-kit";
import Form from 'react-bootstrap/Form';
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from "../index";
import DayItem from "../component/calendar/DayItem";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {set} from "mobx";
import {forEach} from "react-bootstrap/ElementChildren";
import {findAllByDisplayValue} from "@testing-library/react";
import AddCase from "../component/modals/AddCase";
import DayCase from "../component/modals/DayCase";
import TaskItem from "../component/calendar/TaskItem";
import TodayItem from "../component/calendar/todayItem";
import {fetchOneTask} from "../http/taskAPI";
import {fetchUser} from "../http/userAPI";
import {fetchOneMessage} from "../http/messageAPI";
import MessageItem from "../component/calendar/messageItem";

const Main = observer(() => {
    // console.log(Date.now())
    let today = new Date();
    const [values, onChange] = useState(new Date());
    const [countDay, setCountDay] = useState(0);
    const [dayArray, setDayArray] = useState([]);
    const [getVisible, setGetVisible] = useState(false);
    const [getVisible1, setGetVisible1] = useState(false);
    const {calendar} = useContext(Context)
    const {user} = useContext(Context)

    useEffect(()=>{
        let nowDate = new Date()
        calendar.setCurrentMonth(+today.getMonth()+1)
        calendar.setCurrentMonthsName('April')
        calendar.setCurrentMonth(nowDate.getMonth())
        fetchOneTask(user.currUser.id).then(data=>calendar.setTasks(data))
        fetchUser().then(data=>user.setUser(data))
        fetchOneMessage(user.currUser.id).then(data=> {
                console.log(data)
                calendar.setMessages(data)
            }
        )
    },[])
    useEffect(()=>{
        if(calendar.currentMonthsName === "January" || calendar.currentMonthsName === "March" || calendar.currentMonthsName === "May" ||
            calendar.currentMonthsName === "July" || calendar.currentMonthsName === "August" || calendar.currentMonthsName === "October" ||
            calendar.currentMonthsName ==="December"){
            calendar.setMonthsDays([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},
                {id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19}
                ,{id:20},{id:21},{id:22},{id:23},{id:24},{id:25},{id:26},{id:27},{id:28},{id:29},{id:30},{id:31}])
        }
        else if(calendar.currentMonthsName === "February"){
            calendar.setMonthsDays([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},
                {id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19}
                ,{id:20},{id:21},{id:22},{id:23},{id:24},{id:25},{id:26},{id:27},{id:28}])

        }
        else if(calendar.currentMonthsName === "April" || calendar.currentMonthsName === "June" ||
            calendar.currentMonthsName === "September" || calendar.currentMonthsName === "November"){
            calendar.setMonthsDays([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},
                {id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19}
                ,{id:20},{id:21},{id:22},{id:23},{id:24},{id:25},{id:26},{id:27},{id:28},{id:29},{id:30}])
        }
    },[calendar.currentMonthsName])

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">

                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol md={2} className="d-flex justify-content-center align-items-center">
                        <MDBRow>
                            <MDBCol>
                                <MDBCard className="mb-6">
                                    <MDBCardBody className="text-center">
                                        <MDBCardImage
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px' }}
                                            fluid />
                                        <p className=" mb-1">{user.currUser.email}</p>
                                        <div className='d-flex flex-column'>
                                            <MDBBtn className='mb-2' onClick={()=>{
                                                setGetVisible(true)
                                            }
                                            }>
                                                Add Case
                                            </MDBBtn>
                                            <MDBBtn>
                                                Test
                                            </MDBBtn>
                                        </div>


                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className="mb-6">
                                    <MDBCardBody className="text-center">
                                        <p className=" mb-1">Today</p>
                                        {
                                            calendar.tasks.filter(taskFilter=>{
                                                if(+taskFilter.day === +calendar.selectDay){
                                                    return taskFilter
                                                }
                                            }).map(task=><TodayItem task={task}/>)
                                        }

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className="mb-6">
                                    <MDBCardBody className="text-center">
                                        <p className="mb-1">Message</p>
                                        {
                                            calendar.messages.map(message=><MessageItem message={message}/>)
                                        }
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={8} className="d-flex justify-content-center align-items-center flex-column mx-lg-5">
                        <div className ='d-flex justify-content-center align-items-center flex-row'>
                            <div className="d-flex justify-content-md-start">
                                <Form.Select aria-label="Select month" onChange={(e)=>{
                                    calendar.setCurrentMonthsName(e.target.value)
                                    setCountDay(Number(e.target.id))
                                    if(calendar.currentMonthsName === 'January'){
                                        calendar.setCurrentMonth(1)
                                    }
                                    if(calendar.currentMonthsName === 'February'){
                                        calendar.setCurrentMonth(2)
                                    }
                                    if(calendar.currentMonthsName === 'March'){
                                        calendar.setCurrentMonth(3)
                                    }
                                    if(calendar.currentMonthsName === 'April'){
                                        calendar.setCurrentMonth(4)
                                    }
                                    if(calendar.currentMonthsName === 'May'){
                                        calendar.setCurrentMonth(5)
                                    }
                                    if(calendar.currentMonthsName === 'June'){
                                        calendar.setCurrentMonth(6)
                                    }
                                    if(calendar.currentMonthsName === 'July'){
                                        calendar.setCurrentMonth(7)
                                    }
                                    if(calendar.currentMonthsName === 'August'){
                                        calendar.setCurrentMonth(8)
                                    }
                                    if(calendar.currentMonthsName === 'September'){
                                        calendar.setCurrentMonth(9)
                                    }
                                    if(calendar.currentMonthsName === 'October'){
                                        calendar.setCurrentMonth(10)
                                    }
                                    if(calendar.currentMonthsName === 'November'){
                                        calendar.setCurrentMonth(11)
                                    }
                                    if(calendar.currentMonthsName === 'December'){
                                        calendar.setCurrentMonth(12)
                                    }
                                }
                                }>
                                    <option >{calendar.currentMonthsName ? calendar.currentMonthsName : 'Select month'}</option>
                                    <option value="January" id ='1' onClick={()=>{
                                        calendar.setCurrentMonth('1')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>January</option>
                                    <option value="February"  id='2'onClick={()=>{
                                        calendar.setCurrentMonth('2')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>February</option>
                                    <option value="March"  id='3' onClick={()=>{
                                        calendar.setCurrentMonth('3')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>March</option>
                                    <option value="April"  id='4' onClick={()=>{
                                        calendar.setCurrentMonth('4')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>April</option>
                                    <option value="May" id='5' onClick={()=>{
                                        calendar.setCurrentMonth('5')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>May</option>
                                    <option value="June" id='6' onClick={()=>{
                                        calendar.setCurrentMonth('6')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>June</option>
                                    <option value="July" id='7' onClick={()=>{
                                        calendar.setCurrentMonth('7')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>July</option>
                                    <option value="August" id='8' onClick={()=>{
                                        calendar.setCurrentMonth('8')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>August</option>
                                    <option value="September" id='9' onClick={()=>{
                                        calendar.setCurrentMonth('9')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>September</option>
                                    <option value="October" id='10' onSelect={()=>{
                                        calendar.setCurrentMonth('10')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>October</option>
                                    <option value="November" id='11' onClick={()=>{
                                        calendar.setCurrentMonth('11')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>November</option>
                                    <option value="December" id='12' onClick={()=>{
                                        calendar.setCurrentMonth('12')
                                        console.log(calendar.currentMonth)
                                    }
                                    }>December</option>
                                </Form.Select>
                            </div>
                            {/*<div>*/}
                            {/*    <DatePicker onChange={onChange} value={values} />*/}
                            {/*</div>*/}
                        </div>

                        <MDBRow md={8} className='d-flex'>
                            {
                                calendar.monthsDays.map(monthDay=><DayItem day={monthDay.id}/>)
                            }
                        </MDBRow>

                    </MDBCol>
{/*                    <MDBCol md={2} className="d-flex justify-content-center align-items-center">*/}
{/*3*/}
{/*                    </MDBCol>*/}
                </MDBRow>
                <AddCase show={getVisible} onHide={()=>setGetVisible(false)}>

                </AddCase>
                <DayCase show={calendar.dayVisible} onHide={()=>calendar.setDayVisible(false)}>

                </DayCase>
            </MDBContainer>
        </section>

    );
});

export default Main;