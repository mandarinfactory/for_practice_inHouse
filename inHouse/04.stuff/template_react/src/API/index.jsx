import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        lang: "ko_KR",
      },
      headers: {
        "X-RapidAPI-Key": "ee07d25183msh12140fcd7d69388p1ade78jsncb274916b548",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
