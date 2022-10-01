import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from './home/Home';

function Router(props) {
    return (
        <Routes>
            <Route path='/' element={Home} />
            <Route path='/dojo' element={Dojo} />
        </Routes>
    );
}

export default Router;