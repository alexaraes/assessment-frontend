import { useState, useEffect } from "react";
import axios from 'axios';
import { PageType } from "../types/types";

// returns index.html if no base url provided
// without specifying, forces base url to localhost:3000, not 3030
const baseUrl = 'http://localhost:3030';

export default function useFetch(id: string) {
   const [response, setResponse] = useState<PageType>();
   const [error, setError] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchData = async () => {
         axios.get(`${baseUrl}/page/${id}`)
            .then(function (res) {
                // handle success
                console.log(res.data.data);
                setResponse(res.data.data);
            })
            .catch(function (error) {
                // handle error
                setError(error);
            })
            .finally(function () {
               setInterval(() => setIsLoading(false), 1000);
            });
      };

      fetchData();
   }, [id]);

   return { response, error, isLoading };
}