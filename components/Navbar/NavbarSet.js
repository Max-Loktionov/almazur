import Image from "next/image";
import moon from "../../public/img/navBarSvg/Vector.png";
import lang from "../../public/img/navBarSvg/lang.png";
import switcher from "../../public/img/navBarSvg/switch.png";

const NavbarSet = () => {
  return (
    <>
      <Image src={lang} alt="set language" />

      <Image src={moon} alt="set dark/light theme" />

      <Image src={switcher} alt="switcher of theme" />
    </>
  );
};
export default NavbarSet;
