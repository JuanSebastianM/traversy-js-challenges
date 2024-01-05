function calculateTotalSalesWithTax(products, taxRate) {
  const totalPrice = products.reduce((totalSum, currentProduct) => {
    const currentProductSum = currentProduct.price * currentProduct.quantity;
    
    return totalSum + currentProductSum;
  }, 0)
  
  const totalTax = (totalPrice * taxRate) / 100;
  
  return totalPrice + totalTax;
}

module.exports = calculateTotalSalesWithTax;
