


//set Text filer
export const setTextFilter = (text = '') =>({
    type: 'SET_TEXT_FILTER',
    text
});

//set sortBy amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//set startDate
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//set endDate
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
