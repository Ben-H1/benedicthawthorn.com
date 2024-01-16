type IconProps = {
    path: string;
};

const Icon = ({ path }: IconProps) => {
    return (
        <img
            src={path}
            className='h-8 w-8'
        />
    );
};

export default Icon;
