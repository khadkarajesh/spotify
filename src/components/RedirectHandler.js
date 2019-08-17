import React from 'react'
import queryString from 'query-string'
import {getToken} from '../api/AuthService'

export default function RedirectHandler(params) {
    getToken(queryString.parse(params.location.search).code)
    params.history.push('/browse')
    return (
        <div>
            callback
        </div>
    )
}
