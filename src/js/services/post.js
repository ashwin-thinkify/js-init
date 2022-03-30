import BASE_URL from "../constants/api.constants";

export default async function findCandidate({ email }) {
  if (email) {
    try {
      const result = await fetch(BASE_URL);
      return result;
    } catch (err) {
      console.log('getRecruter', err);
      return err;
    }
  }
}
