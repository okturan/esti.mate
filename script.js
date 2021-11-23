const wordCount = document.getElementById("word-count");
const recordingLength = document.getElementById("recording-length");
const designLength = document.getElementById("design-length");
const developmentLength = document.getElementById("development-length");
const meetingLength = document.getElementById("meeting-length");

const extraction = document.getElementById("extraction");
const extractionRate = document.getElementById("extraction-rate");
const extractionBox = document.querySelector(".extraction-box");

const cleanup = document.getElementById("cleanup");
const cleanupRate = document.getElementById("cleanup-rate");
const cleanupBox = document.querySelector(".cleanup-box");

const translation = document.getElementById("translation");
const translationRate = document.getElementById("translation-rate");
const translationBox = document.querySelector(".translation-box");

const editing = document.getElementById("editing");
const editingRate = document.getElementById("editing-rate");
const editingBox = document.querySelector(".editing-box");

const proofreading = document.getElementById("proofreading");
const proofreadingRate = document.getElementById("proofreading-rate");
const proofreadingBox = document.querySelector(".proofreading-box");

const transcription = document.getElementById("transcription");
const transcriptionRate = document.getElementById("transcription-rate");
const transcriptionBox = document.querySelector(".transcription-box");

const contentCreation = document.getElementById("content-creation");
const contentCreationRate = document.getElementById("content-creation-rate");
const contentCreationBox = document.querySelector(".content-creation-box");

const design = document.getElementById("design");
const designRate = document.getElementById("design-rate");
const designBox = document.querySelector(".design-box");

const development = document.getElementById("development");
const developmentRate = document.getElementById("development-rate");
const developmentBox = document.querySelector(".development-box");

const voiceover = document.getElementById("voiceover");
const voiceoverRate = document.getElementById("voiceover-rate");
const voiceoverBox = document.querySelector(".voiceover-box");

const meeting = document.getElementById("meeting");
const meetingRate = document.getElementById("meeting-rate");
const meetingBox = document.querySelector(".meeting-box");

const profitMargin = document.getElementById("profit-margin");

const totals = document.getElementById("totals")

document.addEventListener("change", updateTotals)

// Rounding algorithm taken from stackoverflow 
function roundToX(num, X) {
  return +(Math.round(num + "e+"+X)  + "e-"+X);
}

function updateTotals(e) {
  totals.innerHTML = ""
  let sum = 0
  if (extraction.checked) {
    extractionBox.style.display = "block"
    let extractionFee = extractionRate.value * wordCount.value
    extractionFee = roundToX(extractionFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Extraction: ${extractionFee} USD</li>`)
    sum += extractionFee
  } else {
    extractionBox.style.display = "none"
  }
  if (cleanup.checked) {
    cleanupBox.style.display = "block"
    let cleanupFee = cleanupRate.value * wordCount.value
    cleanupFee = roundToX(cleanupFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Cleanup: ${cleanupFee} USD</li>`)
    sum += cleanupFee
  } else {
    cleanupBox.style.display = "none"
  }
  if (translation.checked) {
    translationBox.style.display = "block"
    let translationFee = translationRate.value * wordCount.value
    translationFee = roundToX(translationFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Translation: ${translationFee} USD</li>`)
    sum += translationFee
  } else {
    translationBox.style.display = "none"
  }
  if (editing.checked) {
    editingBox.style.display = "block"
    let editingFee = editingRate.value * wordCount.value
    editingFee = roundToX(editingFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Editing: ${editingFee} USD</li>`)
    sum += editingFee
  } else {
    editingBox.style.display = "none"
  }
  if (proofreading.checked) {
    proofreadingBox.style.display = "block"
    let proofreadingFee = proofreadingRate.value * wordCount.value
    proofreadingFee = roundToX(proofreadingFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Proofreading: ${proofreadingFee} USD</li>`)
    sum += proofreadingFee
  } else {
    proofreadingBox.style.display = "none"
  }
  if (transcription.checked) {
    transcriptionBox.style.display = "block"
    let transcriptionFee = transcriptionRate.value * recordingLength.value
    transcriptionFee = roundToX(transcriptionFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Transcription: ${transcriptionFee} USD</li>`)
    sum += transcriptionFee
  } else {
    transcriptionBox.style.display = "none"
  }
  if (contentCreation.checked) {
    contentCreationBox.style.display = "block"
    let contentCreationFee = contentCreationRate.value * wordCount.value
    contentCreationFee = roundToX(contentCreationFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Content Creation: ${contentCreationFee} USD</li>`)
    sum += contentCreationFee
  } else {
    contentCreationBox.style.display = "none"
  }
  if (design.checked) {
    designBox.style.display = "block"
    let designFee = designRate.value * designLength.value
    designFee = roundToX(designFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Design: ${designFee} USD</li>`)
    sum += designFee
  } else {
    designBox.style.display = "none"
  }
  if (development.checked) {
    developmentBox.style.display = "block"
    let developmentFee = developmentRate.value * developmentLength.value
    developmentFee = roundToX(developmentFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Development: ${developmentFee} USD</li>`)
    sum += developmentFee
  } else {
    developmentBox.style.display = "none"
  }
  if (voiceover.checked) {
    voiceoverBox.style.display = "block"
    let voiceoverFee = voiceoverRate.value * wordCount.value
    voiceoverFee = roundToX(voiceoverFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Voiceover: ${voiceoverFee} USD</li>`)
    sum += voiceoverFee
  } else {
    voiceoverBox.style.display = "none"
  }
  if (meeting.checked) {
    meetingBox.style.display = "block"
    let meetingFee = meetingRate.value * meetingLength.value
    meetingFee = roundToX(meetingFee, 2)
    totals.insertAdjacentHTML("beforeend", `<li>Meeting: ${meetingFee} USD</li>`)
    sum += meetingFee
  } else {
    meetingBox.style.display = "none"
  }
  let estimate = sum + sum * profitMargin.value / 100
  let profit = sum * profitMargin.value / 100
  totals.insertAdjacentHTML("beforeend", `<p><strong>Cost: ${sum} USD</strong></p>`)
  totals.insertAdjacentHTML("beforeend", `<p><strong>Estimate: ${roundToX(estimate, 2)} USD</strong></p>`)
  totals.insertAdjacentHTML("beforeend", `<p><em>Profit: ${roundToX(profit, 2)} USD</em></p>`)
}


updateTotals();