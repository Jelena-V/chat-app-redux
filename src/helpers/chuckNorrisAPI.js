function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }
  if (response.status === 404) {
    throw new Error('Chuck_Norris_Fan is offline. Try another chat.');
  }
  throw new Error("Server's down. Something went terribly wrong.");
}

export function reachBotMessage() {
  const url = `https://api.chucknorris.io/jokes/random`;

  return fetch(url).then((response) => resolveResponse(response));
}
