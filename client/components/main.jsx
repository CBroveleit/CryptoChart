import  React  from 'react';
const axios = require ('axios');

import { Line } from 'react-chartjs-2';

import {
    //CSS Styles imported here

} from './styles'

class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            values: [],
            keys: [],
            year: 0,
            month: 0,
            date: 0,
            maxDate: 31
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        axios.get(`/api`, {
            params: {
                start: this.state.start
            }
        })
        .then( response => {
            var values = Object.values(response.data.bpi);
            var keys = Object.keys(response.data.bpi);
            this.setState({
                values,
                keys,
            });
        });
    }

    render () {
        //deconstruct here
        var { values, keys } = this.state
        return(
            <div>
                <h1>Hello World</h1>
                <Line 
                data = { {
                    labels: keys,
                    datasets: [
                        {
                        label: "Value (USD)",
                        backgroundColor: ["#3e95cd"],
                        data: values
                        }
                    ]
                    }
                }>
                </Line>
            </div>
        )
    }
}

export default Main;