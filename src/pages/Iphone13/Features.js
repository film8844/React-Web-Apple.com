import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Iphone13Features = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-20">
        มาดู iPhone 13 แบบใกล้ๆ
      </h2>
      <div className="keyfeatures-container mt-10">
        <div
          style={{ backgroundColor: '#2d2e39' }}
          className="keyfeature-col keyfeature-col-span-4 grid grid-cols-2"
        >
          <div className="p-7">
            <p className="text-3xl font-medium text-white">
              <span style={{ color: '#96ffdc' }}>
                ระบบกล้องคู่ที่ล้ำหน้าที่สุดเท่าที่เคยมีมาของเรา
              </span>{' '}
              ประสิทธิภาพในสภาวะแสงน้อยดีขึ้นสูงสุด 47%
            </p>
          </div>
          <div>
            <img
              style={{ height: '450px' }}
              alt="Camera Feature"
              className="w-full rounded-r-2xl"
              src="/assets/features/iphone13/iphone-13-key-features-camera.png"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#3f1921' }}
          className="keyfeature-col keyfeature-col-span-2"
        >
          <div className="p-7">
            <p className="text-3xl font-medium text-white">
              <span style={{ color: '#ffb44c' }}>โหมดภาพยนตร์</span>{' '}
              เพิ่มมิติความชัดตื้นโดยอัตโนมัติ
              และคุณยังสามารถสลับโฟกัสหลังจากที่ถ่ายไปแล้วได้ด้วย
            </p>
          </div>
          <div className="absolute bottom-5">
            <img
              alt="Cinematic Feature"
              src="/assets/features/iphone13/iphone-13-key-features-cinematic.png"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#0d3139' }}
          className="keyfeature-col keyfeature-col-span-3"
        >
          <div className="p-7 mt-5">
            <p className="text-3xl text-center font-medium text-white">
              <span style={{ color: '#b8ff68' }}>
                เล่นวิดีโอนานสูงสุด 19 ชั่วโมง³
              </span>
              <br />
              แบตเตอรี่ที่ใช้งานได้นานขึ้นแบบก้าวกระโดดครั้งใหญ่
            </p>
          </div>
          <div className="absolute bottom-14 w-full">
            <img
              alt="Battery Feature"
              className="mx-auto"
              src="/assets/features/iphone13/iphone-13-key-features-battery.png"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#2d2e39' }}
          className="keyfeature-col keyfeature-col-span-3"
        >
          <div className="w-full absolute top-14">
            <img
              alt="Chip Feature"
              className="mx-auto rounded-r-2xl"
              style={{ maxWidth: '400px' }}
              src="/assets/features/iphone13/iphone-13-key-features-chip.png"
            />
          </div>
          <div className="absolute bottom-8 p-7 w-full">
            <p className="text-3xl text-center font-medium text-white">
              ทรงพลังยิ่งกว่าที่เคยด้วย
              <span style={{ color: '#96ffdc' }}>
                ชิป
                <br />
                A15 Bionic ใหม่
              </span>
              และ <br />
              <span style={{ color: '#96ffdc' }}>5G ที่เร็วสุดแรง</span>⁴
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#162238' }}
          className="keyfeature-col keyfeature-col-span-2"
        >
          <div className="absolute top-0">
            <img
              alt="Glass Feature"
              className="rounded-t-2xl"
              src="/assets/features/iphone13/iphone-13-key-features-glass.png"
            />
          </div>
          <div className="p-7 absolute bottom-0">
            <p className="text-3xl font-medium text-white">
              <span style={{ color: '#ffa9ab' }}>Ceramic Shield</span>{' '}
              ที่แข็งแกร่งกว่ากระจกไหนๆ บนสมาร์ทโฟน และยังทนฝุ่น น้ำที่หกใส่
              และน้ำอีกด้วย
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#34283c' }}
          className="keyfeature-col keyfeature-col-span-4"
        >
          <div className="p-7 mt-10">
            <p className="text-3xl text-center font-medium text-white">
              <span style={{ color: '#fec2eb' }}>จอภาพ Super Retina XDR</span>{' '}
              ที่สดใส
              <br />
              สุดๆ วันนี้
              <span style={{ color: '#fec2eb' }}>สว่างขึ้นถึง 28%</span>
            </p>
          </div>
          <div className="absolute bottom-0">
            <img
              alt="Display Feature"
              className="rounded-b-2xl"
              src="/assets/features/iphone13/iphone-13-key-features-display.png"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-lg font-medium mt-14">
        <a
          href="https://www.apple.com/th/iphone-13"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          ดูเพิ่มเติมเกี่ยวกับ iPhone 13
          <KeyboardArrowRightIcon />
        </a>
      </p>
    </div>
  );
};

export default Iphone13Features;
