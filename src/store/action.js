// import axios from "axios";
import request from "../utils/request";

// export const nextStap = (data) => ({
//   type: "nextStap",
//   payload: data,
// });

// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>

export function signUpStudent(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "user/register",
        method: "post",
        payload: body,
       })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function signInStudent(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "custom_email_login/mail_login",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
