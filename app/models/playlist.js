const mongoose = require('mongoose')

const { Schema, model } = mongoose

const playlistSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: String,
        playlistData: [
            {
                mbid: String,
            }
        ],
        owner: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
    }, {
        timestamps: true,
    }
)

module.exports = model('Playlist', playlistSchema)