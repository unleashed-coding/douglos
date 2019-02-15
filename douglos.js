window.onload = () => {
  const imgs = [...document.getElementsByTagName('img')]
  const douglos = ["5mSHRK5", "xu3xAY6", "tiomAm9", "XSrHlah", "Gt1AJCD", "OzEBKjO", "Abnwoag", "NpllIWa", "0cyoNZt", "LvsCBAZ", "qfDeasc", "qSTbiqX", "RoRHvon", "GpcZbvC", "QVA9SLo", "SpJXDsp"]
  imgs.forEach(img => img.src = Math.random() >= 0.9 ? `https://i.imgur.com/${douglos[Math.floor(Math.random() * douglos.length)]}.png` : img.src)
}