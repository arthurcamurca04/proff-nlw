import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/Teachers List';
import TeacherForm from './pages/Teacher Form';

function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/study" component={TeacherList}></Route>
            <Route path="/give-classes" component={TeacherForm}></Route>
        </BrowserRouter>
    );
}

export default Routes;