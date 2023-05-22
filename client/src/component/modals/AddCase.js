import React, {useContext, useState} from 'react';
import {
    MDBBtn, MDBCheckbox, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Dropdown, Form} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {set} from "mobx";
import {Context} from "../../index";
import {createTask, fetchOneTask, fetchTask} from "../../http/taskAPI";
import DatePicker from "react-date-picker";
import {observer} from "mobx-react-lite";
import {createMessage, fetchMessage, fetchOneMessage} from "../../http/messageAPI";
const AddCase = observer(({show,onHide}) => {
    const [hour,setHour] = useState('')
    const [values, onChange] = useState(new Date());
    const [minute,setMinute] = useState('')
    const [userName,setUserName] = useState('')
    const [userId,setUserId] = useState(null)
    const [type,setType] = useState('')
    const [newCase, setNewCase] = useState({name:''})
    const [newMessage, setNewMessage] = useState({text:''})
    const {user} = useContext(Context)
    const {calendar} = useContext(Context)
    function addNewCase()   {
        let day = values.getDate()
        let months = values.getMonth()
        const newUCase={
            ...newCase,id:Date.now(),userId:user.currUser.id, type:type,hours:hour,minute:minute,day:day,months:months

        }
        const newUMessage={
            id:Date.now(),creatorsUserId:user.currUser.id,getUserId:userId,text:`Вам запропонували спільну справу! С користувачем ${userName}`

        }
        const task = async ()=>{
            const response = await createTask(newUCase)
            console.log(response)
            fetchOneTask(user.currUser.id).then(data=>calendar.setTasks(data))
        }
        if(type === 'Coop'){
            const message = async ()=>{
                const response = await createMessage(newUMessage)
                console.log(response)
                fetchOneMessage(userId,user.currUser.id).then(data=>calendar.setMessages(data))
            }
            message()
        }

        task()
        setNewCase({name:''})
        onHide()

    }
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
                        <MDBModalHeader>
                            <MDBModalTitle>Creating case...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form>
                                <Form.Control
                                    value={newCase.name}
                                    onChange={e=>setNewCase({...newCase, name: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Enter case name"}
                                />
                                <div>
                                    <DatePicker onChange={onChange} value={values} />
                                </div>
                                <div className='d-flex'>
                                    <Dropdown className='mt-3 mx-lg-1'>
                                        <Dropdown.Toggle > {hour !== '' ? hour : "00"}</Dropdown.Toggle>
                                        <Dropdown.Menu style={{maxHeight:500,height:500,maxWidth:30,width:30, overflow:"auto"}}>
                                            <DropdownItem onClick={()=>{
                                                setHour('00')
                                            }}>
                                                00
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('01')
                                            }}>
                                                01
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('02')
                                            }}>
                                                02
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('03')
                                            }}>
                                                03
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('04')
                                            }}>
                                                04
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('05')
                                            }}>
                                                05
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('06')
                                            }}>
                                                06
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('07')
                                            }}>
                                                07
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('08')
                                            }}>
                                                08
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('09')
                                            }}>
                                                09
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('10')
                                            }}>
                                                10
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('11')
                                            }}>
                                                11
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('12')
                                            }}>
                                                12
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('13')
                                            }}>
                                                13
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('14')
                                            }}>
                                                14
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('15')
                                            }}>
                                                15
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('16')
                                            }}>
                                                16
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('17')
                                            }}>
                                                17
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('18')
                                            }}>
                                                18
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('19')
                                            }}>
                                                19
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('20')
                                            }}>
                                                20
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('21')
                                            }}>
                                                21
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('22')
                                            }}>
                                                22
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setHour('23')
                                            }}>
                                                23
                                            </DropdownItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className='mt-3'>
                                        <Dropdown.Toggle > {minute !== '' ? minute : "00"}</Dropdown.Toggle>
                                        <Dropdown.Menu style={{maxHeight:500,height:500,maxWidth:30,width:30, overflow:"auto"}}>
                                            <DropdownItem onClick={()=>{
                                                setMinute('00')
                                            }}>
                                                00
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setMinute('10')
                                            }}>
                                                10
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setMinute('20')
                                            }}>
                                                20
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setMinute('30')
                                            }}>
                                                30
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setMinute('40')
                                            }}>
                                                40
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{
                                                setMinute('50')
                                            }}>
                                                50
                                            </DropdownItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='mt-2'>
                                    <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='Private' label='Private' inline onChange={(e)=>{
                                        let check2 = document.getElementById('inlineCheckbox2')
                                        check2.checked = false
                                        let check3 = document.getElementById('inlineCheckbox3')
                                        check3.checked = false
                                        setType(e.target.value)
                                    }
                                    }/>
                                    <MDBCheckbox name='inlineCheck' id='inlineCheckbox2' value='Business' label='Business' inline onChange={(e)=>{
                                        let check1 = document.getElementById('inlineCheckbox1')
                                        check1.checked = false
                                        let check3 = document.getElementById('inlineCheckbox3')
                                        check3.checked = false
                                        setType(e.target.value)
                                        setType(e.target.value)
                                    }
                                    }/>
                                    <MDBCheckbox name='inlineCheck' id='inlineCheckbox3' value='Coop' label='Coop' inline onChange={(e)=>{
                                        let check1 = document.getElementById('inlineCheckbox1')
                                        check1.checked = false
                                        let check2 = document.getElementById('inlineCheckbox2')
                                        check2.checked = false
                                        setType(e.target.value)
                                        setType(e.target.value)
                                    }
                                    }/>
                                </div>
                                <div>
                                    {
                                        type === 'Coop' ? <Dropdown>
                                            <Dropdown.Toggle > {userName !== '' ? userName : "Select user"}</Dropdown.Toggle>
                                            <Dropdown.Menu style={{maxHeight:500,maxWidth:30,width:30, overflow:"auto"}}>
                                                {
                                                    user.user.map(user=><DropdownItem
                                                        onClick={()=>{
                                                        setUserId(user.id)
                                                        setUserName(user.email)}}
                                                    >
                                                        {user.email}
                                                    </DropdownItem>)
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown> :<div></div>
                                    }

                                </div>

                            </Form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={()=>{
                                addNewCase()
                            }
                            }>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default AddCase;