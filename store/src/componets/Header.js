const Header = ({name}) => {
    return (
        <div className="header">
            <ul className="link-muli">
                <li>Home {name}</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Wish Lish</li>
            </ul>
        </div>
    )
}

export default Header;