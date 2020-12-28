import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount : props.expense ? props.expense.amount.toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error : ''
        }
    }
    
    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>{
            return {
                description
            };
        });
    };
    onAmountChange=(e)=>{
        const amount = e.target.value;
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            this.setState(()=>{
                return {
                    amount
                };
            });
        }
    };
    onNoteChange=(e)=>{
        const note = e.target.value;
        this.setState(()=>{
            return {
                note
            };
        });
    };
    onSubmit=(e)=>{
        e.preventDefault();

        //check for desc and amount 
        if( !this.state.description && !this.state.amount )
        {
            this.setState(()=>({ error : 'Enter valid Description And Amount' }));
        }
        else
        {
            this.setState(()=>({ error : '' }));
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount,100),
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            });
        }
    }
   
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                 { this.state.error && <p className="form__error" >{this.state.error}</p> }
                <input className="text-input" type="text" placeholder="Description" autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                />
                <input className="text-input" type="text" placeholder="Amount"
                        value={ this.state.amount }
                        onChange={this.onAmountChange} />
                
                <SingleDatePicker 
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={createdAt => this.setState({ createdAt })} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ calendarFocused:focused })} // PropTypes.func.isRequired
                        id="id"
                        numberOfMonths={1}
                        isOutsideRange={()=>false} 
                />
                <textarea className="textarea" placeholder="Add a note (Optional)"
                        value={this.note}
                        onChange={this.onNoteChange}
                />
                <div>
                    <button className="button">Save Expense</button>
                </div>
                
            </form>
        );
    }
}

export default ExpenseForm;