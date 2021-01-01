import React from 'react';

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
      <div className="donation container page-width page-spacer">
        <div className="gcs-xs-1 gce-xs-13">
          <div className="donation__content">
            {this.props.title &&
              <p className="donation__title">
                {this.props.title}
              </p>
            }
            {this.props.options &&
              <p className="donation__subtitle">
                <span>Selecteer en doneer als blijk van waardering een </span>
                <span className={`donation-dropdown ${this.state.isDonationDropdownOpen ? 'donation-dropdown--active' : ''}`}>
                  <span className="donation-dropdown-overlay" onClick={this.handleDonationDropdown}></span>
                  <button type="button" className="donation-dropdown-select" onClick={this.handleDonationDropdown}>
                    <span className="donation-dropdown-current">
                      {this.state.items[this.state.active].title}
                    </span>
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg>
                    </span>
                  </button>
                  <ul className="donation-dropdown-list">
                    {this.state.items.map((option, index) => (
                      <li className={`donation-dropdown-list__item ${this.state.active === index ? 'donation-dropdown-list__item--active' : ''} `} key={index}>
                        <button type="button" className="donation-dropdown-list__button" onClick={this.handleDonationUrl} data-index={index} >
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
    );
  }
}

export default Donation;