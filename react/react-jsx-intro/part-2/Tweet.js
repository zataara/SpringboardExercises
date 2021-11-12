const Tweet = ({username, name, date, message}) => (
    <div>
        <ul>
            <li>{username}</li>
            <li>{name}</li>
            <li>{date}</li>
            <li>{message}</li>
        </ul>
    </div>
)