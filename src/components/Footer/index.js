import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-screen-lg p-5 mx-auto">
        <div className="divide-y divide-gray-300 ">
          <div className="mb-1">
            <p className="text-sm text-gray-500">
              อีกหลากหลายวิธีในการเลือกซื้อ: ค้นหา Apple Store หรือ ร้านค้าอื่นๆ
              ใกล้คุณ หรือโทร. 001-800-65-6957
            </p>
          </div>
          <div className="pt-2">
            <p className="text-sm text-gray-500">
              Copyright © 2021 Apple Inc. สงวนสิทธิ์ทุกประการ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
