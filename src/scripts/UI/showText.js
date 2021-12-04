export function goAnimation(textArea) {
  let text = textArea.textContent
  let to = text.length
  let from = 0

  animate({
    duration: 3000,
    timing: linearTiming,
    draw: function(progress) {
      let result = (to - from) * progress + from;
      textArea.textContent = text.substr(0, Math.ceil(result))
    }
  })
}


function linearTiming (timeFraction) {
  return timeFraction;
}


function animate({timing, draw, duration}) {

  let start = performance.now()

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    let progress = timing(timeFraction)

    draw(progress)

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }

  })
}