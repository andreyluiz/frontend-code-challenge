const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(new Error(res.statusText));
  }
}

export default {
  fetchAds() {
    return fetch('/v1/advertisements')
      .then(checkStatus)
      .then(res => res.json())
      .then(data => data.data)
  }
}
