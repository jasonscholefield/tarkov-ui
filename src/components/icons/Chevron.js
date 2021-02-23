import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'svgs';

export default function Chevron({ size, fill, rotate }) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || '#000000'}
      style={{ transform: `rotate(${rotate || 0}deg)` }}
    >
      <Path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </Svg>
  );
}

Chevron.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000000',
  rotate: 0,
};

Chevron.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  style: PropTypes.object,
  width: PropTypes.number,
  rotate: PropTypes.number,
};
