import {useEffect, useState} from "react";

const API_URL = 'https://api.github.com/users/anhtbok92';

const GetGithubInfo = () => {
    const [user, setUser] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Giống componentDidMount
        // Thực hiện call API để update cho component sau lần render đầu tiên
        fetch(API_URL)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(response.statusText);
                }
            })
            .then((data) => {
                console.log('user github info', data);
                setUser(data);
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
                setIsError(true);
        });
    }, []);

    // Cach 2: Check dieu kien render bang cau lenh if
    if (isLoading) {
        return (
            <div>
                <h1>Loading dataa......</h1>
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                <h1>Error page, please try again !!!</h1>
            </div>
        )
    }

    return (
        <>
            {/*// cach 1: check render bang tenary operator*/}
            {/*{isLoading ? <h1>Loading data, please wait...</h1> : null}*/}
            {!isError && !isLoading && user && (
                <>
                    <p>Tên tài khoản: {user.login}</p>
                    <p>Link tài khoản: {user.url}</p>
                    <p>Số lượng repository : {user.public_repos}</p>
                    <p>Số người theo dõi: {user.followers}</p>
                </>
            )}
            {/*{isError && <h1>Có lỗi xảy ra, vui lòng thử lại sau</h1>}*/}
        </>
    )
}

export default GetGithubInfo;