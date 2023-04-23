import React from 'react';
import classes from './ProgressCircle.module.scss';

interface ProgressCircleProps {
  percent: number;
}

const circleDiameter = '120';

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percent }) => {
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
            {percent || 0}
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
