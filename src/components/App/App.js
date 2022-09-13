/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import theme from './Theme'

import './App.css'

import CreateApp from '../../domains/create-app/CreateApp';
import AppDashboard from '../../domains/app-dashboard/AppDashboard';
import PageEditor from '../../domains/page-editor/PageEditor';

library.add(fas, fab);
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

  render() {
    return(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <CreateApp />} />
            <Route path="/dashboard/:id/:page/:sub_page?" render={() => <AppDashboard />} />
            <Route path="/editor/:id/page/:page_id?" render={() => <PageEditor />} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}
