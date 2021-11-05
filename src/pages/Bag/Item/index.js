import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Item = (props) => {
  const { item } = props;
  let price;
  if (item.appleCare) {
    price = item.price - item.appleCareCost;
  } else {
    price = item.price;
  }

  const AppleCare = () => {
    if (item.appleCare) {
      return (
        <div className="pt-5 flex justify-between gap-2 mb-5">
          <div className="flex">
            <div className="pt-1 mr-2">
              <svg width="18px" height="18px" viewBox="0 0 256 315">
                <g>
                  <path
                    d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                    fill="#ec0002"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium">
                AppleCare+ สำหรับ {item.shortName}
              </p>
              <p>
                ได้รับการลงทะเบียนโดยอัตโนมัติพร้อมกับฮาร์ดแวร์ Apple ของคุณ
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-medium">{`฿${Number(
              item.appleCareCost
            ).toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}</p>
            <span className="text-xl text-blue-600 hover:underline cursor-pointer">
              ลบออก
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pt-5 flex justify-between gap-2 mb-5">
          <div className="flex">
            <div className="pt-1 mr-2">
              <svg width="18px" height="18px" viewBox="0 0 256 315">
                <g>
                  <path
                    d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                    fill="#ec0002"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium">
                เพิ่ม AppleCare+ สำหรับ {item.shortName} ในราคา{" "}
                {`฿${Number(item.appleCareCost).toLocaleString("en", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </p>
              <ul className="list-disc list-inside text-sm">
                <li>สิทธิพิเศษในการติดต่อกับผู้เชี่ยวชาญของ Apple</li>
                <li>
                  บริการซ่อมที่ผ่านการรับรองจาก Apple ซึ่งใช้อะไหล่แท้ของ Apple
                </li>
                <li>ความคุ้มครองสำหรับ iPhone รวมถึงแบตเตอรี่</li>
                <li>ความคุ้มครองด้านความเสียหายจากอุบัติเหตุ</li>
              </ul>
              <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                ดูเพิ่มเติม
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl text-blue-600 hover:underline cursor-pointer">
              เพิ่ม
            </span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="pt-20 mb-20 grid grid-cols-1 md:grid-cols-4">
      <div>
        <img
          style={{ maxWidth: "200px" }}
          className="mx-auto mb-5"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="col-span-3 divide-y divide-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
          <div>
            <span className="text-2xl font-medium">{item.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-2xl font-medium md:ml-10">1<KeyboardArrowDownIcon className="text-blue-600"/></span>
            <div className="text-right">
              <p className="text-2xl font-medium">{`฿${Number(
                price
              ).toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}</p>
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                ลบออก
              </span>
            </div>
          </div>
        </div>
        {AppleCare()}
        <div className="pt-5">
          <p className="text-lg font-medium">
            ดูว่าคุณจะได้รับสินค้ารายการนี้เร็วที่สุดเมื่อไหร่{" "}
            <span className="font-normal text-blue-600 hover:underline cursor-pointer">
              โปรดระบุรหัสไปรษณีย์<KeyboardArrowDownIcon/>
            </span>
          </p>
          <div className="mt-1 grid grid-cols-2">
            <div className="flex items-center">
              <div>
                <svg
                  viewBox="0 0 25 25"
                  role="img"
                  aria-hidden="true"
                  width="25px"
                  height="25px"
                >
                  <path fill="none" d="M0 0h25v25H0z"></path>
                  <path d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"></path>
                </svg>
              </div>
              <span className="ml-1 text-sm">จัดส่งใน 3-4 สัปดาห์</span>
            </div>
            <div className="flex items-center">
              <div>
                <svg
                  viewBox="0 0 25 25"
                  role="img"
                  aria-hidden="true"
                  width="25px"
                  height="25px"
                >
                  <path fill="none" d="M0 0h25v25H0z"></path>
                  <path d="M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z"></path>
                  <path d="M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z"></path>
                </svg>
              </div>
              <span className="ml-1 text-sm">
                รับด้วยตัวเองที่ Apple Store ใกล้คุณ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
