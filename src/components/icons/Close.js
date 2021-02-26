import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Polygon } from 'svgs';

export default function Close({ fill, size }) {
  return (
    <Svg width={size || 9} height={size || 9} viewBox="0 0 9 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <Polygon
        fill={fill || '#CCCCDD'}
        fillRule="nonzero"
        transform="translate(4.500000, 4.500000) rotate(-315.000000) translate(-4.500000, -4.500000) "
        points="3.80930233 2.27373675e-13 5.16976744 2.27373675e-13 5.16976744 3.83023256 9 3.83023256 9 5.19069767 5.16976744 5.19069767 5.16976744 9 3.80930233 9 3.80930233 5.19069767 0 5.19069767 0 3.83023256 3.80930233 3.83023256"
      />
    </Svg>
  );
}

Close.defaultProps = {
  width: 9,
  height: 9,
  fill: '#CCCCDD',
};

Close.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  style: PropTypes.object,
  width: PropTypes.number,
};
