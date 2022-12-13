import React from 'react'
import ExternaLinkIcon from '../components/ExternaLinkIcon'

const FooterSection = () => {
  return (
    <footer>
        <div className="socialmedia">
          <ExternaLinkIcon link="http://facebook.com"  icon="fa-brands fa-facebook-f"/>
          <ExternaLinkIcon link="http://instagram.com"  icon="fa-brands fa-instagram"/>
          <ExternaLinkIcon link="http://twitter.com" icon="fa-brands fa-twitter"/>
          <ExternaLinkIcon link="http://google.com"  icon="fa-brands fa-google"/>
          <ExternaLinkIcon link="http://linkedin.com" icon="fa-brands fa-linkedin"/>

          {/* <a href="http://facebook.com" target="blank"><i className="fa-brands fa-facebook-f"></i></a> */}
        </div>
        <div>@ 2022 Fixxo. All Rights Reserved</div>
    </footer>
  )
}

export default FooterSection