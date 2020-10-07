import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainView from "@/components/MainView/MainView";
import {DefaultRoute} from "@/components/DefaultRoute/DefaultRoute";
import LoginPage from "@/components/LoginPage/LoginPage";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <DefaultRoute exact path="/" component={MainView}/>
                        <Route path="/login" component={LoginPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export {App};