interface IPropsImg {
    img: string;
}
export const Image: React.FC<IPropsImg> = ({ img }) => {
    return <img src={img} alt="icon" className="materialboxed"></img>;
};

interface IPropsBtn {
    text: string;
    className: string
}
export const Button: React.FC<IPropsBtn> = ({ text, className }) => {
    return <button className={className}>{text}</button>;
};

interface IPropsListItem {
    text: string
}
export const ListItem: React.FC<IPropsListItem> = ({text}) => {
    return (
        <li>
            <span>{text}</span>
        </li>
    );
}