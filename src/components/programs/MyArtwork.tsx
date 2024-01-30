import Text from '@components/Text';
import Button from '@components/form/Button';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@util/css';
import { useState } from 'react';

type Artwork = {
    title: string;
    description?: string;
    path: string;
};

const MyArtwork = () => {
    const [activeArtworkIndex, setActiveArtworkIndex] = useState(0);

    const artworks: Artwork[] = [
        {
            title: 'Gamma 2',
            description: 'A quick drawing of Gamma 2 from Dragon Ball Super: Super Hero, done using MediBang Jump Paint.',
            path: 'images/artwork/Gamma 2.png'
        }
    ];

    const decrementArtworkIndex = () => {
        let newIndex = activeArtworkIndex - 1;
        newIndex < 0 && (newIndex = artworks.length - 1);
        setActiveArtworkIndex(newIndex);
    };
    
    const incrementArtworkIndex = () => {
        let newIndex = activeArtworkIndex + 1;
        newIndex >= artworks.length && (newIndex = 0);
        setActiveArtworkIndex(newIndex);
    };

    return (
        <div className='flex flex-col min-h-full'>
            <div className=' h-fit flex justify-center items-center shrink-0 flex-col text-center'>
                <Text.H1>{artworks[activeArtworkIndex].title}</Text.H1>
                {artworks[activeArtworkIndex].description && (
                    <Text.Body>{artworks[activeArtworkIndex].description}</Text.Body>
                )}
            </div>
            <div className='flex-1 flex'>
                <div className='flex items-center'>
                    <Button
                        onClick={decrementArtworkIndex}
                        className='py-4'
                    >
                        <FontAwesomeIcon
                            icon={faCaretLeft}
                            size='2x'
                        />
                    </Button>
                </div>
                <div className='flex-1 p-2'>
                    <div className='h-full w-full relative'>
                        <img
                            src={artworks[activeArtworkIndex].path}
                            className='object-contain absolute h-full w-full'
                        />
                    </div>
                </div>
                <div className='flex items-center'>
                    <Button
                        onClick={incrementArtworkIndex}
                        className='py-4'
                    >
                        <FontAwesomeIcon
                            icon={faCaretRight}
                            size='2x'
                        />
                    </Button>
                </div>
            </div>
            <hr className='mt-1 mb-3' />
            <div className='h-fit shrink-0 scrollbar outline outline-1 overflow-x-auto'>
                <div className='h-24 flex space-x-1 p-1'>
                    {artworks.map((artwork, i) => (
                        <img
                            src={artwork.path}
                            onClick={() => setActiveArtworkIndex(i)}
                            className={cn(
                                'h-full last:pr-1',
                                i === activeArtworkIndex && 'outline-blue-500 -outline-offset-4 outline-4 outline'
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyArtwork;
