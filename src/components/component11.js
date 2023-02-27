import React from 'react'

import PropTypes from 'prop-types'

import './component11.css'

const Component11 = (props) => {
  return (
    <div className="component11-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component11-image"
      />
    </div>
  )
}

Component11.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/discord%20icon%20%5B3%5D-200h.png',
}

Component11.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component11
