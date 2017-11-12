import React, {Component} from 'react';
import ReactDom from 'react-dom';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: "" };
    }

    render() {
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange={ (event) => this.setState({ term: event.target.value }) } type="text"/> 
            </div>
        )
    }

    /*onInputChange(event) {
        console.log(event.target.value);
    }*/
}

export default SearchBar;

