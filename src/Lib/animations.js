import anime from 'animejs'

export const animateShowElement = element => {
  anime({
    targets: element,
    opacity: [0 ,1]
  })
}

export const animateShapes = element => {
  anime({
    targets: element,
    translateX: [-window.screen.width, 0],
    delay: anime.stagger(100),
    easing: 'easeInOutExpo'
  })
}

export const animateForm = (element, delay = 200) => {
  anime({
    targets: element,
    translateX: [250, 0],
    opacity: [0, 1],
    scale: [0.8, 1],
    delay,
    easing: 'easeInOutExpo'
  })
}

export const animateFooterLinks = (element, delay = 200) => {
  anime({
    targets: element,
    opacity: [0, 1],
    delay,
    easing: 'easeInOutExpo'
  })
}

export const animateHideForm = (element, delay = 200) => {
  anime({
    targets: element,
    translateY: [0, 50],
    scale: [1, 0.8],
    opacity: [1, 0],
    delay,
    easing: 'easeInOutExpo'
  })
}

export const animateHideFooterLinks = (element, delay = 200) => {
  anime({
    targets: element,
    translateY: [0, 50],
    scale: [1, 0.9],
    opacity: [1, 0],
    delay,
    easing: 'easeInOutExpo'
  })
}

export const animateFitShape = (element, delay = 200) => {
  anime({
    targets: element,
    width: '100%',
    delay,
    easing: 'easeInOutExpo'
  })
}

export const animateWelcomeMessage = (element, delay = 200) => {
  anime({
    targets: element,
    translateY: [40, 0],
    opacity: [0, 1],
    delay: anime.stagger(delay),
    easing: 'easeInOutExpo'
  })
}