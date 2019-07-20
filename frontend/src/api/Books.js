export function getBookList(id) {
  return fetch("http://localhost:8000/api/books")
    .then(res => res.json())
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}

export async function patchBookStatusList(bookList, id) {
  let payloadList = [];
  let errorList = [];

  for (let book of bookList) {
    let { payload, error } = await patchBookStatus(book, id);

    if (payload && !error) {
      payloadList.push(payload);
    } else {
      errorList.push(error);
    }
  }
  return { payloadList, errorList };
}

function patchBookStatus(book, id) {
  console.log("patchBook", book.id);
  let url = `http://localhost:8000/api/books/${book.id}/`;
  return fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: book.status === "1" ? "0" : "1",
      retntalUser: book.status === "1" ? null : id
    })
  })
    .then(res => res.json())
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}
