import React from 'react';
import {View, Image} from 'react-native';
import { useSelector } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import { styles } from './styles';

const VideoTrailer = () => {

    const url = useSelector((state) => state.movieList.video)
    const poster = useSelector((state) => state.movieList.portada)
    const biu  = useSelector((state) => state.movieList.baseImageUrl)

    return (
        <>
            {
                url ?
                <View style={styles.playerView}>
                    <YoutubePlayer height={300} play={true} videoId={url} />
                </View>
                :
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={{uri: `${biu}w780${poster.poster_path}`}}
                    />
                </View>
            }
        </>
    );
}

export default VideoTrailer;