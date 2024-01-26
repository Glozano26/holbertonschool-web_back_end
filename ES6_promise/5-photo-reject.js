export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    const filename = false;
    if (filename) {
      resolve('succes!');
    } else {
        reject(new Error(`${filename} cannot be processed`));
    }
  })
}
