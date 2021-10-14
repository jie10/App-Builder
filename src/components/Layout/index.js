import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline'
//import { makeStyles } from '@mui/styles'
import { Link, withRouter, useHistory } from 'react-router-dom'

import { 
  Divider, Drawer, Hidden, List, ListItem, ListItemIcon, 
  ListItemText, Collapse, useTheme, Icon } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { compose } from 'recompose'

import { AUTH_TOKEN, AUTH_ROLE, AUTH_PROFILE } from '../../constants'

var drawerWidth = 240

function ResponsiveDrawer(props) {
  const identity = localStorage.getItem(AUTH_TOKEN)
  const { container, children, pages } = props
  const history = useHistory()

  //const classes = useStyles()
  const theme = useTheme()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [open, setOpen] = useState(true)
  const [profile, setProfile] = useState({})

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem(AUTH_PROFILE)))
  }, '1')

  //var user = JSON.parse(localStorage.getItem('user'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const handleClick = () => {
    setOpen(!open)
  }

  const drawer = (
    <div>
      <div sx={{
        drawerPaper: {width: drawerWidth}
      }} />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        sx={{
            width: '100%',
            maxWidth: 360
        }}
      >
        <ListItem button onClick={handleClick} >
          <ListItemIcon sx={{ minWidth: 40, paddingLeft: 8}}>
            <Icon sx={{root: {textAlign: 'center'}}}>
              <img sx={{height: '100%'}} src='/images/passport-64.png' alt='passport'/>
            </Icon>
          </ListItemIcon>
          <ListItemText sx={{primary: { color: '#8c8c8c', fontSize: '13px', marginLeft: 8}}} primary={`Randell Ramirez`} />
          {!open ? <ExpandLess style={{ fontSize: 18}} /> : <ExpandMore style={{ fontSize: 18}} />}
        </ListItem>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem component={Link} to='/Profile' button sx={{paddingLeft: theme.spacing(4)}}>
              <ListItemIcon sx={{ minWidth: 40, paddingLeft: 8}}>
                <StarBorder style={{ fontSize: 16}} />
              </ListItemIcon>
              <ListItemText sx={{primary: { color: '#8c8c8c', fontSize: '13px', marginLeft: 8}}} primary="Profile" />
            </ListItem>
            <ListItem button sx={{paddingLeft: theme.spacing(4)}} onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                localStorage.removeItem(AUTH_ROLE)
                localStorage.removeItem(AUTH_PROFILE)
                history.push(`/`)
              }
            }>
            <ListItemIcon sx={{ minWidth: 40, paddingLeft: 8}}>
              <StarBorder style={{ fontSize: 16}} />
            </ListItemIcon>
            <ListItemText sx={{primary: { color: '#8c8c8c', fontSize: '13px', marginLeft: 8}}} primary="Logout" />
          </ListItem>
          </List>
        </Collapse>
        <div style={{height: 20, width: 'auto'}}></div>
        <Divider />
        {pages.map(({ id, name, icon }) => {
            return<ListItem component={Link} to={`/${identity}/${name}`} style={{margin: '16px 0px'}} key={id} button>
            <ListItemIcon sx={{ minWidth: 40, paddingLeft: 8}}>
              <Icon sx={{root: {textAlign: 'center'}}}>
                <img sx={{height: '100%'}} src={`/images/${icon}`} alt={name}/>
              </Icon>
            </ListItemIcon>
            <ListItemText sx={{primary: { color: '#8c8c8c', fontSize: '13px', marginLeft: 8}}} primary={name} />
          </ListItem>
          }
        )}
      </List>
    </div>
  );

  return (
    <div sx={{display: 'flex'}}>
      <CssBaseline />
      <nav xs={{
          width: {sm: drawerWidth},
          flexShrink: {sm: 0}
      }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{paper: {width: drawerWidth}}}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            sx={{paper: {width: drawerWidth}}}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main sx={{flexGrow: 1}}>
        {children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default compose(withRouter)(ResponsiveDrawer)