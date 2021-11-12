const Person = ({name, age, hobbies}) => {
    let voteText = age >= 18 ? "Go vote!" : "Go study!";
    
    return (
        <div>
            <p>"Learn some information about this person"</p>
            <ul>
                <li>Name: {name.slice(0,6)}</li>
                <li>Age: {age}</li>
                <ul>
                {hobbies.map(j => <li>{j}</li>)}
                </ul>
                <li>{voteText}</li>
            </ul>
        </div>
    )
}