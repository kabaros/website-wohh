import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo_small.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-link has-text-white-ter">

        <div className="content has-text-centered has-background-link has-text-white-ter">
          <div className="container has-background-link has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">

              <div className="column is-three-fifths is-offset-one-fifth">
                <div className="content has-text-centered">
                  <img
                    src={logo}
                    alt=""
                    style={{ width: '14em', height: '10em' }}
                  />
                </div>
                Project Rebuild is a trading name of Wings of Hope for Homeland <br />
                registered in England & Wales number 12938186. <br />
                60 Bell Street, London NW1 6SP , <br />
                UK Tel +447411974831<br />
                email: projectrebuild@mail.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
