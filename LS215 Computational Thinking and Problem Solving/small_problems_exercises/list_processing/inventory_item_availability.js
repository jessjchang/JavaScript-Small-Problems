function transactionsFor(itemID, transactionList) {
  return transactionList.filter(transactions => transactions.id === itemID);
}

function isItemAvailable(itemID, transactionList) {
  let transactions = transactionsFor(itemID, transactionList);
  
  let totalQuantity = transactions.reduce((total, transaction) => {
    if (transaction.movement === 'in') {
      return total + transaction.quantity; 
    } else {
      return total - transaction.quantity;
    }
  }, 0);
  
  return totalQuantity > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
{ id: 105, movement: 'in',  quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in',  quantity: 12 },
{ id: 103, movement: 'out', quantity: 15 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in',  quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in',  quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true
