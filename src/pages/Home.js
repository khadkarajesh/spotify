import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignContent: 'center',
        alignSelf: 'center'
    }
}))

export default function Home() {
    const classes = useStyles()
    let scopes = encodeURIComponent('user-read-private user-read-email')
    let redirectUri = encodeURIComponent('http://localhost:3000/callback/')
    return (
        <div className={classes.root}>
            <a href={`https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${scopes}&redirect_uri=${redirectUri}`}>Authorize</a>
        </div>
    )
}
