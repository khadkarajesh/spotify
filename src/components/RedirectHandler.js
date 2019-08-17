import React from 'react'
import queryString from 'query-string'
import { getToken } from '../api/ApiService'

export default function RedirectHandler(params) {
    let code = queryString.parse(params.location.search).code
    console.log(code)
    getToken(code).then(reponse => {
        params.history.push('/')
    })
    return (
        <div>
            callback
        </div>
    )
}
