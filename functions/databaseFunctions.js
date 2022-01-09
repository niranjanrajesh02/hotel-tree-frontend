import axios from "axios";
function registerUser(user) {
  var data = JSON.stringify({
    "user_name": user.name,
    "email": user.email,
    "address": "None set",
    "contact_no": 0,
    "user_id": user.nickname
  });

  var config = {
    method: 'post',
    url: '/user',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log((response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}
export function verifyUser(user) {
  console.log(user);
  var config = {
    method: 'get',
    url: `/user/verify/${user.nickname}`,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log((response.data));
      if (response.data) {
        console.log("Verified");
        return
      } else {
        console.log("Registering...")
        registerUser(user);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
