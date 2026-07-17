export function toNonNegativeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

export function roundTo(value, precision = 2) {
  const factor = 10 ** precision;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
}

export function calculateLineItem({ name, rate, quantity }) {
  const normalizedRate = toNonNegativeNumber(rate);
  const normalizedQuantity = toNonNegativeNumber(quantity);
  const cost = roundTo(normalizedRate * normalizedQuantity);

  return {
    name,
    rate: normalizedRate,
    quantity: normalizedQuantity,
    cost,
  };
}

export function calculateEstimate({ services = [], profitMarginPercent = 0 }) {
  const lineItems = services.map(calculateLineItem);
  const cost = roundTo(lineItems.reduce((sum, item) => sum + item.cost, 0));
  const profitMargin = toNonNegativeNumber(profitMarginPercent) / 100;
  const profit = roundTo(cost * profitMargin);

  return {
    lineItems,
    cost,
    profit,
    estimate: roundTo(cost + profit),
    profitMarginPercent: roundTo(profitMargin * 100),
  };
}
