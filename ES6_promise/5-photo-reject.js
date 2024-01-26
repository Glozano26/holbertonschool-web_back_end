export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // const filename = false;
    reject(new Error(`${filename} cannot be processed`));
  })
}
