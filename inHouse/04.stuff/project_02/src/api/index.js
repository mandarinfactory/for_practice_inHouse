import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        lang : 'ko_KR'
      },
      headers: {
        "X-RapidAPI-Key": "4bf661b071mshb7293e86ca3d69ap1cc4b0jsn143e9dcba9ca",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
