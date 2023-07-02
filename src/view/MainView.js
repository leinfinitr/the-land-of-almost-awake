import React, {useState} from 'react';
import "../css/MainView.css";

export const MainView = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleGoToHomePage = () => {
        if (password === "070785") {
            window.location.href = '/home';
        } else {
            setError("密码错误");
        }
    };

    return (
        <div>
            <h1 className={"title"}>不眠大陆</h1>
            <p style={{textAlign: 'center'}}>The Land of Always Awake</p>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <label>
                    密码：
                    <input type="password" value={password} onChange={handlePasswordChange}/>
                </label>
                <button style={{marginTop: '10px'}} onClick={handleGoToHomePage}>
                    开启旅程
                </button>
                {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
            </div>
        </div>
    );
};