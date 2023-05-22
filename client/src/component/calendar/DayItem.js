import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {MDBCard, MDBCol} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {set} from "mobx";

const DayItem = observer(({day}) => {
    const {calendar} = useContext(Context)
    const [color,setColor] = useState('green')
    let nowDate = new Date()
    useEffect(()=>{
        console.log(calendar.currentMonth)
        console.log(nowDate.getMonth())
        if(+calendar.currentMonth < +nowDate.getMonth()){
            setColor('grey')
        }
        else if(+calendar.currentMonth > +nowDate.getMonth()){
            setColor('green')
        }
        else if(+calendar.currentMonth === +nowDate.getMonth()){
            if(+day < +nowDate.getDate()){
                setColor('grey')
            }
            else if((+day > +nowDate.getDate())){
                setColor('green')
            }
            else{
                setColor('red')
            }

        }
    },[calendar.currentMonthsName])

    return (
        <MDBCol md={2} onClick={()=>{
            calendar.setSelectDay(day)
            calendar.setDayVisible(true)

        }
        } style={{cursor:"pointer"}}>
            <MDBCard style={{fontSize:24, color:"black", backgroundColor:`${color}`, width:100,height:100}} border={"black"} className='mt-4 justify-content-center align-items-center'>
                {day}
            </MDBCard>
        </MDBCol>
    );
});

export default DayItem;