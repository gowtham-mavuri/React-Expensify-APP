import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setStartDate,setEndDate,setTextFilter,sortByDateFilter,sortByAmountFilter } from '../actions/filters';

class ExpenseListFilters extends React.Component{
    constructor(props)
    {
         super(props);
         this.state = {
            startDate : this.props.filters.startDate,
            endDate : this.props.filters.endDate,
            focusedInput : null
         };
    }
    render(){
    return (
        <div>
            <input type="text" value={ this.props.filters.text }
                    onChange={(e)=>{
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}/>

            <select value={ this.props.filters.sortBy }
                    onChange = {(e)=>{
                        if(e.target.value === "date")
                            this.props.dispatch(sortByDateFilter());
                        else if(e.target.value === "amount")
                            this.props.dispatch(sortByAmountFilter());
                    }}
            >
                <option value="date" >Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>{
                    this.props.dispatch(setStartDate(startDate));
                    this.props.dispatch(setEndDate(endDate));
                    this.setState({ startDate, endDate })}} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} 
                isOutsideRange={()=>false} 
             />
        </div>
    );
                }
}

const mapStateToProps=(state)=>{
    return {
        filters : state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);