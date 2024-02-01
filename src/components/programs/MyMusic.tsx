import Mp3Player from '@components/music/Mp3Player';

const MyMusic = () => {
    const tracks = [
        {
            audioPath: 'music/ukulele/Just the Two of Us.mp3',
            title: 'Just the Two of Us (Ukulele Cover)',
            artist: 'Benedict Hawthorn'
        },
        {
            audioPath: 'music/ukulele/Fragile.mp3',
            title: 'Fragile (Ukulele Cover)',
            artist: 'Benedict Hawthorn'
        }
    ];

    return (
        <div className='flex flex-col space-y-4'>
            {tracks.map((track, i) => (
                <>
                    <Mp3Player track={track} />
                    {i < tracks.length - 1 && <hr />}
                </>
            ))}
        </div>
    );
};

export default MyMusic;
