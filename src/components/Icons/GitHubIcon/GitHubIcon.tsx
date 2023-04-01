import React from 'react';
import classes from './GitHubIcon.module.scss';

export default function GitHubIcon() {
  return (
    <a href="https://github.com/EugeneBurkovskiy" target={'blank'} className={classes.link}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="50"
        height="50"
        viewBox="0,0,256,256"
      >
        <g
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
        >
          <g transform="translate(0,3.15609) scale(10.66667,10.66667)">
            <path d="M12,0c-6.626,0 -12,5.373 -12,12c0,5.302 3.438,9.8 8.207,11.387c0.599,0.111 0.793,-0.261 0.793,-0.577v-2.234c-3.338,0.726 -4.033,-1.416 -4.033,-1.416c-0.546,-1.387 -1.333,-1.756 -1.333,-1.756c-1.089,-0.745 0.083,-0.729 0.083,-0.729c1.205,0.084 1.839,1.237 1.839,1.237c1.07,1.834 2.807,1.304 3.492,0.997c0.107,-0.775 0.418,-1.305 0.762,-1.604c-2.665,-0.305 -5.467,-1.334 -5.467,-5.931c0,-1.311 0.469,-2.381 1.236,-3.221c-0.124,-0.303 -0.535,-1.524 0.117,-3.176c0,0 1.008,-0.322 3.301,1.23c0.957,-0.266 1.983,-0.399 3.003,-0.404c1.02,0.005 2.047,0.138 3.006,0.404c2.291,-1.552 3.297,-1.23 3.297,-1.23c0.653,1.653 0.242,2.874 0.118,3.176c0.77,0.84 1.235,1.911 1.235,3.221c0,4.609 -2.807,5.624 -5.479,5.921c0.43,0.372 0.823,1.102 0.823,2.222v3.293c0,0.319 0.192,0.694 0.801,0.576c4.765,-1.589 8.199,-6.086 8.199,-11.386c0,-6.627 -5.373,-12 -12,-12z"></path>
          </g>
        </g>
      </svg>
    </a>
  );
}