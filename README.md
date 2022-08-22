# Project 4 Client
https://github.com/jlx012/project-4-client

## Models
Playlists {
    name: {type: String, required: true},
    description: String,
    playlistImageUrl: String,
    user: {
        type: Schema.Types.ObjectId
        ref: user
    }
}

<!-- FollowList {
    user: {
        type: Schema.Types.ObjectId
        ref: user
    },
    artist: String
} -->


## API
#### Last FM API I may use
All api links below start with: http://ws.audioscrobbler.com

* Last FM Top Artists API:
/2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json

* Last FM Top Songs API:
/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json

* Last FM Top Albums API:
/2.0/?method=artist.gettopalbums&artist=cher&api_key=YOUR_API_KEY&format=json

* Last FM Artist Info API:
/2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json

* Last FM Song Info API:
/2.0/?method=track.getInfo&api_key=YOUR_API_KEY&artist=cher&track=believe&format=json

* Last FM Album Info API:
 /2.0/?method=album.getinfo&api_key=YOUR_API_KEY&artist=Cher&album=Believe&format=json

* Last FM Get Similar Artists API:
/2.0/?method=artist.getsimilar&artist=cher&api_key=YOUR_API_KEY&format=json

* Last FM Get Similar Songs API:
/2.0/?method=track.getsimilar&artist=cher&track=believe&api_key=YOUR_API_KEY&format=json

* Last FM Search Artists API:
/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json

* Last FM Search Albums API:
/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json

* Last FM Search Songs API:
/2.0/?method=track.search&track=Believe&api_key=YOUR_API_KEY&format=json

API KEY will be in .env file

## Routes
### User Routes
| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | create account  |
| POST   | `/sign-in`             | sign into account   |
| PATCH  | `/change-password/` | change password  |
| DELETE | `/sign-out/`        | signout  |

### Index Routes
| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| GET   | `/`             | show index   |
| GET   | `/music/`             | show list of songs and artists   |

### Artists Routes
| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| GET   | `/artist/:id`             | show artist  |

### Songs Routes
| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| GET   | `/song/:id`             | show song  |

### Albums Routes
| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| GET   | `/album/:id`             | show album  |

### Playlists Routes
| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| POST   | `/playlists/`             | create a playlist    |
| GET   | `/playlists/`             | view all playlists    |
| GET   | `/playlists/:playlistId`  | view a playlist    |
| PATCH  | `/playlists/:playlistId` | update a playlist  |
| DELETE | `/playlists/:playlistId`        | delete a playlist   |

### Favorites Routes
| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| GET   | `/favorites`             | see all favorites   |
| POST   | `/favorites/:id`             | add song to favorites   |
| DELETE | `/favorites/:id`        | remove song from favorites   |

<!-- ### Follow Routes
| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| GET   | `/follow`             | see all artists that I follow   |
| POST   | `/follow/:id`             | follow an artist  |
| DELETE | `/follow/:id`        | unfollow an artist  | -->