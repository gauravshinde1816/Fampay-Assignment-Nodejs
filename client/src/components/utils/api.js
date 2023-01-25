import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchVideos = async (page) => {
  try {
    const res = await axios.get(`${BASE_URL}/videos`, {
      params: {
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
