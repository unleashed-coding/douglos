window.onload = () => {
  const imgs = [...document.getElementsByTagName('img')]

  imgs.forEach(img => {
    if (Math.random() >= 0.9)
      img.src = "https://i.imgur.com/XSrHlah.jpg"
  })
}
