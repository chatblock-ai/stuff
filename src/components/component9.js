import React from 'react'

import PropTypes from 'prop-types'

import './component9.css'

const Component9 = (props) => {
  return (
    <div className="component9-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component9-image"
      />
    </div>
  )
}

Component9.defaultProps = {
  image_src: '/playground_assets/image%20%5B10%5D%20%5B1%5D%20%5B3%5D-200h.png',
  image_alt: 'image',
}

Component9.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component9
