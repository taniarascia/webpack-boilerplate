// Test import of a JavaScript function, an SVG, and Sass
import {HelloWorld} from './js/HelloWorld'
import WebpackLogo from './images/webpack-logo.svg'
import './styles/index.scss'

// Create SVG logo node
const logo = document.createElement('img')
logo.src = WebpackLogo

// Create heading node
const heading = document.createElement('h1')
heading.textContent = HelloWorld()

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root')
app.append(logo, heading)
