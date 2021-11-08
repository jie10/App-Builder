import React, { Component } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from './Theme'

import './App.css'
import Layout from '../Layout'

import Editor from '../Editor'
import CreateApp from '../../domains/create-app/CreateApp';
import AppDashboard from '../../domains/app-dashboard/AppDashboard';

export default class extends Component {
  state = {
    pages: [
      {id: 1, name: 'Dashboard', icon: 'dashboard-64.png'},
      {id: 3, name: 'Location', icon: 'location-64.png'},
      {id: 4, name: 'Items', icon: 'items-64.png'},
      {id: 5, name: 'Marketing', icon: 'promo-64.png'},
      {id: 6, name: 'Settings', icon: 'settings-64.png'}
    ]
  }

  render(){
    const { pages } = this.state

    return(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Editor />} />
            <Route exact path="/account/apps" render={() => <CreateApp />} />
            <Route path="/dashboard/apps/:id" render={() => <AppDashboard />} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}
