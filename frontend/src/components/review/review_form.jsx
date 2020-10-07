import React from 'react';
import './review_form.scss';

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

  componentDidMount() {

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
    const { 
      user, createCoffeeScore, 
      createReview } = this.props;
    const { 
      coffee, aroma, acidity, body, flavor, aftertaste, 
      rating, text
    } = this.state;
    createCoffeeScore({
      user,
      // shop, // REPLACE WITH SHOP ID
      coffee,
      aroma,
      acidity,
      body,
      flavor,
      aftertaste
    })
    createReview({
      rating,
      text
    })
  }

  render() {
    const { coffees } = this.props;
    const { 
      coffee, text, rating, aroma, acidity, body, flavor, aftertaste 
    } = this.state;
    if (!coffees) return null;
    // 
    return (
      <div className='review-form-container'>
        <h1 className='review-form-title'>Coffee Review Form</h1>
        <form onSubmit={this.handleSubmit} className='review-form'>
          <label htmlFor='coffee' className='coffee-input-label'>Coffee</label>
          <select className='coffee-input' id="coffee" value={coffee} onChange={this.handleChange('coffee')}>
            {coffees.map(coffee => {
              return <option key={coffee._id} value={coffee._id}>{coffee.name}</option>
            })}
          </select>

          <label htmlFor="aroma" className='aroma-input-label'>Aroma</label>
          <select className='aroma-input' id="aroma" value={aroma} onChange={this.handleChange('aroma')}>
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

          <label htmlFor="acidity" className='acidity-input-label'>Acidity</label>
          <select className='acidity-input' id="acidity" value={acidity} onChange={this.handleChange('acidity')}>
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

          <label htmlFor="body" className='body-input-label'>Body</label>
          <select className='body-input' id="body" value={body} onChange={this.handleChange('body')}>
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

          <label htmlFor="flavor" className='flavor-input-label'>Flavor</label>
          <select className='flavor-input' id="flavor" value={flavor} onChange={this.handleChange('flavor')}>
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

          <label htmlFor="aftertaste" className='aftertaste-input-label'>Aftertaste</label>
          <select className='aftertaste-input' id="aftertaste" value={aftertaste} onChange={this.handleChange('aftertaste')}>
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

          <label htmlFor="rating" className='rating-input-label'>Shop Rating</label>
          <select className='rating-input' id="rating" value={rating} onChange={this.handleChange('rating')}>
            <option disabled>Please select rating</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <label htmlFor="text" className='text-input-label'>Shop Review</label>
          <textarea 
            className='text-input' 
            id="text" 
            value={text} 
            onChange={this.handleChange('text')}
            rows='5'
            cols='4'
            
          />
          
          {/* PHOTO UPLOAD PLACEHOLDER */}
          <label htmlFor="photo">Upload Photo(s)</label>
          <input type="file" multiple onChange={this.handlePhotoInput}/>

          <button className='review-submit-btn'>Submit Review</button>
        </form>


      </div>
    )
  }

}