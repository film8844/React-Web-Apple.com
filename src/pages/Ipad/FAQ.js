import React from 'react';
import FAQAccordion, {
  QuestionItem,
  Question,
  Answer,
} from '../../components/FAQAccordion';

const IpadFAQ = () => {
  return (
    <FAQAccordion>
      <QuestionItem>
        <Question>คีย์บอร์ดรุ่นไหนสามารถใช้งานกับ iPad รุ่นนี้ได้</Question>
        <Answer>
          <p>
            Smart Keyboard สามารถใช้งานร่วมกับ iPad รุ่นนี้ได้
            และยังสามารถใช้งานร่วมกับ iPad Pro รุ่น 10.5 นิ้ว, iPad Air (รุ่นที่
            3) และ iPad (รุ่นที่ 7, 8 และ 9)
            อีกทั้งมีคีย์บอร์ดจากบริษัทอื่นให้เลือกใช้งานอีกด้วย
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>Apple Pencil รุ่นไหนสามารถใช้งานกับ iPad รุ่นนี้ได้</Question>
        <Answer>
          <p>
          ApplePencil (รุ่นที่ 1)
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>iPad ทุกรุ่นใช้ซิมการ์ดชนิดเดียวกันหรือไม่</Question>
        <Answer>
          <p className="mb-3">
            มีตัวเลือกซิมการ์ดสองแบบสำหรับการเชื่อมต่อ iPad รุ่น Wi-Fi +
            Cellular ของคุณกับแผนบริการข้อมูล ได้แก่ ซิมการ์ดจริง หรือเทคโนโลยี
            eSIM***(หมายเหตุ: iPad รุ่น Wi-Fi
            จะไม่สามารถเชื่อมต่อกับเครือข่ายเซลลูลาร์ได้)
          </p>
          <p className="mb-3">
            ซิมการ์ดจริง: รุ่น Wi-Fi + Cellular ทุกรุ่นมีถาด Nano-SIM มาให้
            ซึ่งสามารถใส่การ์ด Nano-SIM (หรือเรียกอีกอย่างว่า ซิมการ์ด 4FF)
            จากผู้ให้บริการเครือข่ายโทรศัพท์ได้ iPad
            ของคุณอาจมีซิมการ์ดติดตั้งอยู่แล้ว
            หากคุณซื้อเครื่องจากผู้ให้บริการเครือข่ายโทรศัพท์ แต่หากไม่มี
            คุณสามารถติดต่อผู้ให้บริการเครือข่ายโทรศัพท์ของคุณเพื่อรับซิมการ์ดที่เหมาะสมกับ
            iPad ของคุณได้ นอกจากนี้ iPad บางรุ่นยังรองรับ Apple SIM อีกด้วย
            หากต้องการข้อมูลเพิ่มเติม โปรดไปที่{' '}
            <a
              href="https://support.apple.com/th-th/HT203089"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              https://support.apple.com/th-th/HT203089
            </a>
          </p>
          <p className="mb-3">
            เทคโนโลยี eSIM: รุ่น Wi-Fi + Cellular รุ่นใหม่กว่า มาพร้อมเทคโนโลยี
            eSIM ในตัว ซึ่งทำงานได้เหมือนซิมการ์ดแบบดิจิทัล
            โดยมีหลายวิธีในการเปิดใช้งาน eSIM บน iPad ของคุณ
            ไม่ว่าจะดาวน์โหลดได้เลยบน iPad, สแกนรหัส QR
            หรือใช้แอปของผู้ให้บริการเครือข่ายโทรศัพท์ และเมื่อมี eSIM
            คุณก็สามารถเลือกแผนบริการข้อมูลเซลลูลาร์จากผู้ให้บริการที่เราคัดสรรมาแล้วทั้งในสหรัฐอเมริกาและมากกว่า
            180 ประเทศและภูมิภาคต่างๆ ทั่วโลก
            หากต้องการข้อมูลเพิ่มเติมในการตั้งค่า eSIM โปรดไปที่{' '}
            <a
              href="https://support.apple.com/th-th/HT203089"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              https://support.apple.com/th-th/HT203089
            </a>
          </p>
          <p className="mb-3">
            <a
              href="https://www.apple.com/th/ipad/LTE"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ข้อมูลเพิ่มเติมเกี่ยวกับการรองรับเครือข่าย LTE ของ iPad
              แยกตามผู้ให้บริการเครือข่ายและประเทศหรือภูมิภาค
            </a>
          </p>
          <p className="mb-3">
            รุ่น Wi-Fi + Cellular ทุกรุ่นมีถาด Nano-SIM มาให้
            ซึ่งสามารถใช้งานซิมการ์ดจากผู้ให้บริการเครือข่ายโทรศัพท์ได้
          </p>
          <p className="mb-3">
            รุ่น Wi-Fi + Cellular ที่มีเทคโนโลยี eSIM ติดตั้งในตัวเครื่อง ได้แก่
            iPad Pro รุ่น 12.9 นิ้ว (รุ่นที่ 3 หรือใหม่กว่า), iPad Pro รุ่น 11
            นิ้ว (รุ่นที่ 1 หรือใหม่กว่า), iPad Air (รุ่นที่ 3 และ 4), iPad
            (รุ่นที่ 7 หรือใหม่กว่า) และ iPad mini (รุ่นที่ 5 และ 6)
          </p>
          <p className="mb-3">
            รุ่น Wi-Fi + Cellular ที่มาพร้อม Apple SIM แบบซิมการ์ดจริง ได้แก่
            iPad Pro รุ่น 12.9 นิ้ว (รุ่นที่ 1), iPad Air 2, iPad (รุ่นที่ 5 และ
            6), iPad mini 3 และ iPad mini 4 รุ่น Wi-Fi + Cellular ที่มาพร้อม
            Apple SIM ติดตั้งในตัวเครื่อง ได้แก่ iPad Pro รุ่น 12.9 นิ้ว
            (รุ่นที่ 2), iPad Pro รุ่น 10.5 นิ้ว, iPad Pro รุ่น 9.7 นิ้ว, iPad
            mini (รุ่นที่ 5) และ iPad Air (รุ่นที่ 3)
          </p>
          <p>
            *** ผู้ให้บริการเครือข่ายโทรศัพท์บางรายอาจไม่รองรับ Apple SIM และ
            eSIM โปรดสอบถามรายละเอียดเพิ่มเติมจากผู้ให้บริการเครือข่ายโทรศัพท์
            ไม่มีให้บริการในจีนแผ่นดินใหญ่ เทคโนโลยี eSIM ใช้งานได้กับ iPad Pro
            รุ่น 11 นิ้ว (รุ่นที่ 1 หรือใหม่กว่า), iPad Pro รุ่น 12.9 นิ้ว
            (รุ่นที่ 3 หรือใหม่กว่า), iPad Air (รุ่นที่ 3 และ 4), iPad (รุ่นที่
            7 หรือใหม่กว่า) และ iPad mini (รุ่นที่ 5 และ 6) Apple SIM
            ใช้งานได้กับ iPad Pro รุ่น 9.7 นิ้ว, iPad Pro รุ่น 10.5 นิ้ว, iPad
            (รุ่นที่ 5 และ 6), iPad Air 2, iPad mini 3 และ iPad mini 4
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>ตัวเลือกการชำระเงินมีอะไรบ้าง</Question>
        <Answer>
          <p className="mb-3">
            เรายินดีรับชำระค่าสินค้าด้วย Apple Pay
            บัตรเครดิตและบัตรเดบิตเกือบทุกประเภท รวมถึงบัตรของขวัญ Apple ด้วย
          </p>
          <p className="mb-3">
            ตัวเลือกการชำระเงินบางอย่างอาจใช้ไม่ได้กับผลิตภัณฑ์บางประเภท
            คุณสามารถโทรติดต่อขอข้อมูลเพิ่มเติมได้ที่ 001‑800‑65‑6957
          </p>
          <p>
            <a
              href="https://www.apple.com/th/shop/help/payments"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ดูเพิ่มเติมเกี่ยวกับตัวเลือกการชำระเงิน
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>AppleCare+ มาพร้อมกับอะไรบ้าง</Question>
        <Answer>
          <p className="mb-3">
            iPad
            ทุกเครื่องมาพร้อมกับการรับประกันแบบจำกัดซึ่งคุ้มครองการซ่อมฮาร์ดแวร์เป็นเวลา
            1 ปี และบริการช่วยเหลือโดยไม่คิดค่าใช้จ่ายเป็นเวลา 90 วัน
          </p>
          <p className="mb-3">
            ด้วย AppleCare+ คุณจะสามารถขยายระยะเวลาคุ้มครองเป็น 2 ปี
            แล้วคุณยังจะได้รับสิทธิพิเศษในการรับบริการช่วยเหลือของ Apple
            ทุกวันตลอด 24 ชั่วโมง ความคุ้มครองด้านฮาร์ดแวร์จาก Apple
            และบริการช่วยเหลือด้านซอฟต์แวร์
            และยังรวมถึงความคุ้มครองด้านความเสียหายจากอุบัติเหตุสูงสุด 2 ครั้ง
            ในทุกๆ 12 เดือน
          </p>
          <p className="mb-3">
            <a
              href="https://www.apple.com/th/support/products/ipad"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ดูเพิ่มเติมเกี่ยวกับ AppleCare+
            </a>
          </p>
          <p>
            AppleCare+ สำหรับ iPad
            มอบความคุ้มครองด้านความเสียหายจากอุบัติเหตุในการหยิบจับสูงสุด 2
            ครั้ง
            โดยแต่ละครั้งจะมีค่าธรรมเนียมการให้บริการหรือค่าความเสียหายส่วนแรก
            อาจมีการคิดภาษี
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>
          ตัวเลือกในการจัดส่งมีอะไรบ้าง และฉันจะได้รับสินค้าเมื่อไหร่
        </Question>
        <Answer>
          <p className="mb-3">
            การจัดส่งโดยประมาณนั้นอ้างอิงจากความพร้อมในการจำหน่ายของสินค้าและรูปแบบการจัดส่งที่คุณเลือก
            คุณจะได้รับวันที่จัดส่งขั้นสุดท้ายหลังจากส่งคำสั่งซื้อ
          </p>
          <p className="mb-3">
            การสั่งซื้อทางออนไลน์ทุกรายการจะจัดส่งแบบมาตรฐานโดยไม่เสียค่าจัดส่ง
          </p>
          <p className="mb-3">
            สินค้าของคุณอาจเข้าเกณฑ์การรับสินค้าที่ Apple Store
            ทั้งนี้ขึ้นอยู่กับสถานที่ของคุณ โดยคุณสามารถเลือกมารับสินค้าที่
            Apple Store ใกล้คุณได้ง่ายๆ ในขั้นตอนการชำระเงิน
          </p>
          <p>
            รายการสั่งซื้อซึ่งทำผ่าน{' '}
            <a
              href="https://www.apple.com/th/"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              apple.com
            </a>{' '}
            สามารถจัดส่งได้ภายในประเทศหรือภูมิภาคที่ทำการสั่งซื้อเท่านั้น
            โปรดไปที่ร้านออนไลน์ของประเทศที่คุณต้องการให้จัดส่งผลิตภัณฑ์ไป
            ที่นี่
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>ฉันสามารถส่งคืน iPad ได้หรือไม่</Question>
        <Answer>
          <p className="mb-3">
            ได้ หากคุณเปลี่ยนใจและไม่ต้องการเก็บ iPad ของคุณเอาไว้
            คุณสามารถเลือกที่จะส่งคืนมาที่เราได้
            แม้ว่าจะมีการสลักข้อความเอาไว้ก็ตาม โดย iPad
            ที่ส่งคืนจะต้องอยู่ในสภาพที่ดีและเก็บอยู่ในบรรจุภัณฑ์เดิม
            พร้อมอุปกรณ์เสริม คู่มือ และเอกสารคำแนะนำทั้งหมด ทั้งนี้
            การส่งคืนจะอยู่ภายใต้เงื่อนไขของนโยบายการขายและการคืนเงินของ Apple
          </p>
          <p>
            <a
              href="https://www.apple.com/th/shop/help/returns_refund"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ดูเพิ่มเติมเกี่ยวกับการคืนสินค้า การคืนเงิน และการเปลี่ยนสินค้า
            </a>
          </p>
        </Answer>
      </QuestionItem>
    </FAQAccordion>
  );
};

export default IpadFAQ;
