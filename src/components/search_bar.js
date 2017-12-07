
import React, { Component } from 'react';


// Define a new class called SearchBar that has access to all the functions in a class called react.component
class SearchBar extends Component {

    // this is how we initialize class based state
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return <input onChange={event => this.setState({ term: event.target.value })} />;
    }

    

}

export default SearchBar;