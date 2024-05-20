function createRain() {
  const rainContainer = document.getElementById('rain-container')
  const numberOfDrops = 200

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div')
    drop.className = 'drop'
    drop.style.left = `${Math.random() * 100}vw`
    drop.style.animationDuration = `${Math.random() * 2 + 2}s`
    drop.style.animationDelay = `${Math.random() * 2}s`
    rainContainer.appendChild(drop)
  }
}

document.addEventListener('DOMContentLoaded', createRain)
