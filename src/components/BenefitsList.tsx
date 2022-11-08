interface IProps {
    text: string
}

export const List: React.FC<IProps> = ({text}) => {
    return (
        <li>
            <span>{text}</span>
        </li>
    );
};
