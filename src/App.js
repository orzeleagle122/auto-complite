import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getUsers, getUsersAction} from "./redux/slices/usersSlice";
import {useEffect, useState} from "react";

function App() {

    const users = useSelector(getUsers);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getUsersAction())
            .finally(() => setIsLoading(false));
    }, [])

    const filteredUsers = users.filter(user => {
        if (inputValue.length > 0) return user.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    if (isLoading) return "Loading users data...";

    return (
        <div className="App">
            <input
                list="users"
                value={inputValue}
                onChange={handleChange}
                placeholder={`Search users...`}
                autoComplete="off"
            />
            <datalist id="users">
                {filteredUsers.map((user) => (
                    <option key={user.id}>{user.name}</option>
                ))}
            </datalist>


        </div>
    );
}

export default App;
