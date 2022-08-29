const express = require('express')
const passport = require('passport')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()
const axios = require('axios');
const { response } = require('../../server')
const Playlist = require('../models/playlist')

router.get('/create-playlist', (req, res, next) => {
    res.send('/create-playlist')
})

router.post('/create-playlist', (req, res, next) => {
    req.body.playlist.owner = req.user.id

    Playlist.create(req.body.playlist)
        .then(playlist => {
            res.status(201).json({playlist})
        })
        .catch(next)
})

module.exports = router