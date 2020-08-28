function genResult(invoice, outstanding) {
  let result = '';
  result += '***********************\n';
  result += '**** Customer Owes ****\n';
  result += '***********************\n';
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  return result;
}

function printOwing (invoice) {
  let outstanding = 0;
  // calculate outstanding
  invoice.borderSpacing.forEach(value => {outstanding += value.amount;})
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  let result = genResult(invoice, outstanding);
  return result;
}


module.exports = {printOwing}