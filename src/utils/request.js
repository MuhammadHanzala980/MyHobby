import axios from "axios";
const request = async ({ route, method, payload, params }) => {
  // const myToken = JSON.parse(localStorage.getItem("__user_token__"));

  // const token = `Bearer ${myToken}`;
  console.log(payload)
  method = method;
  const headers = {
    ContentType: "application/json",
  };
  return axios({
    data: payload,
    url: `http://myhobbycourses.com/myhobbycourses_endpoint/${route}`,
    method,
    headers,
    params,
  });
};

export default request;
