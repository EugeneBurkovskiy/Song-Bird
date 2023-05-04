import React from 'react';

import classes from './ProgressCircle.module.scss';

interface ProgressCircleProps {
  percent: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percent }) => {
  const circleDiameter = '120';
  return (
    <div className={classes['progress-bar__content']}>
      <div className={classes['progress-bar__wrapper']}>
        <svg>
          <circle cx={circleDiameter} cy={circleDiameter} r={circleDiameter} />
          <circle
            cx={circleDiameter}
            cy={circleDiameter}
            r={circleDiameter}
            style={{
              strokeDashoffset: `calc(750 - (750 * ${percent})/100)`,
            }}
          />
        </svg>
        <div className={classes['progress-bar__number']}>
          <div className={classes['progress-bar__title']}>
            {percent}
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
