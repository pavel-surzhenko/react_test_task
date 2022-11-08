interface IProps {
    text: string;
    className: string
}

export const Button: React.FC<IProps> = ({ text, className }) => {
    return <button className={className}>{text}</button>;
};
