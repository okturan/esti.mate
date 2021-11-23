const wordCount = document.getElementById("word-count");
const recordingLength = document.getElementById("recording-length");
const meetingLength = document.getElementById("meeting-length");

const editing = document.getElementById("editing");
const editingRate = document.getElementById("editing-rate");

const extraction = document.getElementById("extraction");
const extractionRate = document.getElementById("extraction-rate");

const transcription = document.getElementById("transcription");
const transcriptionRate = document.getElementById("transcription-rate");

const cleanup = document.getElementById("cleanup");
const cleanupRate = document.getElementById("cleanup-rate");

const voiceover = document.getElementById("voiceover");
const voiceoverRate = document.getElementById("voiceover-rate");

const contentCreation = document.getElementById("content-creation");
const contentCreationRate = document.getElementById("content-creation-rate");

const meeting = document.getElementById("meeting");
const meetingRate = document.getElementById("meeting-rate");

const proofreading = document.getElementById("proofreading");
const proofreadingRate = document.getElementById("proofreading-rate");

const translation = document.getElementById("translation");
const translationRate = document.getElementById("translation-rate");

const profitMargin = document.getElementById("profit-margin");

const totals = document.getElementById("totals")

document.addEventListener("change", updateTotals)

// Rounding algorithm taken from stackoverflow 
function roundToX(num, X) {
  return +(Math.round(num + "e+"+X)  + "e-"+X);
}

function updateTotals() {
  totals.innerHTML = ""
  let sum = 0
  if (editing.checked) {
    let editingFee = editingRate.value * wordCount.value
    editingFee = roundToX(editingFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Editing: ${editingFee} USD</li>`)
    sum += editingFee
  }
  if (extraction.checked) {
    let extractionFee = extractionRate.value * wordCount.value
    extractionFee = roundToX(extractionFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Extraction: ${extractionFee} USD</li>`)
    sum += extractionFee
  }
  if (transcription.checked) {
    let transcriptionFee = transcriptionRate.value * recordingLength.value
    transcriptionFee = roundToX(transcriptionFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Transcription: ${transcriptionFee} USD</li>`)
    sum += transcriptionFee
  }
  if (translation.checked) {
    let translationFee = translationRate.value * wordCount.value
    translationFee = roundToX(translationFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Translation: ${translationFee} USD</li>`)
    sum += translationFee
  }
  if (cleanup.checked) {
    let cleanupFee = cleanupRate.value * wordCount.value
    cleanupFee = roundToX(cleanupFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Cleanup: ${cleanupFee} USD</li>`)
    sum += cleanupFee
  }
  if (proofreading.checked) {
    let proofreadingFee = proofreadingRate.value * wordCount.value
    proofreadingFee = roundToX(proofreadingFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Proofreading: ${proofreadingFee} USD</li>`)
    sum += proofreadingFee
  }
  if (voiceover.checked) {
    let voiceoverFee = voiceoverRate.value * wordCount.value
    voiceoverFee = roundToX(voiceoverFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Voiceover: ${voiceoverFee} USD</li>`)
    sum += voiceoverFee
  }
  if (meeting.checked) {
    let meetingFee = meetingRate.value * meetingLength.value
    meetingFee = roundToX(meetingFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Meeting: ${meetingFee} USD</li>`)
    sum += meetingFee
  }
  if (contentCreation.checked) {
    let contentCreationFee = contentCreationRate.value * wordCount.value
    contentCreationFee = roundToX(contentCreationFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Content Creation: ${contentCreationFee} USD</li>`)
    sum += contentCreationFee
  }
  let estimate = sum + sum * profitMargin.value / 100
  let profit = sum * profitMargin.value / 100
  totals.insertAdjacentHTML("beforeend", `<p><strong>Cost: ${sum} USD</strong></p>`)
  totals.insertAdjacentHTML("beforeend", `<p><strong>Estimate: ${roundToX(estimate, 2)} USD</strong></p>`)
  totals.insertAdjacentHTML("beforeend", `<p><em>Profit: ${roundToX(profit, 2)} USD</em></p>`)
}


updateTotals();