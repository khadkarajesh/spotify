import React, { Fragment, useEffect, useState } from 'react'
import { songsCategories, authorize } from '../api/ApiService'
import { makeStyles } from '@material-ui/core/styles'
import { Container, CssBaseline, Divider, Typography, GridList, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

export default function Browse() {
    const classes = useStyles()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        songsCategories().then(response => {
            setCategories(response.items)
        })
    }, [])

    const login = () => {
        authorize().then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <Fragment >
            <CssBaseline />
            <Container maxWidth='lg' className={classes.root} >
                <Button onClick={login}>Authorize</Button>
                <Typography variant='subtitle1'>Genres and Moods</Typography>
                <Divider />
                <GridList cols={4} cellHeight={275}>
                    {
                        categories.map(item => (<img src={item.icons[0].url} key={item.id} alt={item.id} />))
                    }
                </GridList>
            </Container>
        </Fragment>
    )
}
