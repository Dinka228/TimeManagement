import {makeAutoObservable} from "mobx";

export default class CalendarStore {
    constructor() {
        this._currentMonth = null
        this._currentMonthsName = null
        this._dayVisible = false
        this._monthDays = []
        this._tasks = []
        this._messages = []
        this._currDay = 0
        this._selectDay = null

        makeAutoObservable(this)
    }
    setCurrDay(currDay){
        this._currDay = currDay
    }
    setMessages(message){
        this._messages = message
    }
    get messages(){
        return this._messages
    }
    setCurrentMonth(currentMonth){
        this._currentMonth = currentMonth
    }
    setTasks(task){
        this._tasks = task
    }

    setSelectDay(selectDay){
        this._selectDay = selectDay
    }
    setDayVisible(dayVisible){
        this._dayVisible = dayVisible
    }
    setMonthsDays(monthsDays){
        this._monthDays = monthsDays
    }
    setCurrentMonthsName(currentMonthsName){
        this._currentMonthsName = currentMonthsName
    }
    get tasks(){
        return this._tasks
    }
    get selectDay(){
        return this._selectDay
    }
    get currentMonthsName(){
        return this._currentMonthsName
    }
    get dayVisible(){
        return this._dayVisible
    }
    get monthsDays(){
        return this._monthDays
    }
    get currentMonth(){
        return this._currentMonth
    }
    get currDay(){
        return this._currDay
    }
}