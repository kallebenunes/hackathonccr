import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'


const Routes = () => {
    return (
        <Switch>
            <Route exact='true' path='/'>
                <Home/>
            </Route>
            <Route path='*'></Route>
        </Switch>
    )
}

export default Routes
