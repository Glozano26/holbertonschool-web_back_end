export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chinaDownload, USDownload);
    });
  });
}
