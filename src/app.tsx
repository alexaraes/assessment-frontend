import { useParams } from 'react-router';
import Page from './components/Page';

const App = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page id={id} />
    );
};

export default App;
