import React, {useContext, useState} from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import image from './20943613.jpg'
import {useHistory} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const [reg,setReg] = useState(false)
    const [User, setUser] = useState({email:"",password:""})
    const [regUser, setRegUser] = useState({email:"",password:""})
    const [logins,setLogins] = useState(true)
    const history = useHistory()
    const {user} = useContext(Context)
    const signIn = (e) =>{
        try {
            const Users={
            ...User

        }
        const log = async ()=>{


                const response = await login(Users.email,Users.password)
                user.setCurrentUser(response)
                user.setIsAuth(true)
                history.push(MAIN_ROUTE)


        }
        log()
        }catch(e){
            console.log(e)
        }
    }
    const signUp = (e) =>{
        const Users={
            ...User

        }
        const log = async ()=>{
            const response = await registration(Users.email,Users.password)
            user.setCurrentUser(response)
            user.setIsAuth(true)
            history.push(MAIN_ROUTE)
        }
        log()
    }
    return (
        <MDBContainer fluid>

            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-4 order-lg-3 d-flex flex-column align-items-center'>

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{reg ? 'Sign up' :"Sign in"}</p>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg'/>
                                <MDBInput label='Your Email' id='form2' type='email'
                                          value={User.email}
                                          onChange={e => setUser({...User, email: e.target.value})}
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg'/>
                                <MDBInput label='Password' id='form3' type='password'
                                          value={User.password}
                                          onChange={e => setUser({...User, password: e.target.value})}
                                />
                            </div>
                            <div className='d-flex flex-row'>
                                Dont have account? <p className='px-lg-1' style={{color:"blue",cursor:"pointer"}} onClick={()=>{
                                setReg(true)
                                setLogins(false)
                                }
                            }>Create</p>
                            </div>
                            <div>
                                {
                                    reg ? <MDBBtn className='mb-4 m-lg-3' color={"dark"} size={"lg"}
                                                  onClick={()=>{
                                                      signUp()
                                                  }}
                                    >Sign up</MDBBtn>
                                        :
                                        <MDBBtn className='mb-4 m-lg-3' color={"dark"} size={"lg"}
                                                    onClick={()=>{
                                                        signIn()
                                            }}
                                        >Sign in</MDBBtn>
                                }


                            </div>


                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src={image} fluid/>
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
};

export default Auth;