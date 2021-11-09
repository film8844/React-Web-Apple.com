import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import { useStore } from '../../store/store';
import AppleButton from '../AppleButton';

const Bag = () => {
  const store = useStore();
  const { bag } = store;

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <button className="block" onClick={handleClick}>
        <BagIcon />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        elevation={0}
      >
        <div className="bag-popover-body">
          <BagItems bag={bag} />
          <AppleButton className="w-full">ชำระเงิน</AppleButton>
          <div className="my-3 divide-y divide-gray-300">
            <Link to="/bag">
              <div className="flex py-2 text-sm text-apple-link-blue hover:underline">
                <BlueBagIcon />
                <p className="ml-2">ถุง{!!bag ? ` (${bag.length})` : ''}</p>
              </div>
            </Link>
            <div className="flex py-2 text-sm text-apple-link-blue hover:underline">
              <HeartIcon />
              <p className="ml-2">รายการโปรด</p>
            </div>
            <div className="flex py-2 text-sm text-apple-link-blue hover:underline">
              <BoxIcon />
              <p className="ml-2">คำสั่งซื้อ</p>
            </div>
            <div className="flex py-2 text-sm text-apple-link-blue hover:underline">
              <SettingIcon />
              <p className="ml-2">บัญชี</p>
            </div>
            <div className="flex py-2 text-sm text-apple-link-blue hover:underline">
              <UserIcon />
              <p className="ml-2">ลงชื่อเข้าใช้</p>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
};

const BagItems = (props) => {
  const { bag } = props;
  if (bag.length > 0) {
    let minimizedBag = bag;
    if (bag.length > 3) {
      minimizedBag = minimizedBag.slice(0, 3);
    }
    return (
      <div className="divide-y divide-gray-300">
        {minimizedBag.map((item) => (
          <div key={item.id} className="py-5 grid grid-cols-4 gap-2">
            <div>
              <img src={item.image} alt=""/>
            </div>
            <div className="col-span-3 flex items-center">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-center py-8 text-sm text-gray-500">
        <p>ถุงของคุณว่างเปล่า</p>
      </div>
    );
  }
};

export default Bag;

const BagIcon = () => {
  return (
    <svg height="44" viewBox="0 0 13 44" width="13" className="global-nav-icon">
      <path d="m12 25.9c0 .6-.5 1.1-1.1 1.1h-8.8c-.6 0-1.1-.5-1.1-1.1v-7.9c0-.5.5-1 1.1-1h8.9c.6 0 1.1.5 1.1 1.1v7.8zm-5.5-11.9c1.2 0 2.1.9 2.3 2h-4.6c.2-1.1 1.1-2 2.3-2zm4.4 2h-1.1c-.2-1.7-1.6-3-3.3-3s-3.1 1.3-3.3 3h-1.1c-1.2 0-2.1.9-2.1 2.1v7.9c0 1.1.9 2 2.1 2h8.9c1.1 0 2.1-.9 2.1-2.1v-7.9c-.1-1.1-1-2-2.2-2z" />
    </svg>
  );
};

const BlueBagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <g>
        <rect width="21" height="21" fill="none" />
        <path
          d="M14.934,5.017H13.828A3.413,3.413,0,0,0,10.5,2,3.413,3.413,0,0,0,7.172,5.017H6.066A2.058,2.058,0,0,0,4.011,7.072v7.865a2.058,2.058,0,0,0,2.056,2.055h8.867a2.058,2.058,0,0,0,2.056-2.055V7.072A2.058,2.058,0,0,0,14.934,5.017ZM10.5,3a2.413,2.413,0,0,1,2.328,2.017H8.172A2.413,2.413,0,0,1,10.5,3Zm5.511,11.938a1.079,1.079,0,0,1-1.077,1.078H6.066a1.079,1.079,0,0,1-1.077-1.078V7.072A1.079,1.079,0,0,1,6.066,5.995h8.867a1.079,1.079,0,0,1,1.077,1.078Z"
          fill="#06c"
        />
      </g>
    </svg>
  );
};

const HeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <g>
        <rect y="0.213" width="21" height="21" fill="none" />
        <path
          d="M10.5,16.748a.9.9,0,0,1-.642-.266l-5.3-5.326a3.833,3.833,0,0,1,.269-5.64,3.913,3.913,0,0,1,5.23.371l.442.444.442-.444a3.914,3.914,0,0,1,5.23-.37,3.834,3.834,0,0,1,.269,5.64l-5.3,5.326A.9.9,0,0,1,10.5,16.748ZM7.184,5.779a2.569,2.569,0,0,0-1.653.582,2.691,2.691,0,0,0-.977,1.982,3,3,0,0,0,.938,2.19l4.934,4.958a.106.106,0,0,0,.15,0l4.933-4.957a3,3,0,0,0,.939-2.19,2.691,2.691,0,0,0-.977-1.983h0a2.811,2.811,0,0,0-3.748.3l-1.08,1.086a.2.2,0,0,1-.284,0L9.278,6.662A2.97,2.97,0,0,0,7.184,5.779Z"
          fill="#06c"
        />
      </g>
    </svg>
  );
};

const BoxIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <g>
        <rect width="21" height="21" fill="none" />
        <path
          d="M16.895,5.638l-5.5-2.75a2.008,2.008,0,0,0-1.789,0l-5.5,2.75A1.989,1.989,0,0,0,3,7.427v6.146a1.989,1.989,0,0,0,1.105,1.789l5.5,2.75a2.011,2.011,0,0,0,1.789,0l5.5-2.75A1.989,1.989,0,0,0,18,13.573V7.427A1.989,1.989,0,0,0,16.895,5.638ZM10.053,3.783a1.005,1.005,0,0,1,.895,0L16.441,6.53,13.9,7.98,8.189,4.714ZM10.5,9.925,4.559,6.53,7.115,5.252l5.781,3.3ZM4.553,14.467A1,1,0,0,1,4,13.573V7.427c0-.021.007-.04.008-.061L10,10.791v6.4ZM17,13.573a1,1,0,0,1-.553.895L11,17.191v-6.4l5.992-3.424c0,.021.008.04.008.061Z"
          fill="#06c"
        />
      </g>
    </svg>
  );
};

const SettingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <rect width="21" height="21" fill="none" />
      <path
        d="M17.7773,10.1221,17.123,9.868a6.5933,6.5933,0,0,0-.1787-1.023l.5274-.46a.4175.4175,0,0,0-.2656-.7321l-.6988-.0147c-.0742-.1559-.1489-.3117-.2368-.4639V7.1743c-.0879-.1522-.1851-.2953-.2827-.4378l.3374-.6116a.4177.4177,0,0,0-.5-.5969l-.6616.2255a6.586,6.586,0,0,0-.7959-.6673l.1084-.6936a.4174.4174,0,0,0-.6743-.39l-.5489.4421a6.7357,6.7357,0,0,0-.97-.3559l-.1357-.6918A.4175.4175,0,0,0,11.38,3.262l-.3643.6029a6.6677,6.6677,0,0,0-1.0278.0041L9.62,3.259a.4177.4177,0,0,0-.7676.135l-.1367.6982a6.58,6.58,0,0,0-.9673.3451L7.2,3.9935a.4173.4173,0,0,0-.6748.389l.1089.6969a6.5584,6.5584,0,0,0-.7842.6639l-.6724-.2312a.4176.4176,0,0,0-.5014.5963l.3432.6231A6.6544,6.6544,0,0,0,4.5,7.62l-.7036.0126a.4176.4176,0,0,0-.2676.7316l.5308.4642a6.6389,6.6389,0,0,0-.1783,1.0176l-.6577.2531a.4175.4175,0,0,0-.0009.779l.6543.254a6.5946,6.5946,0,0,0,.1787,1.0231l-.5274.4594a.4176.4176,0,0,0,.2656.7322l.6988.0147c.0742.1561.1489.3121.2368.4644s.19.2871.2876.4289l-.3423.62a.4176.4176,0,0,0,.5.5969l.6543-.223a6.5871,6.5871,0,0,0,.8037.6621l-.1089.6964a.4174.4174,0,0,0,.6743.39l.5542-.4461a6.6757,6.6757,0,0,0,.9639.3564l.1362.6953a.4175.4175,0,0,0,.7671.1353l.3706-.6134c.1734.0136.3462.0337.521.0337.166,0,.3321-.0194.4981-.0319l.37.6147a.4177.4177,0,0,0,.7676-.135l.1362-.6944a6.6363,6.6363,0,0,0,.96-.3558l.5571.4507a.4173.4173,0,0,0,.6748-.3891l-.1089-.6968a6.5677,6.5677,0,0,0,.7842-.6639l.6724.2312a.4176.4176,0,0,0,.5014-.5964l-.3432-.623A6.667,6.667,0,0,0,16.5,13.38l.7036-.0126a.4176.4176,0,0,0,.2676-.7317l-.5308-.4641a6.641,6.641,0,0,0,.1783-1.0176l.6577-.2532A.4174.4174,0,0,0,17.7773,10.1221ZM10.49,4.9414a5.5376,5.5376,0,0,1,5.541,5.063l-3.644-.0031a1.9186,1.9186,0,0,0-.189-.48,1.9579,1.9579,0,0,0-2.207-.9065L8.1738,5.462A5.52,5.52,0,0,1,10.49,4.9414Zm-.2138,6.3894A.86.86,0,0,1,10.499,9.64a.8667.8667,0,0,1,.2246.03.8607.8607,0,0,1,.2061,1.576A.8626.8626,0,0,1,10.2764,11.3308ZM7.3027,5.9547l1.8213,3.16a1.9476,1.9476,0,0,0-.0053,2.7745L7.2979,15.0379a5.5444,5.5444,0,0,1,.0048-9.0832Zm5.9737,9.3622a5.5585,5.5585,0,0,1-5.1128.2215l1.8218-3.15a1.9527,1.9527,0,0,0,2.4082-1.3866l3.6372.0031A5.5522,5.5522,0,0,1,13.2764,15.3169Z"
        fill="#06c"
      />
    </svg>
  );
};

const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <g>
        <rect x="0.01" width="21" height="21" fill="none" />
        <g>
          <path
            d="M10.5,3.5a7,7,0,1,0,7,7A7,7,0,0,0,10.5,3.5Zm4.443,11.018c-.469-.935-2.275-1.75-4.443-1.75s-3.974.815-4.443,1.75a6,6,0,1,1,8.886,0Z"
            fill="#06c"
          />
          <ellipse cx="10.5" cy="9" rx="2.375" ry="2.5" fill="#06c" />
        </g>
      </g>
    </svg>
  );
};
