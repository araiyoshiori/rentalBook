export function getUser(loginData) {
  console.log(loginData);
  let url = new URL("http://localhost:8000/api/users");
  Object.keys(loginData).map(key =>
    url.searchParams.append(key, loginData[key])
  );

  return fetch(url)
    .then(res => res.json())
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}
