import { useParams } from 'react-router';
import Card from './components/Card';


// returns index.html if no base url provided
// without specifying, forces base url to localhost:3000, not 3030
const baseUrl = 'http://localhost:3030';

const App = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Card id={id} />
    );
};

export default App;
