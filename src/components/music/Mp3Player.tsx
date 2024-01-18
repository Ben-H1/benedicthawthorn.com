import { withCustomAudio } from 'react-soundplayer/addons';
import { PlayButton } from 'react-soundplayer/components';
import H3 from '../text/H3';
import Body from '../text/Body';
import Slider from '../form/Slider';

type Mp3Track = {
    audioPath: string;
    artworkPath: string;
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
    const durationString = secondsToString(Math.ceil(duration));

    return (
        <div className='flex space-x-4 items-center'>
            <img
                src={track.artworkPath}
                className='w-20 h-20'
            />
            <div className='flex-1 truncate'>
                <H3 className='truncate'>{track.title}</H3>
                <Body className='text-sm mb-2 truncate'>{track.artist}</Body>
                <div className='flex space-x-2 items-center'>
                    <span>{currentTimeString}</span>
                    <Slider
                        min={0}
                        max={Math.ceil(duration)}
                        value={currentTime}
                        onChange={(e) => soundCloudAudio.audio.currentTime = e.target.value}
                        className='w-full'
                    />
                    <span>{durationString}</span>
                </div>
            </div>
            <PlayButton
                onTogglePlay={() => soundCloudAudio.audio.currentTime = currentTime}
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
