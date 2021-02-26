import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Cursos from '../Pages/Cursos'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/cursos">
                    <Cursos></Cursos>
                </Route>

                <Route path="/">
                    Erro 404 - Página não encontrada
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes