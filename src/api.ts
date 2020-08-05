export const createItemLocal = (name: string, isError?: boolean) => {
  return new Promise((resolve, reject) => {
    let item = {
      id: Math.random(),
      name,
      checked: false
    };
    if (isError) reject("Error");
    else resolve(item);
  });
};

export const createItemApi = (name: string) => {
  return postData("/items", { name });
};

function postData(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}
