import React from 'react';
import Clock from "./Components/Clock";
import Footer from "./Components/Footer";

class App extends React.Component {
    render() {
        return (
            <>
                <Clock/>
                <Footer/>
            </>
        );
    }
}

export default App;
