import { useEffect, useState } from "react";

const useRequest = (api_endpoint) => {
  const [result, setResult] = useState({
    data: [],
    error: {
      name: null,
      message: null,
    },
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(api_endpoint);
        const json = await response.json();
        setResult((obj) => ({ ...obj, data: json, isLoading: true }));
      } catch (error) {
        let obj = { ...result };
        obj.error.name = error.name;
        obj.error.message = error.message;
        setResult(obj);
      }
    })();
  }, []);

  return result;
};

export default useRequest;
