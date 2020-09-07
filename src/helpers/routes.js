const serverUrl = "http://localhost:4454/servers";

export const toDoItemsApiUrl = (id) =>
  id ? `${serverUrl}/${id}` : `${serverUrl}`;
