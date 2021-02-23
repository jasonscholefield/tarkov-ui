import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'svgs';

export default function Search({ size, fill }) {
  return (
    <Svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || '#ffffff'}
    >
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <Path
          d="M11.9626724,10.5107797 C13.9964167,7.71907917 13.540198,3.83264871 10.9152268,1.58781357 C8.29025568,-0.657021561 4.38007118,-0.504672244 1.93772315,1.9375967 C-0.504624884,4.37986564 -0.657066452,8.29001084 1.58772822,10.9150102 C3.83252289,13.5400095 7.7189783,13.9963143 10.5107516,11.9626534 L14.4306379,15.8824808 C14.5873425,16.0391772 14.8414052,16.0391725 14.9981039,15.8824701 L15.8824947,14.9979702 C16.0391774,14.8412754 16.0391671,14.5872341 15.8824716,14.430552 L11.9626724,10.5107797 Z M6.54550142,11.6363636 C4.48645033,11.6363636 2.63015351,10.3959996 1.84219975,8.49367991 C1.05424598,6.5913602 1.48980937,4.40170322 2.94578728,2.94574315 C4.4017652,1.48978308 6.59142751,1.05424653 8.49373756,1.84222361 C10.3960476,2.63020069 11.6363636,4.48651272 11.6363636,6.54556381 C11.6331315,9.35581939 9.35575703,11.6331659 6.54550142,11.6363636 Z"
          fill-rule="nonzero"
          fill={fill || '#ffffff'}
        />
      </G>
    </Svg>
  );
}

Search.defaultProps = {
  width: 16,
  height: 16,
  fill: '#ffffff',
};

Search.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  style: PropTypes.object,
  width: PropTypes.number,
};
