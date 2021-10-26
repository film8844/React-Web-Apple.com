import React from 'react';

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
        <div className="pt-5 flex justify-between mb-5">
          <div>
            <p className="text-lg font-medium">
              AppleCare+ สำหรับ {item.shortName}
            </p>
            <p>ได้รับการลงทะเบียนโดยอัตโนมัติพร้อมกับฮาร์ดแวร์ Apple ของคุณ</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-medium">{`฿${Number(
              item.appleCareCost
            ).toLocaleString('en', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}</p>
            <span className="text-xl text-blue-600">ลบออก</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pt-5 flex justify-between mb-5">
          <div>
            <p className="text-lg font-medium">
              เพิ่ม AppleCare+ สำหรับ {item.shortName} ในราคา{' '}
              {`฿${Number(item.appleCareCost).toLocaleString('en', {
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
            <span className="text-sm text-blue-600">ดูเพิ่มเติม</span>
          </div>
          <div className="text-right">
            <span className="text-xl text-blue-600">เพิ่ม</span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="pt-8 grid grid-cols-1 md:grid-cols-4">
      <div>
        <img
          style={{ maxWidth: '200px' }}
          className="mx-auto mb-5"
          src={`/assets/products/${item.product}/${item.product}-${item.type}-${item.color}.png`}
        />
      </div>
      <div className="col-span-3 divide-y">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
          <div>
            <span className="text-2xl font-medium">{item.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-2xl font-medium md:ml-10">x1</span>
            <div className="text-right">
              <p className="text-2xl font-medium">{`฿${Number(
                price
              ).toLocaleString('en', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}</p>
              <span className="text-xl text-blue-600">ลบออก</span>
            </div>
          </div>
        </div>
        {AppleCare()}
        <div className="pt-5 mb-5">
          <p className="text-lg font-medium">
            ดูว่าคุณจะได้รับสินค้ารายการนี้เร็วที่สุดเมื่อไหร่{' '}
            <span className="font-normal text-blue-600">โปรดระบุรหัสไปรษณีย์ v</span>
          </p>
          <div className="grid grid-cols-2">
                <div>จัดส่งใน 3-4 สัปดาห์</div>
                <div>รับด้วยตัวเองที่ Apple Store ใกล้คุณ</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
