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

router.get('/playlists',  (req, res, next) => {
    Playlist.find()
        .populate('owner')
        .then(playlists => {
            res.status(200).json({ playlists: playlists })
        })
        .catch(next)
})

// Show for specific playlist
router.get('/playlists/:id', (req, res, next) => {
    const id = req.params.id

    Playlist.findById(id)
        .populate('owner')
        .then(handle404)
        .then((playlist) => res.status(200).json({ playlist: playlist }))
        .catch(next)
})

router.post('/create-playlist', requireToken, (req, res, next) => {
    req.body.playlist.owner = req.user.id

    Playlist.create(req.body.playlist)
        .then(playlist => {
            res.status(201).json(playlist)

            console.log(playlist);
        })
        .catch(next)
})

router.patch('/playlists/:id', requireToken, removeBlanks, (req, res, next) => {
	delete req.body.playlist.owner

	Playlist.findById(req.params.id)
		.then(handle404)
		.then((playlist) => {
			requireOwnership(req, playlist)
			return playlist.updateOne(req.body.playlist)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

router.delete('/playlists/:id', requireToken, (req, res, next) => {
	Playlist.findById(req.params.id)
		.then(handle404)
		.then((playlist) => {
			requireOwnership(req, playlist)
			playlist.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})


module.exports = router