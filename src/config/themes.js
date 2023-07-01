import red from '@mui/material/colors/red'
import green from '@mui/material/colors/green'
import pink from '@mui/material/colors/pink'
import purple from '@mui/material/colors/purple'
import indigo from '@mui/material/colors/indigo'

const themes = [
  {
    id: 'default',
    color: purple[500],
    source: {
      palette: {
        primary: purple,
        secondary: indigo,
        error: red,
      },
    },
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red,
      },
    },
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
      },
    },
  },
]

export default themes
