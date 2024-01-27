// export default function loadBalancer(chinaDownload, USDownload) {
//   return new Promise((resolve, reject) => {
//     if (chinaDownload < USDownload) {
//       resolve();
//     } else if (USDownload < chinaDownload) {
//         resolve();
//     } else {
//         return Error;
//     }
//   });
// }
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
