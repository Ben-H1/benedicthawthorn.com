import Text from '@components/Text';
import { withCustomAudio } from 'react-soundplayer/addons';
import { PlayButton } from 'react-soundplayer/components';
import Slider from '../form/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

type Mp3Track = {
    audioPath: string;
    artworkPath?: string;
    title: string;
    artist: string;
};

type Mp3PlayerProps = {
    track: Mp3Track;
};

const secondsToString = (seconds: number) => {
    const date = new Date(seconds * 1000);

    const minutesString = date.getMinutes().toString().padStart(2, '0');
    const secondsString = date.getSeconds().toString().padStart(2, '0');

    const string = `${minutesString}:${secondsString}`;

    return string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActualPlayer = withCustomAudio((props: any) => {
    const {
        track,
        currentTime,
        duration,
        soundCloudAudio
    } = props;

    const currentTimeString = secondsToString(currentTime);
    const durationString = secondsToString(duration);

    return (
        <div className='flex space-x-4 items-center'>
            {track.artworkPath ? (
                <img
                    src={track.artworkPath}
                    className='w-20 h-20'
                />
            ) : (
                <div className='w-20 h-20 border border-black flex items-center justify-center p-5'>
                    <FontAwesomeIcon icon={faMusic} className='h-full w-full' />
                </div>
            )}
            <div className='flex-1 truncate'>
                <Text.H3 className='truncate'>{track.title}</Text.H3>
                <Text.Body className='text-sm mb-2 truncate'>{track.artist}</Text.Body>
                <div className='flex space-x-2 items-center'>
                    <Text.System>{currentTimeString}</Text.System>
                    <Slider
                        min={0}
                        step={0.00001}
                        max={duration}
                        value={currentTime}
                        onChange={(e) => soundCloudAudio.audio.currentTime = e.target.value}
                        className='w-full'
                    />
                    <Text.System>{durationString}</Text.System>
                </div>
            </div>
            <PlayButton
                onTogglePlay={() => {
                    if (currentTime < duration) {
                        soundCloudAudio.audio.currentTime = currentTime;
                    }
                }}
                className='w-10 h-10 border border-black rounded-md p-2 outline-none'
                {...props}
            />
        </div>
    );
});

const Mp3Player = ({ track }: Mp3PlayerProps) => {
    return (
        <ActualPlayer
            streamUrl={track.audioPath}
            trackTitle={track.title}
            track={track}
        />
    );
};

export default Mp3Player;
