export function AddLeadingZeroes(number, places) {
  return String(number).padStart(places, "0"); // Stringifies number and adds leading zeroes:
}

export function CapitalizeMe(string) {
  return string.toUpperCase();
}

export function NoiseMaker(requestedSound) {
  let noise = requestedSound || "silent";
  if (noise !== "silent") {
    console.log(`NoiseMaker() ran: "${noise}.mp3"`)
    new Audio(`/${noise}.mp3`).play();
  }
}
