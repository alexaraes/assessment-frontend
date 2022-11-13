import { useParams } from 'react-router';
import Page from './components/Page';
import Card from './components/Weather';


// returns index.html if no base url provided
// without specifying, forces base url to localhost:3000, not 3030
const baseUrl = 'http://localhost:3030';

const App = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page id={id} />
    );
};

export default App;
