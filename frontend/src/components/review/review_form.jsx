import React from 'react';
import './review_form.scss';
import '../coffee/coffee.scss';
import '../coffee_score/coffee_score_form.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // coffee: '',
      text: '',
      rating: '',
      // aroma: '',
      // acidity: '',
      // body: '',
      // flavor: '',
      // aftertaste: '',
      awsLinks: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoInput = this.handlePhotoInput.bind(this);
  }

  componentDidMount() {

  }

  handleChange(field) {
    return e => {
      // 
      this.setState({ [field]: e.target.value })
    }
  }

  handlePhotoInput(e) {
    // e.preventDefault
    // const { user, review } = this.props;

    
  }

  handleSubmit(e) {
    e.preventDefault();
    const { 
      user, shop, createReview, closeModal } = this.props;
    const { 
    //   coffee, aroma, acidity, body, flavor, aftertaste, 
      rating, text
    } = this.state;
    // createCoffeeScore({
    //   user,
    //   // shop, // REPLACE WITH SHOP ID
    //   coffee,
    //   aroma,
    //   acidity,
    //   body,
    //   flavor,
    //   aftertaste
    // })
    debugger
    createReview({
      user,
      shop,
      rating,
      text
    }).then(() => closeModal());
  }

  render() {
    // const { coffees } = this.props;
    // const { shop } = this.props;
    const { 
      text, rating, 
      // coffee, aroma, acidity, body, flavor, aftertaste 
    } = this.state;
    // if (!coffees) return null;
    return (
      <div className='review-form-container'>
        {/* <h1 className='review-form-title'></h1> */}
        <form onSubmit={this.handleSubmit} className='review-form'>
          
          {/* <FormControl>
            <InputLabel id='coffee'>Coffee</InputLabel>
            <Select
              className='review-input'
              labelId="coffee-input-label"
              value={coffee}
              onChange={this.handleChange('coffee')}
            >
              {coffees.map(coffee => {
                return <MenuItem value={coffee._id}>{coffee.name}</MenuItem>
              })}
            </Select>
          </FormControl> */}
          
          {/* <FormControl>
            <InputLabel id="aroma-input-label">Aroma</InputLabel>
            <Select
              className='review-input'
              labelId="aroma-input-label"
              value={aroma}
              onChange={this.handleChange('aroma')}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl>
            <InputLabel id="acidity-input-label">Acidity</InputLabel>
            <Select
              className='review-input'
              labelId="acidity-input-label"
              value={acidity}
              onChange={this.handleChange('acidity')}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
          </FormControl>
        
          <FormControl>
            <InputLabel id="body-input-label">Body</InputLabel>
            <Select
              className='review-input'
              labelId="body-input-label"
              value={body}
              onChange={this.handleChange('body')}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
          </FormControl>
         
          <FormControl>
            <InputLabel id="flavor-input-label">Flavor</InputLabel>
            <Select
              className='review-input'
              labelId="flavor-input-label"
              value={flavor}
              onChange={this.handleChange('flavor')}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl>
            <InputLabel id="aftertaste-input-label">Aftertaste</InputLabel>
            <Select
              className='review-input'
              labelId="aftertaste-input-label"
              value={aftertaste}
              onChange={this.handleChange('aftertaste')}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
          </FormControl> */}

          <FormControl>
            <InputLabel id="rating-input-label">Shop Rating</InputLabel>
            <Select
              className='review-input'
              labelId="rating-input-label"
              value={rating}
              onChange={this.handleChange('rating')}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
          </FormControl>

          {/* <label htmlFor="text" className='text-input-label'>Shop Review</label> */}
          <textarea 
            className='text-input' 
            id="text" 
            value={text} 
            onChange={this.handleChange('text')}
            rows='5'
            cols='4'
            placeholder='Shop Review'
          />
          
          {/* PHOTO UPLOAD PLACEHOLDER */}
          <div className="upload-photo">
            <label htmlFor="photo">Upload Photo</label>
            <input type="file" multiple onChange={this.handlePhotoInput}/>
          </div>
          <button className='review-submit-btn'>Submit Review</button>
        </form>


      </div>
    )
  }

}