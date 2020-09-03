import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4MItbHDgikOGTLJOxHgvT2svxr_Ldncq3xLc-cd0Qpc',
  },
});
