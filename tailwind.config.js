/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

// トークン情報
const tokens = require('./src/consts/tokens.json')
const tokenColors = tokens['colors']
const tokenFontFamilies = tokens['fontFamilies']
const tokenSizing = tokens['sizing']
const tokenSpacing = tokens['spacing']
const tokenBorderRadius = tokens['borderRadius']
const tokenLineHeight = tokens['lineHeights']
const tokenLetterSpacing = tokens['letterSpacing']
const tokenFontWeights = tokens['fontWeights']
const tokenFontSizes = tokens['fontSizes']

const colors = {}
const fontFamily = {}
const sizing = {}
const spacing = {}
const borderRadius = {}
const lineHeight = {}
const letterSpacing = {}
const fontWeight = {}
const fontSize = {}

for (const property in tokenColors) {
  if (!tokenColors[property]?.value) {
    colors[property] = {}
    for (const deep_property in tokenColors[property]) {
      colors[property][deep_property] =
        tokenColors[property][deep_property].value
    }
  } else {
    colors[property] = tokenColors[property]?.value
  }
}

for (const property in tokenFontFamilies) {
  fontFamily[property] = [tokenFontFamilies[property].value, 'san-serif']
}

for (const property in tokenSizing) {
  sizing[property] = tokenSizing[property].value
}

for (const property in tokenSpacing) {
  spacing[property] = tokenSpacing[property].value
}

for (const property in tokenBorderRadius) {
  borderRadius[property] = tokenBorderRadius[property].value
}

for (const property in tokenLineHeight) {
  lineHeight[property] = tokenLineHeight[property].value
}

for (const property in tokenLetterSpacing) {
  letterSpacing[property] = tokenLetterSpacing[property].value
}

for (const property in tokenFontWeights) {
  fontWeight[property] = tokenFontWeights[property].value
}

for (const property in tokenFontSizes) {
  fontSize[property] = tokenFontSizes[property].value
}
console.log(fontFamily)

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    colors,
    fontFamily,
    width: sizing,
    height: sizing,
    spacing,
    borderRadius,
    lineHeight,
    letterSpacing,
    fontWeight,
    fontSize,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
