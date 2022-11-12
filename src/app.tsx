import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from './Components/Card';

// returns index.html if no base url provided
// without baseurl, redirects to localhost:3000, not 3030
const baseUrl = 'http://localhost:3030';

const App = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState(undefined);

    useEffect(() => {
        axios.get(`${baseUrl}/page/${id}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            setData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            console.log('success!');
        });
    }, []);

    return (
        <div>
            <Card id={id} />  
        </div>
    );
};

export default App;
