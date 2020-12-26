import moment from 'moment';

const getFilteredData = (expenses,{ text , sortBy , startDate , endDate }) => {
    return expenses.filter((expense)=>{
        const createdat=moment(expense.createdAt);
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdat,'day'): true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdat,'day'): true;


        return textMatch && startDateMatch && endDateMatch ;
    }).sort((a,b)=>{
        if(sortBy==='date')
            return a.createdAt < b.createdAt ? 1 : -1;
        else if(sortBy==='amount')
            return a.amount < b.amount ? 1 : -1;
    });
};

export default getFilteredData;