import "./LinkButton.css"

const LinkButton = (props) => {
    return (
        <a className="link-button" href={props.href}>{props.name}</a>
    )
}

export default LinkButton;