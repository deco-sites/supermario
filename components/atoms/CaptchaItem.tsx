import { useState} from "preact/hooks";

export interface PropKey{
    idOfCaptcha: number;
    setKey: any;
}
export default function CaptchaItem({idOfCaptcha,setKey}: PropKey) {
  const [active, setActive] = useState(false);

  return (
    <li
      key={"key_"+idOfCaptcha}
      onClick={() => {setActive(!active);setKey()}}
      id={"captcha_" + idOfCaptcha}
      class={"w-[84px] h-[84px] z-10  border-2 " + " " +
        `bg-[${active ? "#139c43c5" : "#0000000"}]`}
    >
    </li>
  );
}