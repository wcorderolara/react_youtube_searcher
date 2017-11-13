import React, {Component} from 'react';
import ReactDom from 'react-dom';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: "" };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={ (event) => this.onInputChange(event.target.value) } type="text"/> 
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

