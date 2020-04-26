import uuid from 'uuid';
import database  from '../firebase/firebase';
//Components calls action generator 
//action genrator return function
// component dispatches function(?)
//function runs (has the ability to dispatch other actions and do whatever it wants)

//Add_expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });
  
  export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense = { description, note, amount, createdAt };
  
      database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
    };
  };
//Remove Expense
export const removeExpense=({ id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
    
});

// startRemoveExpense

export const startRemoveExpense=({id} = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

//Edit Expense
export const editExpense= (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
      return database.ref(`expenses/${id}`).update(updates).then(() => {
        dispatch(editExpense({id , updates}))
      });
    };
}; 
//Set_Expenses
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {

  return (dispatch) => {
   //feched the data
    return database.ref('expenses').once('value'). then((snapshot) => {
      const expenses = [];
      //Parse the data
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
        
      });
      //set the data to firebase
      dispatch(setExpenses(expenses));
        
    });
  };
  
};

