import { useEffect, useState } from "react";
import { AxiosInstance } from "./axios-istance";

export const useAxios = (route:string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {    
    setLoading(true);
    const getData = AxiosInstance.get(route)
      .then((response) => {        
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        setData([])
        setLoading(false)
        setError(err);
      });
  }, [route]);

  return { data, loading, error};
};
