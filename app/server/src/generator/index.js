const latex = require('node-latex')
const sanitize = require('./sanitizer')
const getTemplateData = require('./templates')

function generateTex(formData) {
  const data = sanitize(formData)
  const { texDoc, opts } = getTemplateData(data)

  process.stdout.write('\x1Bc')
  console.log(JSON.stringify(data, null, 4))

  return { texDoc, opts }
}

function generatePDF(formData) {
  const { texDoc, opts } = generateTex(formData)

  return latex(texDoc, opts)
}

module.exports = {
  generateTex,
  generatePDF
}
