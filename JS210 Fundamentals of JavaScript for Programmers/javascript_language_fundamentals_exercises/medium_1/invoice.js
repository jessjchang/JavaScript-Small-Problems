function invoiceTotal(...amounts) {
  return amounts.reduce((sum, amount) => sum + amount, 0);
}

invoiceTotal(20, 30, 40, 50);          // 140
invoiceTotal(20, 30, 40, 50, 40, 40);  // 220
