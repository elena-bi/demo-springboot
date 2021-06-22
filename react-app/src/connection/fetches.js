
async function doFetchWithGet(url) {
    const headersAndBody = {
      method: 'GET',
      mode: 'cors',
      headers: {
      Accept: 'text/plain',
    }
  };
  const response = await fetch(url, headersAndBody);
  return response;
}

async function doFetchWithGetAndCallBack(url, callback = function(text) {} ) {
    let responseStatus = 0;
    doFetchWithGet(url)
        .then(
          (response) => {
            responseStatus = response.status;     
            // console.log(responseStatus+">> Got response from API: ");
            return response.text();
          }        
        ).then(
          (responseText) => {
            callback(responseText);
          }
        ).catch(
          (error) => {
            if (responseStatus !== 0) { console.log(responseStatus); }
            console.log(error);
          }  
        );
}

export default doFetchWithGetAndCallBack;