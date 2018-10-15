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

export {
  errorHandler,
  cleanUpGiphyData
}

