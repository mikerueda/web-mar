import React, {Component} from 'react';
import MainHeader from "./components/Header/Header";
import Home from "./components/Home/Home";
import {HOME} from "./config/constants";
import "./style/index.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language:'en',
            currentPage:HOME
        }
    }
    
    render() {
        const {language} = this.state;
        return (
            <div className="web">
               <MainHeader lang={language}/>
               <Home lang={language}/>
            </div>
        );
    }
}

export default App;
