import React from 'react'

import PropTypes from 'prop-types'

import './component12.css'

const Component12 = (props) => {
  return (
    <div className="component12-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component12-image"
      />
    </div>
  )
}

Component12.defaultProps = {
  image_alt: 'image',
  image_src:
    '/playground_assets/image%20%5B10%5D%20%5B1%5D%20%5B1%5D%20%5B4%5D-200h.png',
}

Component12.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component12
