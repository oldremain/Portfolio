import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FlexWrapper } from "@/components/FlexWrapper";
import imgUrl from "@/assets/images/main-img.webp";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Section>
      <Container>
        <FlexWrapper
          $align="center"
          $justify="space-between"
          $gap={20}
          $wrap="wrap"
        >
          <S.Content>
            <S.Greeting>
              Hi 👋, <br />
              My name is <S.Accent>Oleg</S.Accent>
              <h1>
                I am <S.Accent>front-end developer</S.Accent>
              </h1>
              <h2>I create modern and user-friendly interfaces</h2>
            </S.Greeting>
            <Button>Contact me 🧑‍💻</Button>
          </S.Content>
          <div>
            <S.PhotoWrapper>
              <S.Photo src={imgUrl} alt="" />
            </S.PhotoWrapper>
            <S.PhotoDescription>
              <S.PulseDot /> Currently working on <span>Portfolio</span>
            </S.PhotoDescription>
          </div>
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
