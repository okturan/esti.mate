import { calculateEstimate, roundTo } from "./calculator.mjs";

const serviceDefinitions = [
  { id: "extraction", label: "Extraction", quantityId: "word-count" },
  { id: "cleanup", label: "Cleanup", quantityId: "word-count" },
  { id: "translation", label: "Translation", quantityId: "word-count" },
  { id: "editing", label: "Editing", quantityId: "word-count" },
  { id: "proofreading", label: "Proofreading", quantityId: "word-count" },
  { id: "transcription", label: "Transcription", quantityId: "recording-length" },
  { id: "content-creation", label: "Content creation", quantityId: "word-count" },
  { id: "design", label: "Design", quantityId: "design-length" },
  { id: "development", label: "Development", quantityId: "development-length" },
  { id: "voiceover", label: "Voiceover", quantityId: "word-count" },
  { id: "meeting", label: "Meeting", quantityId: "meeting-length" },
];

const calculations = document.getElementById("calculations");
const totals = document.getElementById("totals");
const profitMargin = document.getElementById("profit-margin");
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

function element(id) {
  const value = document.getElementById(id);
  if (!value) throw new Error(`Missing required calculator element: ${id}`);
  return value;
}

function selectedServices() {
  return serviceDefinitions.flatMap((definition) => {
    const checkbox = element(definition.id);
    const rate = element(`${definition.id}-rate`);
    const box = document.querySelector(`.${definition.id}-box`);
    if (!box) throw new Error(`Missing required rate box: ${definition.id}`);

    box.hidden = !checkbox.checked;
    if (!checkbox.checked) return [];

    return [{
      name: definition.label,
      rate: rate.value,
      quantity: element(definition.quantityId).value,
    }];
  });
}

function detailFor(item, marginPercent) {
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const rateWithMargin = roundTo(item.rate * (1 + marginPercent / 100), 4);
  summary.textContent = `${item.name}: ${currency.format(rateWithMargin)} × ${item.quantity} = ${currency.format(item.cost * (1 + marginPercent / 100))}`;

  const list = document.createElement("ul");
  const cost = document.createElement("li");
  cost.textContent = `Cost: ${currency.format(item.rate)} × ${item.quantity} = ${currency.format(item.cost)}`;
  const profit = document.createElement("li");
  profit.textContent = `Profit: ${currency.format(item.cost * marginPercent / 100)}`;
  list.append(cost, profit);
  details.append(summary, list);
  return details;
}

function totalLine(label, value, className) {
  const line = document.createElement("p");
  line.className = className;
  line.textContent = `${label}: ${currency.format(value)}`;
  return line;
}

function updateTotals() {
  const result = calculateEstimate({
    services: selectedServices(),
    profitMarginPercent: profitMargin.value,
  });

  calculations.replaceChildren(
    ...result.lineItems.map((item) => detailFor(item, result.profitMarginPercent)),
  );
  totals.replaceChildren(
    totalLine("Cost", result.cost, "total-cost"),
    totalLine("Profit", result.profit, "total-profit"),
    totalLine("Estimate", result.estimate, "total-estimate"),
  );
}

document.addEventListener("input", updateTotals);
document.addEventListener("change", updateTotals);
updateTotals();
