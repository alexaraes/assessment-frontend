import { useState, useEffect } from "react";
import axios from 'axios';
import { PageType, WeatherType } from "../types/types";

// returns index.html if no base url provided
// without specifying, forces base url to localhost:3000, not 3030
const baseUrl = 'http://localhost:3030';

export function usePageFetch(id: string) {
   const [response, setResponse] = useState<PageType>();
   const [error, setError] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchData = async () => {
         axios.get(`${baseUrl}/page/${id}`)
            .then(function (res) {
                setResponse(res.data.data);
            })
            .catch(function (error) {
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

// wanted one function, but could not get typescript to be nice to the response type
export function useWeatherFetch(lat: number | undefined, lon: number | undefined) {
   const [response, setResponse] = useState<WeatherType>();
   const [error, setError] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchData = async () => {
         axios.get(`${baseUrl}/integration/weather?lat=${lat}&lon=${lon}`)
            .then(function (res) {
                setResponse(res.data.data);
            })
            .catch(function (error) {
                setError(error);
            })
            .finally(function () {
               setInterval(() => setIsLoading(false), 1000);
            });
      };

      fetchData();
   }, [lat, lon]);

   return { response, error, isLoading };
}