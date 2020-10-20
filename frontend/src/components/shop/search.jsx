import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fragment: '',
            status: false
        }
    }

    update() {

        return e => this.setState({
            fragment: e.currentTarget.value,
            status: true
        }, () => this.props.props.fetchSearchResults(this.state.fragment))

    }


    searchField() {
        return (
            <div className='search-bar'>
                <input placeholder="Search" type="text"
                    value={this.state.fragment}
                    onChange={this.update()}
                    className={this.state.fragment === '' ? 'search-input' : 'search-input-open'} />
            </div>
        )
    }

    formatAddress(address) {
        address = address.split(",");
        return address.slice(0,3).join(',')

    }

    renderResults() {
        debugger
        if ((this.props.props.searchResults === undefined || this.props.props.searchResults.length === 0) && this.state.fragment.length > 0) { return <div className='search-result-error'>We were unable to find any results for your search.</div> }

        if (this.props.props.searchResults) {
        
            return (
                <div>
                    <div>Shops</div>
                        {this.props.props.searchResults.map((result, i) => {

                            return (
                                <Link to={{
                                    pathname: `/shops/${result.place_id}`
                                }}
                                    className='result-shop' key={i}>
                                    <photo>{this.props.props.fetchSearchPhoto(result.photos[0].photo_reference)}</photo>
                                    <div className='result-shop-name'>{result.name.slice(0, 50)}</div>
                                    <div className='result-shop-address'>{this.formatAddress(result.formatted_address)}</div>
                                </Link>
                            )
                        })}
                </div>
            )
        }
    }

    render() {


        return (
            <div className='sub-nav-2'>
                {this.searchField()}
                <div className={this.state.fragment !== '' ? 'results-box' : 'results-box-hidden'}>
                    {/* <div className={(this.props.props.searchResults === undefined || this.props.props.searchResults.length === 0) ?
                        'results-box-title-hidden' : 'results-box-title'}>Shops</div> */}
                    <div className='results-box-body'>
                        {this.renderResults()}
                    </div>

                </div>

                <div>

                </div>
            </div>
        )
    }
}

export default SearchBar;