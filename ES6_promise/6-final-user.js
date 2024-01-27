import signUpUser from './4-user-promise';
import { uploadPhoto } from './utils';

export default asyn function handleProfileSignup(firstName, lastName, fileName) {
  const promise = new Promise.all([signUpUser(), uploadPhoto()]) => {

  }
}