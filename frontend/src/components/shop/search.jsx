import React from 'react';
import { Link } from 'react-router-dom';
import { throttle, debounce } from 'throttle-debounce';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fragment: '',
            status: false
        }
        this.fetchSearchResultsDebounced = debounce(200, this.props.props.fetchSearchResults);
    }

    update() {
      return e => this.setState({
          fragment: e.currentTarget.value,
          status: true
      }, () => this.fetchSearchResultsDebounced(this.state.fragment)
      );
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

    renderIndividualResult(result, photoRef, i) {
        return (
            <Link to={{
                pathname: `/shops/${result.place_id}`
            }}
                className='result-shop' key={i}>
                <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&sensor=false&key=AIzaSyDvUSqdDw6TdxHjNZudz295QAu9ZWjYm0k`}></img>
                <div className='result-shop-name'>{result.name.slice(0, 50)}</div>
                <div className='result-shop-address'>{this.formatAddress(result.formatted_address)}</div>
            </Link>
        )
    }

    renderResults() {
        
        if ((this.props.props.searchResults === undefined || this.props.props.searchResults.length === 0) && this.state.fragment.length > 0) { return <div className='search-result-error'>We were unable to find any results for your search.</div> }

        if (this.props.props.searchResults) {
            return (
                <div>
                    <div>Shops</div>
                        {this.props.props.searchResults.slice(0, 6).map((result, i) => {
                            let photoRef = null;
                            if (result.photos) {
                                photoRef = result.photos[0].photo_reference;
                            }
                    
                            return this.renderIndividualResult(result, photoRef, i);

                            // return (
                            //     <Link to={{
                            //         pathname: `/shops/${result.place_id}`
                            //     }}
                            //         className='result-shop' key={i}>
                            //         <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&sensor=false&key=AIzaSyDvUSqdDw6TdxHjNZudz295QAu9ZWjYm0k`}></img>
                            //         <div className='result-shop-name'>{result.name.slice(0, 50)}</div>
                            //         <div className='result-shop-address'>{this.formatAddress(result.formatted_address)}</div>
                            //     </Link>
                            // )
                        
                        })}
                </div>
            )
        }
    }

    render() {


        return (
            <div className='sub-nav-2'>
                {/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRZAAAA-RRkg_wP7iiMrVNkgol83U1qVhltljGcaJcbSNNzA77akR-CRjP1f1P2KcW_YN58ZfU_5w4o2PMJ-l4gBAR5rF8cIkEMJ1hueIybrmSonJDnwxeYbQkS-HtNPdvm7JIWEhB_hnOgzxMN_R0OwcdbrHT7GhSo2f2eHQHs7NwFN7xVOeAWzZ8lpg&sensor=false&key=AIzaSyDvUSqdDw6TdxHjNZudz295QAu9ZWjYm0k`}/> */}
                {this.searchField()}
                <div className={this.state.fragment !== '' ? 'results-box' : 'results-box-hidden'}>
                    {/* <div className={(this.props.props.searchResults === undefined || this.props.props.searchResults.length === 0) ?
                        'results-box-title-hidden' : 'results-box-title'}>Shops</div> */}
                    <div className='results-box-body'>
                        {console.log('inside render')}
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