import { FC } from "react";
import img from "../../assets/collect.png";

import "./collect.scss"

const Collect: FC = () => {
  return (
    <div className="collect">
      <div className="collect__left">
        <img src={img} alt="" />
      </div>
      <div className="collect__right">
        <h3 className="collect__right__title">коллекция 2018</h3>
        <p className="collect__right__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
          ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
          nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna
          consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus
          facilisi habitasse ipsum interdum dictum aliquet. Velit quis
          ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra
          nulla nullam natoque volutpat curabitur auctor. Viverra viverra
          ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam
          egestas leo orci pharetra sed diam.{" "}
        </p>
        <button>посмотреть коллекцию</button>
      </div>
    </div>
  );
};

export default Collect;
