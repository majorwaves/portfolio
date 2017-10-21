import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'br6aauxhl8qu';
const API_TOKEN = '5e30bf4b36119ac52c2320c82e8a750a57821ae9f414a149c90e54a061e4feb0';
export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=post`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
