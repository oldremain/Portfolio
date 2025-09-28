import { Icon } from "@/components/icon/Icon";
import { S } from "./Logo_Styles";

export const Logo: React.FC = () => {
  return (
    <S.Logo href="/">
      <Icon
        name="logo"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        color="white"
      />
      <S.Name>Oleg</S.Name>
    </S.Logo>
  );
};
