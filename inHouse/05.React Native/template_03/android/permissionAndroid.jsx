import React from "react";
import { PermissionsAndroid } from "react-native";

const getLocationAndroidHandler = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        message: "위치 허용을 누르십시오.",
        buttonNeutral: "다음에 물어봐주세요.",
        buttonNegative: "시름",
        buttonPositive: "ㅇㅋ",
      }
    );
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
      console.log("SEX!");
    } else {
      console.log("permission denied");
    }
  } catch (error) {
    console.warn(error);
  }
};

export default getLocationAndroidHandler;
