import  React  from 'react';
const axios = require ('axios');


import {
    //CSS Styles imported here

} from './styles'

var monthsAndDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

class UserInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fromYear: 0,
            fromMonth: 0,
            fromDate: 0,
            fromMaxDate: 31,
            toYear: 0,
            toMonth: 0,
            toDate: 0,
            toMaxDate: 31,
        }

    }

    componentDidMount(){

    }

    handleInput(e){
        var field = e.target.id;

        if(field === toMonth){
            this.setState({
                ...this.state,
                [field] : e.target.value,
                toMaxDate: monthsAndDays[e.target.value]
            })
        }

        this.setState({
            ...this.state,
            [field] : e.target.value
        })
    }

    render () {
        //deconstruct here
        return(
            <form>
                <div className = "from-container">
                    <h3>From</h3>
                    <input id = 'fromYear' placeholder = 'Year'></input>
                    <input id = 'fromMonth' placeholder = 'Month'></input>
                    <input id = 'fromDate' placeholder ='Date'></input>
                </div>
                <div className = "to-container">
                    <h3>To</h3>
                    <input id = 'toYear' placeholder = 'Year'></input>
                    <input id = 'toMonth' placeholder = 'Month'></input>
                    <input id = 'toDate' placeholder ='Date'></input>
                </div>
                <button onSubmit = {thefunctiontosend}>Set Graph</button>
            </form>
        )
    }
}

export default UserInput;