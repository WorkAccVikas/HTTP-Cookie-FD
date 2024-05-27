import axios from "axios";

const api = axios.create({
  //   baseURL: "http://localhost:5000", // Adjust if using a different port or domain
  baseURL: import.meta.env.VITE_BACKEND_URL, // Adjust if using a different port or domain
  withCredentials: true, // Send cookies with requests
});

export const setCookie = async () => {
  try {
    const response = await api.post("/set-cookie");
    console.log(response.data);
  } catch (error) {
    console.error("Error setting cookie", error);
  }
};

export const readCookie = async () => {
  try {
    const response = await api.get("/read-cookie");
    console.log(`🚀 ~ readCookie ~ response:`, response);
    return response.data.message;
  } catch (error) {
    console.error("Error reading cookie", error);
  }
};

export const clearCookie = async () => {
  try {
    const response = await api.delete("/clear-cookie");
    console.log(response.data);
  } catch (error) {
    console.error("Error clearing cookie", error);
  }
};
