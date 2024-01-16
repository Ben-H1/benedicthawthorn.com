type IconProps = {
    path: string;
};

const Icon = ({ path }: IconProps) => {
    return (
        <div className='h-8 w-8 flex items-center justify-center'>
            <img src={path} />
        </div>
    );
};

export default Icon;
