import React from "react";
import "./App.css";
import axios from "axios"; // uimport axios
class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
 
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        axios.get(
                "http://localhost:8080/employee/getEmployees"
            )
            .then((res) => {
                this.setState({
                    items: res.data,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
            <div className="App">
                <h1 className="geeks">GeeksforGeeks</h1>
                <h3>Fetch data from an api in react</h3>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                            <div>
                                    <strong>
                                        {"User_Id: "}
                                    </strong>
                                    {item.id},
                                </div>
                                <div>
                                    <strong>
                                        {"First_Name: "}
                                    </strong>
                                    {item.firstName},
                                </div>
                                <div>
                                    Last_Name: {item.lastName},
                                </div>
                                <div>
                                    User_Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default App;