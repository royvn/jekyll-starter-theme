import React from 'react';
import css from "./donation.module.scss";

class Donation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDonationDropdownOpen: false,
      active: 0,
      items: this.props.options
    }
    this.handleDonationDropdown = this.handleDonationDropdown.bind(this);
    this.handleDonationUrl = this.handleDonationUrl.bind(this);
  }

  handleDonationUrl(e) {
    let index = e.target.dataset.index;
    this.setState({
      active: index,
      isDonationDropdownOpen: false
    });
  }

  handleDonationDropdown() {
    this.setState({
      isDonationDropdownOpen: !this.state.isDonationDropdownOpen
    });
  }

  render() {
    return (
      <div className="section section--margin">
        <div className={`container page-spacer`}>
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">

              <div className={`${css.donation}`}>
                <div className={`${css.donation__content}`}>
                  {this.props.title &&
                    <p className={`h2`}>
                      {this.props.title}
                    </p>
                  }
                  {this.props.options &&
                    <p className={`rte rte--lg`}>
                      <span>Selecteer en doneer als blijk van waardering een </span>
                      <span className={`${css.donationDropdown} ${this.state.isDonationDropdownOpen ? css.donationDropdownActive : ''}`}>
                        <span className={`${css.donationDropdownOverlay}`} onClick={this.handleDonationDropdown}></span>
                        <button type="button" className={`${css.donationDropdownSelect}`} onClick={this.handleDonationDropdown}>
                          <span className={`${css.donationDropdownCurrent}`}>
                            {this.state.items[this.state.active].title}
                          </span>
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg>
                          </span>
                        </button>
                        <ul className={`${css.donationDropdownList}`}>
                          {this.state.items.map((option, index) => (
                            <li className={`${css.donationDropdownListItem} ${this.state.active === index ? css.donationDropdownListItemActive : ''} `} key={index}>
                              <button type="button" className={`${css.donationDropdownListButton}`} onClick={this.handleDonationUrl} data-index={index} >
                                {option.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </span>
                      <span> van &euro; {this.state.items[this.state.active].price}.</span>
                    </p>
                  }
                  {this.props.button_url && this.props.options &&
                    <a href={this.props.button_url + '/' + this.state.items[this.state.active].price} target="_blank" rel="noopener noreferrer" className="button button--primary button--lg">
                      &euro;{this.state.items[this.state.active].price} doneren
                    </a>
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Donation;