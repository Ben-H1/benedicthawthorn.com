import Text from '@components/Text';
import { useEffect, useState } from 'react';

const getTime = () => {
    const date = new Date();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let meridiem = 'AM';

    hours === 0 && (hours = 12);

    if (hours > 12) {
        hours = hours % 12;
        meridiem = 'PM';
    }

    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');

    const timeString = `${hoursString}:${minutesString}:${secondsString}`;

    return { timeString, meridiem };
};

const Clock = () => {
    const [timeState, setTimeState] = useState<Record<string, string>>({});

    useEffect(() => {
        setTimeState(getTime());
        const interval = setInterval(() => setTimeState(getTime()), 1000);

        return (() => clearInterval(interval));
    }, []);

    return (
        <div className='flex space-x-2 items-end'>
            <Text.H1>{timeState?.timeString}</Text.H1>
            <Text.H2>{timeState?.meridiem}</Text.H2>
        </div>
    );
};

export default Clock;
