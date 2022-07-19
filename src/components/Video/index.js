import React from 'react';
import {View} from 'react-native';
import { useSelector } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import { styles } from './styles';

const VideoTrailer = () => {

    const url = useSelector((state) => state.movieList.video)

    return (
        <View style={styles.playerView}>
             <YoutubePlayer height={300} play={true} videoId={url} />
        </View>
    );
}

export default VideoTrailer;