const format = (text) => {
  if (text?.includes(','))
    return `"${text}"`
  return text
}

module.exports = format