import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID aYw7EnsabnlYESIqadHF0f93zDNkWolQBm2s-mKUV8Q",
  },
});
