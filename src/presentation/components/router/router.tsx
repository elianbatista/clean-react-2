import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={null} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
