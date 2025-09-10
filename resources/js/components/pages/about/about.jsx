import { useEffect, useState } from "react";

function about() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:81/React-App/public/api/data")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <div>
            <h1>About Page</h1>
            <div className="p-3">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.TT_ID}>
                                <td>{item.TT_ID}</td>
                                <td>{item.TT_NAME}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default about;
