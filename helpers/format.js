const format = (text) => {
  if (text?.includes(','))
    return `"${text}"`
  return text
}

export default format;