import styled from "styled-components";

/*
    작성일 : 2024.10.21
    파일명 : ProfileContainer.tsx
    설명 : 소개 > 프로필 페이지 컨테이너
*/
export default function ProfileContainer({
  children,
  mt = "0px",
  padding = "0px 0px 0px 0px",
  jc = "center",
}: {
  children: React.ReactElement;
  mt?: string;
  padding?: string;
  jc?: string;
}) {
  return (
    <>
      <ContainerWrapper $mt={mt}>
        <Container $jc={jc}>
          <InnerWrapper $padding={padding}>{children}</InnerWrapper>
        </Container>
      </ContainerWrapper>
    </>
  );
}

const InnerWrapper = styled.div<{ $padding: string }>`
  place-content: center;
  padding: ${({ $padding }) => $padding};
`;
const ContainerWrapper = styled.div<{ $mt: string }>`
  margin-top: ${({ $mt }) => $mt};

  display: flex;
  place-content: center;
`;
const Container = styled.div<{ $jc: string }>`
  /* Rectangle 7 */

  justify-content: ${({ $jc }) => $jc};

  max-width: 539px;
  width: 100%;
  height: max-content;

  display: flex;
  background: gainsboro;
  border-radius: 20px;
`;
