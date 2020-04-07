import { combineReducers } from 'redux'

//REDUCERS

const songsReducer = () => {
    return [
        { title: 'Treasure', artist: 'Bruno Mars', duration: '2:58' },
        { title: 'Raise Your Glass', artist: 'Pink',duration: '3:23'},
        { title: 'Te Aviso, Te Anuncio', artist: 'Shakira', duration: '3:43'},
        { title: 'Can\'t Stop The Feeling', artist: 'Justin Timberlake', duration: '3:56' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})