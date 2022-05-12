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

const profitMarginBox = document.getElementById("profit-margin");

const totals = document.getElementById("totals")
const calculations = document.getElementById("calculations")

document.addEventListener("change", updateTotals)


// Rounding algorithm taken from stackoverflow 
function roundToX(num, X) {
  return +(Math.round(num + "e+"+X)  + "e-"+X);
}

function updateTotals(e) {
  profitMargin = profitMarginBox.value / 100
  calculations.innerHTML = ""
  totals.innerHTML = ""
  let sum = 0
  if (extraction.checked) {
    extractionBox.style.display = "block"
    let extractionFee = extractionRate.value * wordCount.value
    extractionFee = roundToX(extractionFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Extraction: ﹩${roundToX(((extractionRate.value*profitMargin)+parseFloat(extractionRate.value)), 4)} ✕  ${wordCount.value} = ﹩${roundToX((extractionFee+extractionFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${extractionRate.value} ✕ ${wordCount.value} = ﹩${extractionFee}</li> 
                                            <li>Profit: ﹩${roundToX((extractionRate.value*profitMargin), 4)} ✕ ${wordCount.value} = ﹩${roundToX((profitMargin*extractionFee), 2)}</li>
                                            </ul>`)
    sum += extractionFee
  } else {
    extractionBox.style.display = "none"
  }
  if (cleanup.checked) {
    cleanupBox.style.display = "block"
    let cleanupFee = cleanupRate.value * wordCount.value
    cleanupFee = roundToX(cleanupFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Cleanup: ﹩${roundToX(((cleanupRate.value*profitMargin)+parseFloat(cleanupRate.value)), 4)} ✕  ${wordCount.value} = ﹩${roundToX((cleanupFee+cleanupFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${cleanupRate.value} ✕ ${wordCount.value} = ﹩${cleanupFee}</li> 
                                            <li>Profit: ﹩${roundToX((cleanupRate.value*profitMargin), 5)}﹩ ✕ ${wordCount.value} = ﹩${roundToX((profitMargin*cleanupFee), 2)}</li>
                                            </ul>`)
    sum += cleanupFee
  } else {
    cleanupBox.style.display = "none"
  }
  if (translation.checked) {
    translationBox.style.display = "block"
    let translationFee = translationRate.value * wordCount.value
    translationFee = roundToX(translationFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Translation: ﹩${roundToX(((translationRate.value*profitMargin)+parseFloat(translationRate.value)), 4)} ✕  ${wordCount.value} = ﹩${roundToX((translationFee+translationFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${translationRate.value} ✕ ${wordCount.value} = ﹩${translationFee}</li> 
                                            <li>Profit: ﹩${roundToX((translationRate.value*profitMargin), 5)} ✕ ${wordCount.value} = ﹩${roundToX((profitMargin*translationFee), 2)}</li>
                                            </ul>`)
    sum += translationFee
  } else {
    translationBox.style.display = "none"
  }
  if (editing.checked) {
    editingBox.style.display = "block"
    let editingFee = editingRate.value * wordCount.value
    editingFee = roundToX(editingFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Editing: ﹩${roundToX(((editingRate.value*profitMargin)+parseFloat(editingRate.value)), 4)} ✕  ${wordCount.value} = ﹩${roundToX((editingFee+editingFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${editingRate.value} ✕ ${wordCount.value} = ﹩${editingFee}</li> 
                                            <li>Profit: ﹩${roundToX((editingRate.value*profitMargin), 5)} ✕ ${wordCount.value} = ﹩${roundToX((profitMargin*editingFee), 2)}</li>
                                            </ul>`)
    sum += editingFee
  } else {
    editingBox.style.display = "none"
  }
  if (proofreading.checked) {
    proofreadingBox.style.display = "block"
    let proofreadingFee = proofreadingRate.value * wordCount.value
    proofreadingFee = roundToX(proofreadingFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Proofreading: ﹩${roundToX(((proofreadingRate.value*profitMargin)+parseFloat(proofreadingRate.value)), 4)} ✕  ${wordCount.value} = ﹩${roundToX((proofreadingFee+proofreadingFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${proofreadingRate.value} ✕ ${wordCount.value} = ﹩${proofreadingFee}</li> 
                                            <li>Profit: ﹩${roundToX((proofreadingRate.value*profitMargin), 5)} ✕ ${wordCount.value} = ﹩${roundToX((profitMargin*proofreadingFee), 2)}</li>
                                            </ul>`)
    sum += proofreadingFee
  } else {
    proofreadingBox.style.display = "none"
  }
  if (transcription.checked) {
    transcriptionBox.style.display = "block"
    let transcriptionFee = transcriptionRate.value * recordingLength.value
    transcriptionFee = roundToX(transcriptionFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Transcription: ﹩${roundToX(((transcriptionRate.value*profitMargin)+parseFloat(transcriptionRate.value)), 4)} ✕  ${recordingLength.value} = ﹩${roundToX((transcriptionFee+transcriptionFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${transcriptionRate.value} ✕ ${recordingLength.value} = ﹩${transcriptionFee}</li> 
                                            <li>Profit: ﹩${roundToX((transcriptionRate.value*profitMargin), 5)} ✕ ${recordingLength.value} = ﹩${roundToX((profitMargin*transcriptionFee), 2)}</li>
                                            </ul>`)
    sum += transcriptionFee
  } else {
    transcriptionBox.style.display = "none"
  }
  if (contentCreation.checked) {
    contentCreationBox.style.display = "block"
    let contentCreationFee = contentCreationRate.value * wordCount.value
    contentCreationFee = roundToX(contentCreationFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Content creation: ﹩${roundToX(((contentCreationRate.value*profitMargin)+parseFloat(contentCreationRate.value)), 4)} ✕  ${wordCount.value} = ﹩${roundToX((contentCreationFee+contentCreationFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${contentCreationRate.value} ✕ ${wordCount.value} = ﹩${contentCreationFee}</li> 
                                            <li>Profit: ﹩${roundToX((contentCreationRate.value*profitMargin), 5)} ✕ ${wordCount.value} = ﹩${roundToX((profitMargin*contentCreationFee), 2)}</li>
                                            </ul>`)
    sum += contentCreationFee
  } else {
    contentCreationBox.style.display = "none"
  }
  if (design.checked) {
    designBox.style.display = "block"
    let designFee = designRate.value * designLength.value
    designFee = roundToX(designFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Design: ﹩${roundToX(((designRate.value*profitMargin)+parseFloat(designRate.value)), 4)} ✕  ${designLength.value} = ﹩${roundToX((designFee+designFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${designRate.value} ✕ ${designLength.value} = ﹩${designFee}</li> 
                                            <li>Profit: ﹩${roundToX((designRate.value*profitMargin), 5)} ✕ ${designLength.value} = ﹩${roundToX((profitMargin*designFee), 2)}</li>
                                            </ul>`)
    sum += designFee
  } else {
    designBox.style.display = "none"
  }
  if (development.checked) {
    developmentBox.style.display = "block"
    let developmentFee = developmentRate.value * developmentLength.value
    developmentFee = roundToX(developmentFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Development: ﹩${roundToX(((developmentRate.value*profitMargin)+parseFloat(developmentRate.value)), 4)} ✕  ${developmentLength.value} = ﹩${roundToX((developmentFee+developmentFee*profitMargin), 2)}</li>
                              <ul>
                              <li>Cost: ﹩${developmentRate.value} ✕ ${developmentLength.value} = ﹩${developmentFee}</li> 
                              <li>Profit: ﹩${roundToX((developmentRate.value*profitMargin), 5)} ✕ ${developmentLength.value} = ﹩${roundToX((profitMargin*developmentFee), 2)}</li>
                              </ul>`)
    sum += developmentFee
  } else {
    developmentBox.style.display = "none"
  }
  if (voiceover.checked) {
    voiceoverBox.style.display = "block"
    let voiceoverFee = voiceoverRate.value * wordCount.value
    voiceoverFee = roundToX(voiceoverFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Voiceover: ﹩${roundToX(((voiceoverRate.value*profitMargin)+parseFloat(voiceoverRate.value)), 4)} ✕  ${wordCount.value} = ﹩${roundToX((voiceoverFee+voiceoverFee*profitMargin), 2)}</li>
                                            <ul>
                                            <li>Cost: ﹩${voiceoverRate.value} ✕ ${wordCount.value} = ﹩${voiceoverFee}</li> 
                                            <li>Profit: ﹩${roundToX((voiceoverRate.value*profitMargin), 4)} ✕ ${wordCount.value} = ﹩${roundToX((profitMargin*voiceoverFee), 2)}</li>
                                            </ul>`)
    sum += voiceoverFee
  } else {
    voiceoverBox.style.display = "none"
  }
  if (meeting.checked) {
    meetingBox.style.display = "block"
    let meetingFee = meetingRate.value * meetingLength.value
    meetingFee = roundToX(meetingFee, 2)
    calculations.insertAdjacentHTML("beforeend", `<li>Meeting: ﹩${roundToX(((meetingRate.value*profitMargin)+parseFloat(meetingRate.value)), 4)} ✕  ${meetingLength.value} = ﹩${roundToX((meetingFee+meetingFee*profitMargin), 2)}</li>
                              <ul>
                              <li>Cost: ﹩${meetingRate.value} ✕ ${meetingLength.value} = ﹩${meetingFee}</li> 
                              <li>Profit: ﹩${roundToX((meetingRate.value*profitMargin), 5)} ✕ ${meetingLength.value} = ﹩${roundToX((profitMargin*meetingFee), 2)}</li>
                              </ul>`)
    sum += meetingFee
  } else {
    meetingBox.style.display = "none"
  }
  let estimate = sum + sum * profitMargin
  let profit = sum * profitMargin
  totals.insertAdjacentHTML("beforeend", `<p><strong>Cost💸: ﹩${sum}</strong></p>`)
  totals.insertAdjacentHTML("beforeend", `<p><em>Profit🧧: ﹩${roundToX(profit, 2)}</em></p>`)
  totals.insertAdjacentHTML("beforeend", `<p><strong>Estimate💰: ﹩${roundToX(estimate, 2)}</strong></p>`)
}


updateTotals();