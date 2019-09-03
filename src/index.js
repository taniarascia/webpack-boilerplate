// Test import of a JavaScript function, an SVG, and Sass
import HelloWorld from './js/HelloWorld'
import WebpackLogo from './images/webpack-logo.svg'
import './styles/index.scss'

// Create SVG logo node
const logo = document.createElement('img')
logo.src = WebpackLogo

// Create paragraph node
const greeting = document.createElement('p')
greeting.textContent = HelloWorld()

// Append SVG and paragraph nodes to the DOM
const app = document.querySelector('#app')
app.append(logo, greeting)
