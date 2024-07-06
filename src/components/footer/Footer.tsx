import  { FC } from "react";

import img from "../../assets/footer.png";

import "./footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2>наши бренды</h2>
        <div className="footer__imgs">
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
