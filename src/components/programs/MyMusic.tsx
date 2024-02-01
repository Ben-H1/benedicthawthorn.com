import Mp3Player from '@components/music/Mp3Player';

const MyMusic = () => {
    const tracks = [
        {
            audioPath: 'music/ukulele/Just the Two of Us.mp3',
            title: 'Just the Two of Us (Ukulele Cover)',
            artist: 'Benedict Hawthorn'
        }
    ];

    return (
        <div>
            <Mp3Player track={tracks[0]} />
        </div>
    );
};

export default MyMusic;
