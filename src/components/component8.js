import React from 'react'

import PropTypes from 'prop-types'

import './component8.css'

const Component8 = (props) => {
  return (
    <div className="component8-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component8-image"
      />
    </div>
  )
}

Component8.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/image%20%5B12%5D%20%5B1%5D%20%5B3%5D-200h.png',
}

Component8.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component8
