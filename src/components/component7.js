import React from 'react'

import PropTypes from 'prop-types'

import './component7.css'

const Component7 = (props) => {
  return (
    <div className={`component7-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component7-image"
      />
    </div>
  )
}

Component7.defaultProps = {
  image_src: '/playground_assets/launch%20app%20%5B2%5D-200h.png',
  image_alt: 'image',
  rootClassName: '',
}

Component7.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component7
