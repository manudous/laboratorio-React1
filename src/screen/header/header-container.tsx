import React from "react";
import image from "../../assets/logo.png";
import {HeaderCSS} from './header-container.styles';
import {Image} from './header-container.styles';

export const Header: React.FC = () => {
  return (
    <HeaderCSS>
      <Image src={image} alt="" />
    </HeaderCSS>
  );
};


