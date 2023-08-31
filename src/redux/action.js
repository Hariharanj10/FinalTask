import axios from "axios";
import { API_REQUEST, API_SUCCESS, API_ERROR } from "./actionTypes";

export const apiRequest = () => {
  return {
    type: API_REQUEST,
  };
};

export const apiSuccess = (data) => {
  return {
    type: API_SUCCESS,
    payload: data,
  };
};

export const apiError = (err) => {
  return {
    type: API_ERROR,
    payload: err,
  };
};

const auth_token =
  "eyJhbGciOiJFUzI1NiJ9.eyJzZXNzaW9uX2tleSI6Imw2R0h0MythNjBHRStRTGRrV2Vlb2JoOS9PWlJlc1NFdnNJY2dsTVRkV296emhYd0VQSkhuK05ZdlpCUHU5THZnaTZ2bXdoU3pjOTRydjV2IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMTAgMDY6MzU6MzQgVVRDIiwiYWRtaW5faWQiOjQ4OX0.Eu5DvP6msKt1vaqAvtPwzyMK7wn2-B8utilNsttNx4d-usliRgqozOtMVaeNEjLJMFq8GuyguFmhsLnKNJ-2tQ";

const page_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6Mjk3ODk4NDQ4M30.Sij4KVl9p_WXf-XIXHYMgA42PlqPEwmCWtcbNzODCNM";

const URL =
  "https://api.devtest.experience.com/v2/core/accounts?page=1&limit=10&key=&my_account=1&new_account_flag=0&sort_by=name&order=asc";

export const callApi = () => {
  return async (dispatch) => {
    dispatch(apiRequest());
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: auth_token,
          "Page-Token": page_token,
        },
      });
      const responseData = response?.data;
      dispatch(apiSuccess(responseData));
    } catch (error) {
      const err = error?.message;
      dispatch(apiError(err));
    }
  };
};
