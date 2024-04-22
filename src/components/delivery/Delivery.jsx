import React from 'react';
import './delivery.css';
import { FiPhone } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { CiDeliveryTruck } from "react-icons/ci";



const Delivery = () => {
  return (
    <div className="container">
        <div className="holderDelivery">
          <div className="miniCardFordelivery">
               <div className="palka"></div>  <h1>Yetkazib berish xizmati</h1>
          </div>
          <div className="miniCardFordelivery">
               <div className="iconDelivery"><FiPhone />
</div> <div className="lineDelivery"></div>  <p>Sizni qiziqtirgan barcha savollar bo'yicha 77 260-78-07 yagona raqamiga qo'ng'iroq qiling.
Mutaxassisimiz sizga albatta maslahat beradi.</p>
          </div>
          <div className="miniCardFordelivery">
               <div className="iconDelivery"><LiaTelegramPlane />
</div> <div className="lineDelivery"></div> <p>Bizga telegram (77) 260-78-07 va orqali yozishingiz mumkin <a href="https://t.me/VorisxonS"> @Vorisxon </a>
   telegram  murojat qiling </p>
          </div>
          <div className="miniCardFordelivery">
               <div className="iconDelivery"><CiDeliveryTruck />
</div> <div className="lineDelivery"></div> <p>Namangan shahri bo'ylab yetkazib berish bepul.

Grand Project jamoasi sizga yaxshi kun va ajoyib ishtaha tilaydi!g</p>
          </div>
        </div>
    </div>
  );
};

export default Delivery;
