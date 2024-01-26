export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((message) => {
        console.log('Got a response from the API', message);
        resolve({ status: 200, body: 'success' });
      })
      .catch((error) => {
        console.error(error);
        reject(new Error());
      });
  });
}
