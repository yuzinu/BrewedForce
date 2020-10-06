import React from 'react';
import './review_form.css';

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coffee: '',
      text: '',
      rating: 5,
      aroma: 10,
      acidity: 10,
      body: 10,
      flavor: 10,
      aftertaste: 10,
      awsLinks: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoInput = this.handlePhotoInput.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handlePhotoInput(e) {
    // convert photo(s) into aws links
    // push links as strings into this.state.awsLinks
  }

  handleSubmit(e) {
    e.preventDefault();
    // SUBMIT REVIEW FUNCTION
  }

  render() {
    const { 
      coffee, text, rating, aroma, acidity, body, flavor, aftertaste 
    } = this.state;
    return (
      <div>
        <h1>Review Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='coffee'>Coffee</label>
          <input type="text" id='coffee' value={coffee} onChange={this.handleChange('coffee')}/>

          <label htmlFor="rating">Rating</label>
          <select id="rating" value={rating} onChange={this.handleChange('rating')}>
            <option disabled>Please select rating</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <label htmlFor="aroma">Aroma</label>
          <select id="aroma" value={aroma} onChange={this.handleChange('aroma')}>
            <option disabled>Please select aroma</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <label htmlFor="acidity">Acidity</label>
          <select id="acidity" value={acidity} onChange={this.handleChange('acidity')}>
            <option disabled>Please select acidity</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <label htmlFor="body">Body</label>
          <select id="body" value={body} onChange={this.handleChange('body')}>
            <option disabled>Please select body</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <label htmlFor="flavor">Flavor</label>
          <select id="flavor" value={flavor} onChange={this.handleChange('flavor')}>
            <option disabled>Please select flavor</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <label htmlFor="aftertaste">Aftertaste</label>
          <select id="aftertaste" value={aftertaste} onChange={this.handleChange('aftertaste')}>
            <option disabled>Please select aftertaste</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <label htmlFor="text">Review</label>
          <textarea id="text" value={text} onChange={this.handleChange('text')}/>
          
          {/* PHOTO UPLOAD PLACEHOLDER */}
          <label htmlFor="photo">Upload Photo</label>
          <input type="file" multiple onChange={this.handlePhotoInput}/>

          <button>Submit Review</button>
        </form>


      </div>
    )
  }

}