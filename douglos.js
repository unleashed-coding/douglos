window.onload = () => {
  const imgs = [...document.getElementsByTagName('img')]
  const douglos = ["5mSHRK5.png", "xu3xAY6.png", "tiomAm9.jpg", "XSrHlah.jpg"]

  imgs.forEach(img => {
    if (Math.random() >= 0.9)
      img.src = `https://i.imgur.com/${douglos[Math.floor(Math.random() * douglos.length)]}`
  })
}
