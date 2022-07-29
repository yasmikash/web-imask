const baseUrl = "http://imask.westus3.cloudapp.azure.com:8080";

const errorMessage = "An error occurred while processing the request";

export const userLoginApi = async (data) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");

  const response = await fetch(`${baseUrl}/users/signIn`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status !== 200) throw new Error(errorMessage);

  return await response.json();
};

export const fecthUserProfileApi = async (token) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("authorization", "Bearer " + token);

  const response = await fetch(`${baseUrl}/users/profile`, {
    headers,
    method: "GET",
  });

  if (response.status !== 200) throw new Error();

  return await response.json();
};

export const fecthAnalyzedAllApi = async (token) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("authorization", "Bearer " + token);

  const response = await fetch(`${baseUrl}/history/analyzedAll`, {
    headers,
    method: "GET",
  });

  if (response.status !== 200) throw new Error(errorMessage);

  return await response.json();
};

export const fecthAnalyzedStatusApi = async (data, token) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("authorization", "Bearer " + token);

  const response = await fetch(`${baseUrl}/history/analyzedStatus`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status !== 200) throw new Error(errorMessage);

  return await response.json();
};

export const fecthAnalyzedBpmApi = async (data, token) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("authorization", "Bearer " + token);

  const response = await fetch(`${baseUrl}/history/analyzedBpm`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status !== 200) throw new Error(errorMessage);

  return await response.json();
};

export const fecthAnalyzedHeartRateApi = async (data, token) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("authorization", "Bearer " + token);

  const response = await fetch(`${baseUrl}/history/analyzedHeartRate`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status !== 200) throw new Error(errorMessage);

  return await response.json();
};

export const fecthAnalyzedSpo2Api = async (data, token) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("authorization", "Bearer " + token);

  const response = await fetch(`${baseUrl}/history/analyzedSpo2`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status !== 200) throw new Error(errorMessage);

  return await response.json();
};

export const fecthAnalyzedCoughRateApi = async (data, token) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("authorization", "Bearer " + token);

  const response = await fetch(`${baseUrl}/history/analyzedCoughRate`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status !== 200) throw new Error(errorMessage);

  return await response.json();
};

export const fecthAnalyzedTempApi = async (data, token) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("authorization", "Bearer " + token);

  const response = await fetch(`${baseUrl}/history/analyzedTemperature`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status !== 200) throw new Error(errorMessage);

  return await response.json();
};
