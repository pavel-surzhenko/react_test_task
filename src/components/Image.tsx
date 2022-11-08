interface IProps {
    img: string;
}

export const Image: React.FC<IProps> = ({ img }) => {
    return <img src={img} alt="icon"></img>;
};
