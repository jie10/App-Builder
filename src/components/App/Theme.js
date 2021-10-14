import { createTheme } from '@mui/material/styles'

const arcBlue = '#0077c8'
const midBlue = '#1b6791'
const arcOrange = '#fae019'
const grey = '#999999'

export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcOrange}`
        },
        secondary: {
            main: `${arcBlue}`
        }
    },
    typography: {
        tab: {
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '0.85rem',
            color: `${arcBlue}`
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        },
        h1: {
            margin: 0,
            color: midBlue,
            fontSize: '2.2em',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 700
        },
        h2: {
            color: midBlue,
            fontSize: '1.8em',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 700
        },
        h3: {
            fontWeight: 700
        },
        h5: {
            fontSize: '1em',
            fontWeight: 300,
            fontFamily: 'Arial, Helvetica, sans-serif'
        },
        h6: {
            fontSize: '1em',
            fontWeight: 700,
            fontFamily: 'Arial, Helvetica, sans-serif'
        },
        subtitle1: {
            color: grey,
            fontSize: '1.0em',
            fontFamily: 'Arial, Helvetica, sans-serif'
        }
    },
    overrides: {

    }
})