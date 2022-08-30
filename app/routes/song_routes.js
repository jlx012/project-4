const express = require('express')
const passport = require('passport')
// this allows us to load our env variables
require('dotenv').config()
const apiToken = process.env.API_TOKEN

// const Song = require ('../models/song')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()
const axios = require('axios');
const { response } = require('../../server')

const topArtists = (key) => {
    return `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${key}&format=json`
}

const topSongs = (key) => {
    return `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json`
}

router.get('/', (req, res, next) => {
    res.send('/')
})

router.get('/myoosic', (req, res, next) => {
    console.log('route is hit')

    axios.get(topArtists(`${apiToken}`))
        .then(artists => {
            axios.get(topSongs(`${apiToken}`))
                .then(songs => {
                    res.status(200).json({artists: artists.data.artists, songs: songs.data.tracks})
                })
                .catch(next)
        })
        .catch(next)
})



module.exports = router