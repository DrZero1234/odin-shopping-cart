export const FetchOptions = (key, method = "GET") => {
  return {
    method,
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host":
        "affogato-the-ecommerce-store.p.rapidapi.com",
    },
  };
};
