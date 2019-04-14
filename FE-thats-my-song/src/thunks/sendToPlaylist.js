export const sendToPlaylist = (url, song) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json"
      }
    } 
    try {
      const response = await fetch(url, options)
      if(!response.ok) {
        throw new Error(response.statusText)
      } else {
        const data = await response.json()
        return data
      }
    } catch(error) {
      console.log(error.message)
    }
  }
}