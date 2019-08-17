import React, { Fragment, useEffect, useState } from 'react'
import request from '../api/ApiService'
import { makeStyles } from '@material-ui/core/styles'
import { Container, CssBaseline, Divider, Typography, GridList } from '@material-ui/core'

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
        const fetch = async () =>{
            try {
                let response = await request({
                    method: 'get',
                    url: '/browse/categories',
                })
                setCategories(response.categories.items)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])



    return (
        <Fragment >
            <CssBaseline />
            <Container maxWidth='lg' className={classes.root} >
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
