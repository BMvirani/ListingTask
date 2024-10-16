import axios from "axios";


// Function to call a GET API
const callGetAPI = async (apiName, isToastParam) => {
  try {
    const response = await axios.get(apiName);
    return response;
  } catch (error) {
    return error;
  }
};

// Exporting the functions
export {  callGetAPI };
