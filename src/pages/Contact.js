import React from "react";

import instagram from "../icons/instagram.svg";
import facebook from "../icons/facebook.svg";

const Contact = () => {
  return (
    <>
      <div className="pWrapper">
        <h4>Kontakt</h4>
        <p className="paragraphText">
          Jako hodowla często pojawiamy się na giełdach terrarystycznych na
          terene Polski. Aby być na bieżąco gdzie będziemy zachęcamy do
          śledzenia newsów na stronie i mediach społecznościowych. Osoby
          zainteresowane rezerwacją/kupnem zwierzaka, zapraszamy do kontaktu:
        </p>

        <a
          href="mailto:smiling.geckos.kontakt@gmail.com"
          className="contactLink"
        >
          smiling.geckos.kontakt@gmail.com
        </a>
        <div>
          <a href="https://www.instagram.com/smiling_geckos/">
            <img
              src={instagram}
              alt="Instagram logo"
              className="socialMediaLogo"
            />
          </a>
          <a href="https://www.facebook.com/geckossmile/">
            <img
              src={facebook}
              alt="Facebook logo"
              className="socialMediaLogo"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
