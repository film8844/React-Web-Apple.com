import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import { Answer, Question, QuestionItem } from '../../components/FAQAccordion';

const BagFAQ = () => {
  return (
    <BagFAQAccordion>
      <QuestionItem>
        <Question>ฉันจะได้รับสินค้าเมื่อไหร่</Question>
        <Answer>
          <p>
            เมื่อระบุรหัสไปรษณีย์แล้ว
            คุณจะได้รับแจ้งวันที่ส่งมอบหรือวันที่พร้อมรับสินค้าโดยประมาณ
            คุณจะได้รับวันที่ขั้นสุดท้ายหลังจากส่งคำสั่งซื้อ
            วันที่โดยประมาณทั้งหมดนั้นอ้างอิงจากความพร้อมในการจำหน่ายของสินค้าและรูปแบบการส่งมอบที่คุณเลือก{' '}
            <a
              href="https://www.apple.com/th/shop/help/shipping_delivery"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ดูเพิ่มเติมเกี่ยวกับการส่งมอบและการรับสินค้า Apple ที่ร้าน
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>
          ฉันสามารถไปรับสินค้าด้วยตัวเองที่ Apple Store ได้หรือไม่
        </Question>
        <Answer>
          <p>
            ได้ หากคุณเลือกรับด้วยตัวเอง
            คุณจะต้องเลือกร้านและวันที่ที่ต้องการรับสินค้าในขั้นตอนการชำระเงิน
            แต่ไม่ใช่สินค้าทุกรายการที่พร้อมให้คุณมารับด้วยตัวเอง
            เราจะส่งข้อความแจ้งให้คุณทราบเมื่อสินค้าของคุณพร้อมให้มารับ{' '}
            <a
              href="https://www.apple.com/th/shop/help/shipping_delivery"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ดูเพิ่มเติมเกี่ยวกับการส่งมอบและการรับสินค้า Apple ที่ร้าน
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>
          ฉันจะดูข้อมูลสิ่งที่ Apple Store
          ของฉันกำลังดำเนินการเพื่อให้ลูกค้าเลือกซื้อสินค้าและรับบริการที่ปลอดภัยยิ่งขึ้นได้อย่างไร
        </Question>
        <Answer>
          <p>
            เราใส่ใจในความปลอดภัยเป็นอันดับแรกโดยใช้มาตรการพิเศษเพื่อให้ลูกค้าของเรามั่นใจในสภาพแวดล้อมที่สะอาดและปลอดภัย
            ซึ่งประกอบด้วยขั้นตอนการตรวจสอบสุขภาพ การขอให้ใช้หน้ากากปิดบังใบหน้า
            และการจำกัดจำนวนผู้เข้าชมภายในร้าน
            และเรายังมีทางเลือกใหม่ในการสินค้าด้วยตัวเองสำหรับลูกค้า
            คุณสามารถค้นหาข้อมูลล่าสุดของ Apple Store ในพื้นที่ของคุณได้ที่{' '}
            <a
              href="https://www.apple.com/th/retail"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ค้นหาร้าน
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>ตัวเลือกของการชำระเงินมีอะไรบ้าง</Question>
        <Answer>
          <p>
            เรายินดีรับชำระค่าสินค้าด้วยบัตรเครดิตเกือบทุกประเภท
            รวมถึงบัตรของขวัญ Apple Store การชำระเงินวิธีอื่นที่เรายินดีรับ
            ได้แก่ การโอนเงินทางธนาคารผ่านเอทีเอ็ม เคาท์เตอร์เซอร์วิส
            และบริการด้านการเงิน
            ตัวเลือกการชำระค่าสินค้าบางวิธีอาจไม่สามารถทำได้กับผลิตภัณฑ์บางรายการ
            คุณสามารถโทร 001‑800‑65‑6957 เพื่อขอข้อมูลเพิ่มเติมได้{' '}
            <a
              href="https://www.apple.com/th/shop/help/payments"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ดูเพิ่มเติมเกี่ยวกับการชำระเงินและราคาสินค้า Apple
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>Apple มีข้อเสนอส่วนลดส่งเสริมการศึกษาหรือไม่</Question>
        <Answer>
          <p>
            มี Apple ยังมีข้อเสนอราคาพิเศษสำหรับนักเรียนนักศึกษา อาจารย์
            นักจัดการ รวมถึงเจ้าหน้าที่ด้านการศึกษาอีกด้วย
            หากคุณคิดว่าคุณอยู่ในเกณฑ์ดังกล่าว โปรดไปที่{' '}
            <a
              href="https://www.apple.com/th-edu/store"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ร้านเพื่อการศึกษาของ Apple
            </a>{' '}
            เพื่อสั่งซื้อสินค้า
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>ตัวเลือกบริการทางการเงินมีอะไรบ้าง</Question>
        <Answer>
          <p>
            คุณสามารถจ่ายค่าสินค้าด้วยวิธีผ่อนชำระโดยใช้บัตรเครดิตที่กำหนดไว้ได้ในขั้นตอนการชำระเงิน
            จำเป็นต้องมียอดสั่งซื้อขั้นต่ำ{' '}
            <a
              href="https://www.apple.com/th/shop/help/payments"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ดูเพิ่มเติมเกี่ยวกับการชำระเงินและราคาสินค้า Apple
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>
          ฉันสามารถเลือกซื้อสินค้าให้ครอบครัวและเพื่อนที่อยู่ต่างประเทศหรือต่างภูมิภาคได้หรือไม่
        </Question>
        <Answer>
          <p>
            ไปที่ร้านออนไลน์ของประเทศหรือภูมิภาคที่คุณต้องการใช้บริการส่งมอบสินค้าเพื่อส่งคำสั่งซื้อของคุณ
            คุณสามารถโทร 001‑800‑65‑6957 เพื่อขอข้อมูลเพิ่มเติมได้
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>
          ฉันสามารถขอให้ส่งมอบสินค้าไปที่อื่นที่ไม่ใช่บ้านของฉันได้หรือไม่
        </Question>
        <Answer>
          <p>
            ได้ คุณสามารถระบุที่อยู่ที่ต้องการได้ในขั้นตอนการชำระเงิน{' '}
            <a
              href="https://www.apple.com/th/shop/help/shipping_delivery"
              target="_blank"
              rel="noreferrer"
              className="text-apple-link-blue hover:underline"
            >
              ดูเพิ่มเติมเกี่ยวกับการส่งมอบและการรับสินค้า Apple ที่ร้าน
            </a>
          </p>
        </Answer>
      </QuestionItem>
    </BagFAQAccordion>
  );
};

export default BagFAQ;

const BagFAQAccordion = (props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="border-t  border-gray-300">
      <div className="max-w-screen-lg mx-auto">
        <Accordion
          expanded={expanded}
          onChange={toggleAccordion}
          elevation={0}
          sx={{ padding: 0, border: 'none' }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            sx={{ paddingTop: '25px', paddingBottom: '25px' }}
          >
            <h3 className="text-3xl font-semibold">
              คำถามเกี่ยวกับการซื้อสินค้า
            </h3>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, border: 0 }}>
            <div className="divide-y divide-gray-300">
              <div></div>
              {props.children}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
