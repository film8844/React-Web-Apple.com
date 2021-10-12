import React from 'react';
import './style.css';

const QuestionBox = () => {

  return(
    <div>
      <div class="w-full md:w-3/5 mx-auto p-8">
        <div class="tab w-full overflow-hidden">
          <input class="absolute opacity-0" id="tab-multi-zero" type="checkbox" name="tabs" />
          <label class="block p-5 leading-normal cursor-pointer text-2xl" for="tab-multi-zero">คำถามที่พบบ่อย</label>
          <div class="tab-content overflow-hidden leading-normal">
            <div class="tab w-full overflow-hidden text-s">
              <input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
              <label class="block p-5 leading-normal cursor-pointer font-semibold" for="tab-multi-one">ทำไมจึงควรซื้อ iPhone แบบที่ไม่มีซิมบน apple.com</label>
              <div class="tab-content overflow-hidden leading-normal">
                <p class="p-5">iPhone เครื่องใหม่ของฉันจะเป็นเครื่องปลดล็อคหรือไม่
                  ใช่ iPhone ที่ไม่ได้ผูกอยู่กับผู้ให้บริการและซื้อจาก apple.com นั้นเป็นรุ่นปลดล็อค
                  ซึ่งหมายความว่าคุณไม่มีข้อผูกมัดกับผู้ให้บริการเครือข่ายรายใดรายหนึ่ง
                  หรือกับสัญญาการให้บริการที่มีระยะเวลาหลายปี คุณจึงสามารถเลือกผู้ให้บริการที่เหมาะกับคุณได้ และเมื่อ
                  iPhone เครื่องใหม่ของคุณได้รับการเปิดใช้งานแล้ว เครื่องนั้นก็จะยังคงสถานะการปลดล็อคเช่นเดิม
                  ซึ่งหมายความว่าคุณสามารถนำไปใช้กับเครือข่ายใดก็ได้ที่มีบริการสำหรับ iPhone</p>
              </div>
            </div>
            <div class="tab w-full overflow-hidden text-s ">
              <input class="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
              <label class="block p-5 leading-normal cursor-pointer font-semibold" for="tab-multi-two">การถ่ายโอนข้อมูลและตั้งค่า iPhone เครื่องใหม่นั้นง่ายจริงมั้ย</label>
              <div class="tab-content overflow-hidden leading-normal">
                <p class="p-5">
                  ง่ายจริง เพราะ iCloud ช่วยให้คุณย้ายการตั้งค่า รูปภาพ แอป และเอกสารต่างๆ มายังอุปกรณ์เครื่องใหม่ได้อย่างราบรื่น เพียงลงชื่อเข้าใช้ iCloud ขณะตั้งค่าอุปกรณ์เครื่องใหม่ จากนั้นเข้าถึงข้อมูลสำรอง iCloud ของอุปกรณ์เครื่องก่อนหน้า แล้วในไม่กี่นาทีทุกอย่างก็จะพร้อมให้คุณใช้งาน

                  หากมีพื้นที่จัดเก็บข้อมูล iCloud ไม่พอที่จะสำรองข้อมูลได้เสร็จสมบูรณ์ iCloud จะอนุญาตให้คุณมีพื้นที่จัดเก็บข้อมูลชั่วคราวที่เพียงพอเพื่อให้คุณมั่นใจว่าจะสามารถสำรองข้อมูลจากอุปกรณ์ของคุณและถ่ายโอนข้อมูลทั้งหมดโดยไม่มีค่าใช้จ่าย (จำเป็นต้องใช้ iOS 15 )

                  คุณสมบัติ "เริ่มใช้อย่างรวดเร็ว"​ ให้คุณกู้คืนข้อมูลและคอนเทนต์จากข้อมูลสำรอง iCloud ไปยัง iPhone เครื่องใหม่ได้ ซึ่งหากเป็นโทรศัพท์ที่ใช้ iOS 12.4 หรือใหม่กว่า คุณสมบัติ "เริ่มใช้อย่างรวดเร็ว"​ ก็จะมีตัวเลือกให้คุณย้ายข้อมูลระหว่างอุปกรณ์ ซึ่งช่วยให้คุณสามารถถ่ายโอนข้อมูลทั้งหมดจากเครื่องปัจจุบันไปยังเครื่องใหม่ในแบบไร้สายได้

                  หากคุณย้ายมาจาก Android คุณจำเป็นต้องดาวน์โหลดแอป "ย้ายไปยัง iOS" ก่อน แล้วทำตามกระบวนการตั้งค่าบน iPhone เครื่องใหม่

                  ดูวิธีถ่ายโอนข้อมูลไปยัง iPhone เครื่องใหม่ได้ที่ support.apple.com/th-th/HT201269
                </p>
              </div>
            </div>
            <div class="tab w-full overflow-hidden text-s ">
              <input class="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
              <label class="block p-5 leading-normal cursor-pointer font-semibold bold" for="tab-multi-three">iPhone เครื่องใหม่ของฉันจะเป็นเครื่องปลดล็อคหรือไม่</label>
              <div class="tab-content overflow-hidden leading-normal">
                <p class="p-5">
                  ใช่ iPhone ที่ไม่ได้ผูกอยู่กับผู้ให้บริการและซื้อจาก apple.com นั้นเป็นรุ่นปลดล็อค ซึ่งหมายความว่าคุณไม่มีข้อผูกมัดกับผู้ให้บริการเครือข่ายรายใดรายหนึ่ง หรือกับสัญญาการให้บริการที่มีระยะเวลาหลายปี คุณจึงสามารถเลือกผู้ให้บริการที่เหมาะกับคุณได้ และเมื่อ iPhone เครื่องใหม่ของคุณได้รับการเปิดใช้งานแล้ว เครื่องนั้นก็จะยังคงสถานะการปลดล็อคเช่นเดิม ซึ่งหมายความว่าคุณสามารถนำไปใช้กับเครือข่ายใดก็ได้ที่มีบริการสำหรับ iPhone
                </p>
              </div>
            </div>
            <div class="tab w-full overflow-hidden text-s ">
              <input class="absolute opacity-0" id="tab-multi-four" type="checkbox" name="tabs" />
              <label class="block p-5 leading-normal cursor-pointer font-semibold" for="tab-multi-four">iPhone ใช้งานได้ทั่วโลกหรือไม่</label>
              <div class="tab-content overflow-hidden leading-normal">
                <p class="p-5">
                  ทุกรุ่นเป็นโทรศัพท์สำหรับการใช้งานทั่วโลก คุณจึงสามารถใช้ได้เกือบทุกที่ ไม่ว่าคุณจะเป็นลูกค้าของเครือข่าย GSM หรือ CDMA คุณก็สามารถใช้งานโรมมิ่งที่ต่างประเทศบนเครือข่าย GSM ในกว่า 200 ประเทศหรือภูมิภาคทั่วโลก หากคุณซื้อ iPhone พร้อมบริการด้านการเงินกับผู้ให้บริการเครือข่ายไร้สายของคุณ โปรดตรวจสอบการใช้งานโรมมิ่งในต่างประเทศกับผู้ให้บริการเครือข่ายโดยตรง

                  ความพร้อมในการให้บริการข้อมูล 5G และ LTE จะแตกต่างกันไปในแต่ละประเทศและภูมิภาค และขึ้นอยู่กับคลื่นความถี่วิทยุ 5G และ LTE ที่ผู้ให้บริการเครือข่ายโทรศัพท์รองรับ โปรดติดต่อผู้ให้บริการเครือข่ายไร้สายของคุณเพื่อสอบถามข้อมูลเพิ่มเติมเกี่ยวกับนโยบายและอัตราค่าบริการสำหรับการใช้งานโรมมิ่งในต่างประเทศ

                  ข้อมูลการรองรับเครือข่าย 5G และ LTE ของ iPhone แยกตามผู้ให้บริการเครือข่ายและประเทศหรือภูมิภาค
                </p>
              </div>
            </div>
            <div class="tab w-full overflow-hidden text-s ">
              <input class="absolute opacity-0" id="tab-multi-five" type="checkbox" name="tabs" />
              <label class="block p-5 leading-normal cursor-pointer font-semibold" for="tab-multi-five">ผู้ให้บริการเครือข่ายไร้สายรายใดบ้างที่ให้บริการ 5G</label>
              <div class="tab-content overflow-hidden leading-normal">
                <p class="p-5">
                  iPhone 13 Pro, iPhone 13 Pro Max, iPhone 13, iPhone 13 mini, iPhone 12 และ iPhone 12 mini รองรับ 5G และเมื่อต้องการใช้งาน 5G คุณจะต้องเปิดใช้งาน iPhone กับผู้ให้บริการเครือข่ายที่มีบริการ 5G โดยที่ผู้ให้บริการบางรายอาจกำหนดให้คุณต้องมีแผนบริการ 5G หรือเปลี่ยน SIM ใหม่ โปรดสอบถามข้อมูลเพิ่มเติมจากผู้ให้บริการของคุณ ดูเพิ่มเติมเกี่ยวกับผู้ให้บริการเครือข่ายในประเทศของคุณ ที่นี่
                </p>
              </div>
            </div>
            <div class="tab w-full overflow-hidden text-s ">
              <input class="absolute opacity-0" id="tab-multi-six" type="checkbox" name="tabs" />
              <label class="block p-5 leading-normal cursor-pointer font-semibold" for="tab-multi-six">ตัวเลือกในการจัดส่งมีอะไรบ้าง และฉันจะได้รับสินค้าเมื่อไหร่</label>
              <div class="tab-content overflow-hidden leading-normal">
                <p class="p-5">
                  การจัดส่งโดยประมาณนั้นอ้างอิงจากความพร้อมในการจำหน่ายของสินค้าและรูปแบบการจัดส่งที่คุณเลือก คุณจะได้รับวันที่จัดส่งขั้นสุดท้ายหลังจากส่งคำสั่งซื้อ

                  การสั่งซื้อทางออนไลน์ทุกรายการจะจัดส่งแบบมาตรฐานโดยไม่เสียค่าจัดส่ง

                  สินค้าของคุณอาจเข้าเกณฑ์การรับสินค้าที่ Apple Store ทั้งนี้ขึ้นอยู่กับสถานที่ของคุณ โดยคุณสามารถเลือกมารับสินค้าที่ Apple Store ใกล้คุณได้ง่ายๆ ในขั้นตอนการชำระเงิน

                  รายการสั่งซื้อซึ่งทำผ่าน apple.com สามารถจัดส่งได้ภายในประเทศหรือภูมิภาคที่ทำการสั่งซื้อเท่านั้น โปรดไปที่ร้านออนไลน์ของประเทศที่คุณต้องการให้จัดส่งผลิตภัณฑ์ไป
                </p>
              </div>
            </div>
            <div class="tab w-full overflow-hidden text-s ">
              <input class="absolute opacity-0" id="tab-multi-seven" type="checkbox" name="tabs" />
              <label class="block p-5 leading-normal cursor-pointer font-semibold" for="tab-multi-seven">ฉันสามารถส่งคืน iPhone ได้หรือไม่</label>
              <div class="tab-content overflow-hidden leading-normal">
                <p class="p-5">
                  ได้ หากคุณเปลี่ยนใจและไม่ต้องการเก็บ iPhone ของคุณเอาไว้ คุณสามารถเลือกที่จะส่งคืนมาที่เราได้ โดย iPhone ที่ส่งคืนจะต้องอยู่ในสภาพที่ดีและเก็บอยู่ในบรรจุภัณฑ์เดิม พร้อมอุปกรณ์เสริม คู่มือ และเอกสารคำแนะนำทั้งหมด ทั้งนี้ การส่งคืนจะอยู่ภายใต้เงื่อนไขของนโยบายการขายและการคืนเงินของ Apple

                  ดูเพิ่มเติมเกี่ยวกับการคืนสินค้า การคืนเงิน และการเปลี่ยนสินค้า
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
