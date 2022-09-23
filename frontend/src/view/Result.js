import { Link } from 'react-router-dom';
import DisplayResults from './../component/Results.js';

export const Result = () => {

    return(
        <>
            <Link to='/'>Home</Link>
            <DisplayResults />
        </>
    )
}

