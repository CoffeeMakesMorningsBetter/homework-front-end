function errorHandler(res) {
  if(res.status > 299) {
    throw new Error('Something went wrong')
  } else {
    return res
  }
}

function cleanUpGiphyData(arr) {
  return arr.map(gif => {
    let { id,  import_datetime, trending_datetime } = gif 
    let { url } = gif.images.downsized_large
    return {id, import_datetime, trending_datetime, url}
  })
}

function imagesLoaded(parentNode) {
  console.log('inside imgesLoaded function!')
  const imgElements = [...parentNode.querySelectorAll('img')]
  for (let i = 0; i < imgElements.length; i++) {
    const img = imgElements[i]
    if (!img.complete) return false
    }
  return true 
}

export {
  errorHandler,
  cleanUpGiphyData,
  imagesLoaded
}

