function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (quantity === undefined) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (serviceCharge === undefined) {
    serviceCharge = 0.1;
  }

  if (tax === undefined) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5
