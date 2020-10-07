import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            fragment: '',
            status: false
        }
    }

    update() {
        return e => this.setState({fragment: e.currentTarget.value,
                                    status: true}, () => this.props.fetchSearchResults(this.state.fragment))
    }

    searchField() {
        return (
            <div>
                <input placeholder="Search" type="text"
                value={this.state.fragment}
                onChange={this.update()} />
            </div>
        )
    }

    returnResults() {
        if (this.props.searchResults === undefined || this.props.searchResults.length === 0) { 
            return <div className='search-result-error'>We were unable to find any results for your search.</div> }
        
        return this.props.searchResults.map((result, i) => {
            return (
                <Link to={{
                    pathname:_____,
                    state: _____,
                    }}>
                    <div> _____</div>
                </Link>
            )
        })
    }

    render() {
        return(
            <div>
                {this.searchField()}
                <div className={this.state.fragment !== '' ? 'results-box' : 'results-box-hidden'}>
                    <div className={(this.props.searchResults === undefined || this.props.searchResults.length === 0) ?
                        'results-box-title-hidden' : 'results-box-title'}>Coffee Shops</div>
                    <div className='results-box-body'>
                        {this.renderResults()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;