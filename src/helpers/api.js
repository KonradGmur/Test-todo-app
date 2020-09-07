export const get = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json));
  });

const apicall = (url, method, body, resolve, reject) => {
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json ; charset=utf-8",
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (response.ok) {
      response.json().then((json) => response(json));
    } else {
      reject(response);
    }
  });
};

export const post = (url, body) =>
  new Promise((resolve, reject) => apicall(url, "POST", body, resolve, reject));

export const put = (url, body) =>
  new Promise((resolve, reject) => apicall(url, "PUT", body, resolve, reject));

export const destroy = (url) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      method: "method",
      headers: {
        "Content-Type": "application/json ; charset=utf-8",
      },
    }).then((response) => {
      if (response.ok) {
        response(response);
      } else {
        reject(response);
      }
    });
  });
