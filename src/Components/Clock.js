import React from "react";
import './Clock.css';
import * as dc from '../Constants/DayConstraints';
import flowerCrown from '../Assets/flower-crown.svg';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: new Date().getDay(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            date : new Date().getDate(),
            month : new Date().getMonth() + 1,
            year : new Date().getFullYear(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            60000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        this.setState({
            day: new Date().getDay(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
        });
    }

    render() {
        let hourString = this.state.hour < 10 ? '0' + this.state.hour : this.state.hour;
        let minString = this.state.minute < 10 ? '0' + this.state.minute : this.state.minute;
        let dayString = dc.DAY_CONSTRAINTS[this.state.day];
        let month = dc.MONTH_CONSTRAINTS[this.state.month];
        let dateString = this.state.date + " " + month + " " + this.state.year;
        return (
            <div className="DateContainer">
                <img src={flowerCrown} className="flowerCrown" alt="flowerCrown" />
                <p className="Time">{hourString} : {minString}</p>
                <p className="Day">{dateString}<span>{dayString}</span></p>
            </div>
        );
    }
}

export default Clock;