import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Tabs, Tab, Button, IconButton, useScrollTrigger, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

export default (props) => {
    const theme = useTheme()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const onInserterClicked = () => {
      props.toggleInserter()
    }

    const onSettingsClicked = () => {
      props.toggleSettings()
    }

    const tabs = (
      <Fragment>
        <Tabs value={0} indicatorColor='primary' style={{
            marginLeft: '120px',
            flex: 1
        }}>
          <Tab style={{
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft: '25px'
          }} onClick={() => onInserterClicked()} label='Components' />
        </Tabs>
        <Tabs value={0} indicatorColor='primary' style={{
            marginRight: '30px'
        }}>
        <Tab style={{
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: '25px'
        }} onClick={() => onSettingsClicked()} label='Settings' />
          <Tab style={{
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft: '25px'
          }} component={Link} to='/' label='Save' />
        </Tabs>
        <Button component={Link} to='/signup' style={{
            marginRight: '24px',
            backgroundColor: 'white',
            borderRadius: '50px',
            fontSize: '0.75em',
            paddingLeft: '16px',
            paddingRight: '16px'
        }}>Start for free</Button>
      </Fragment>
    )

    const drawer = (
      <Fragment>
        <IconButton 
          style={{
            marginLeft: 'auto',
            marginRight: '8px',
            marginBottom: '4px',
            '&:hover': {
                backgroundColor: 'transparent'
            }
          }}
          disableRipple>
          <MenuIcon style={{
            height: '30px',
            width: '30px'
          }}/>
      </IconButton>
      </Fragment>
    )

    return(
      <Fragment>
        <ElevationScroll>
          <AppBar position='fixed'>
            <Button component={Link} to='/' disableRipple style={{
                padding: 0,
                maxWidth: '8em',
                "&:hover": {
                  backgroundColor: 'transparent'
                },
                marginBottom: {xs: '0.55em'}
            }}>
              <img src='/images/ceblogo.png' alt="logo" style={{ 
                maxWidth: '6em',
                padding: '16px 8px 22px 16px'
               }} />
            </Button>
            <Toolbar disableGutters style={{marginTop: '-4.5em'}}>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div style={{height:'3m', marginBottom: {md: '2em', xs: '2em'}}} />
      </Fragment>
    )
}