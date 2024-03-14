// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import imageFile from '@/images/disk.png'

// Test import of styles in JavaScript
import '@/styles/index.scss'

// Appending to the DOM

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a source asset file
const imageSource = document.createElement('img')
imageSource.src = imageFile
imageSource.classList.add('disk-image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
app.append(heading, imageBackground, imageSource, imagePublic)
