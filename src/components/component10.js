import React from 'react'

import PropTypes from 'prop-types'

import './component10.css'

const Component10 = (props) => {
  return (
    <div className="component10-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component10-image"
      />
    </div>
  )
}

Component10.defaultProps = {
  image_src:
    '/playground_assets/image%20%5B9%5D%20%5B1%5D%20%5B1%5D%20%5B2%5D-200h.png',
  image_alt: 'image',
}

Component10.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component10
