import React from 'react';
import './coffee_score_form.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class CoffeeScoreForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      aroma: '',
      acidity: '',
      body: '',
      flavor: '',
      aftertaste: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, coffee, createCoffeeScore, closeModal } = this.props;
    const { aroma, acidity, body, flavor, aftertaste } = this.state;
    createCoffeeScore({ user, coffee, aroma, acidity, body, flavor, aftertaste })
      .then(() => closeModal());
    // closeModal();
  }

  render() {
    const { coffee } = this.props;
    const { aroma, acidity, body, flavor, aftertaste } = this.state;
    if (!coffee) return null;
    return (
      <div className='score-form-container'>
        <form onSubmit={this.handleSubmit} className='score-form'>

          <FormControl>
            <InputLabel id="aroma-input-label">Aroma</InputLabel>
            <Select
              className='score-input'
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
              className='score-input'
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
              className='score-input'
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
              className='score-input'
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
              className='score-input'
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
          </FormControl>

          <button className='score-submit-btn'>SUBMIT SCORE</button>
        </form>

      </div>


    )
  }

}