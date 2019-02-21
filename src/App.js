import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {   
      name: "",
      price: "",
      denomination: "gp",
      type: "Armor",
      rarity: "common",
      attunement: "no",
      slot: "-----",
      desc: "",
      wondrous: false,
      submitted: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDenominationChange = this.handleDenominationChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleRarityChange = this.handleRarityChange.bind(this);
    this.handleAttunementChange = this.handleAttunementChange.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderItemInformation = this.renderItemInformation.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }

  handleDenominationChange(e) {
    this.setState({ denomination: e.target.value });
  }

  handleTypeChange(e) {
    if(e.target.value === "Wondrous item") {
      this.setState({ type: e.target.value, wondrous: true });
    } else {
      this.setState({ type: e.target.value, wondrous: false });
    }
  }

  handleRarityChange(e) {
    this.setState({ rarity: e.target.value });
  }

  handleAttunementChange(e) {
    this.setState({ attunement: e.target.value });
  }

  handleSlotChange(e) {
    this.setState({ slot: e.target.value });
  }

  handleDescChange(e) {
    this.setState({ desc: e.target.value });
  }

  handleSubmit() {
    this.setState({ submitted: true });
  }

  renderItemInformation() {
    let firstLine = `${this.state.type}, ${this.state.rarity}`;
    if (this.state.attunement === "yes") {
      firstLine = `${firstLine} (requires attunement)`;
    }
    let secondLine = `Slot: ${this.state.slot}  Value: ${this.state.price}${this.state.denomination}`;
    const description = `${this.state.desc}`;

    return (
      <div> 
        <h3 className="App-item-header">{this.state.name}</h3>
        <h4 className="App-item-line">{firstLine}</h4>
        <h4 className="App-item-line">{secondLine}</h4>
        <p className="App-item-desc">{description}</p>
      </div>
    );
  }

  render() {
      return (
        <div className="App">
          <body className="App-body">
          <form>
              <div>
                <label>
                  Item name:
                  <textarea value={this.state.name} onChange={this.handleNameChange} />
                </label>
              </div>
              <div>
                <label>
                  Item price:
                  <textarea value={this.state.price} onChange={this.handlepriceChange} />
                </label>
              </div>
              <div>
                <label>
                  Denomination:
                  <input type="radio" value="pp" checked={this.state.denomination === "pp"} onChange={this.handleDenominationChange} />
                  pp
                  <input type="radio" value="gp" checked={this.state.denomination === "gp"} onChange={this.handleDenominationChange} />
                  gp
                  <input type="radio" value="sp" checked={this.state.denomination === "sp"} onChange={this.handleDenominationChange} />
                  sp
                  <input type="radio" value="cp" checked={this.state.denomination === "cp"} onChange={this.handleDenominationChange} />
                  cp
                </label>
              </div>
              <div>
                <label>
                  Item type:
                  <select onChange={this.handleTypeChange} >
                    <option value="Armor">Armor</option>
                    <option value="Potion">Potion</option>
                    <option value="Ring">Ring</option>
                    <option value="Rod">Rod</option>
                    <option value="Scroll">Scroll</option>
                    <option value="Staff">Staff</option>
                    <option value="Wand">Wand</option>
                    <option value="Weapon">Weapon</option>
                    <option value="Wondrous item">Wondrous Item</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Item rarity:
                  <select onChange={this.handleRarityChange}>
                    <option value="common">Common</option>
                    <option value="uncommon">Uncommon</option>
                    <option value="rare">Rare</option>
                    <option value="very rare">Very Rare</option>
                    <option value="legendary">Legendary</option>
                    <option value="artifact">Artifact</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Requires attunement:
                  <input type="radio" value="yes" checked={this.state.attunement === "yes"} onChange={this.handleAttunementChange} />
                  yes
                  <input type="radio" value="no" checked={this.state.attunement === "no"} onChange={this.handleAttunementChange}  />
                  no
                </label>
              </div>
              <div>
              {this.state.wondrous ?  <label>
                  Equipment slot:
                  <select onChange={this.handleSlotChange}>
                    <option value="Head">Head</option>
                    <option value="Eyes">Eyes</option>
                    <option value="Neck">Neck</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Arms & wrists">Arms & Wrists</option>
                    <option value="Hands">Hands</option>
                    <option value="Body">Body</option>
                    <option value="Waist">Waist</option>
                    <option value="Feet">Feet</option>
                    <option value="-----">Other & None</option>
                  </select>
                </label> : null}
              </div>
              <div>
                <label>
                  Item description:
                  <textarea value={this.state.desc} onChange={this.handleDescChange} />
                </label>
              </div>
              <button type="button" onClick={this.handleSubmit}>Create item</button>
            </form>
          </body>
          {this.state.submitted && this.renderItemInformation()}
        </div>
      );
  }
}

export default App;
