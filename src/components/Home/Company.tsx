import { getGenerateKey } from "../../common/common";
import { CompanyType } from "../../common/type";
import ProfileContainer from "../Common/Container/ProfileContainer";
import ProfilePTag from "../Common/Contents/ProfilePTag";
import ProfileTitle from "../Common/ProfileTitle";

/*
    작성일 : 2024.10.22
    파일명 : Company.tsx
    설명 : 소개 > 프로필 > 회사 / 수상
*/
type CompanyPropsType = {
  title: string;
  arr: CompanyType[];
  icon: React.ReactElement;
};
export default function Company({ title, arr, icon }: CompanyPropsType) {
  return (
    <>
      <ProfileTitle mt="120px" title={title} />
      {arr.map((elem) => {
        return (
          <ProfileContainer
            padding="30px 0px 30px 0px"
            key={getGenerateKey()}
            mt="30px"
          >
            <>
              <ProfilePTag
                margin="0px 0px 10px 0px"
                discription={elem.discription}
              />
              {icon}
              <ProfilePTag
                margin="10px 0px 5px 0px"
                discription={elem.company}
              />
              <ProfilePTag margin="0px 0px 0px 0px" discription={elem.period} />
            </>
          </ProfileContainer>
        );
      })}
    </>
  );
}
