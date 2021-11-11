import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Breadcrumb = (props) => {
  return (
    <div style={{ backgroundColor: '#f5f5f7' }}>
      <div className="mx-auto max-w-screen-lg px-5 pt-1 -mb-5">
        <Breadcrumbs separator={<SeperatorIcon />} aria-label="breadcrumb">
          <Link to="/">
            <AppleIcon />
          </Link>
          {!!props.breadcrumb &&
            props.breadcrumb.map((item, i) => (
              <span key={i} className="text-sm text-gray-500">
                {item}
              </span>
            ))}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Breadcrumb;

const AppleIcon = () => {
  return (
    <svg height="44" viewBox="0 0 14 44" width="14" style={{ fill: '#6b7280' }}>
      <path d="m13.0729 17.5214c-.093.0723-1.7248.9915-1.7248 3.0364 0 2.3651 2.0759 3.2017 2.1379 3.2223-.0103.0516-.3305 1.1464-1.0948 2.2618-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6835-.9089-2.4787-2.0243c-.9192-1.3117-1.6628-3.3463-1.6628-5.2776 0-3.0984 2.014-4.7406 3.9969-4.7406 1.0535 0 1.9313.692 2.5923.692.63 0 1.6112-.7333 2.8092-.7333.4545.0001 2.0864.0415 3.1605 1.5803zm-3.7284-2.8918c.4957-.5887.8469-1.4046.8469-2.2205 0-.1136-.0103-.2272-.031-.3202-.8056.031-1.7661.5371-2.3445 1.2084-.4544.5164-.8779 1.3323-.8779 2.1586 0 .1239.0207.2479.031.2892.0516.0103.1343.0207.2169.0207.723-.0001 1.6318-.4855 2.1586-1.1362z" />
    </svg>
  );
};

const SeperatorIcon = () => {
  return (
    <svg height="18" viewBox="0 0 8 18" width="8" style={{ fill: '#d6d6d6' }}>
      <path d="M1.29,0.98L7.5,9l-6.21,8.01l-0.68-0.54L6.42,9l-5.8-7.49L1.29,0.98z" />
    </svg>
  );
};
