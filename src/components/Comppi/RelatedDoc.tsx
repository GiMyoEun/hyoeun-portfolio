import { LinkType } from "../../common/type";
import LinkContainer from "../Common/Container/LinkContainer";
import ProfileTitle from "../Common/ProfileTitle";

/*
    작성일 : 2024.10.22
    파일명 : RelatedDoc.tsx
    설명 : 토이 프로젝트 > 상세 페이지 관련 문서 링크 컴포넌트
    
*/
export default function RelatedDoc({ linkArr }: { linkArr: LinkType[] }) {
  return (
    <>
      <ProfileTitle mt="120px" title="관련 문서" />
      <LinkContainer linkArr={linkArr} />
    </>
  );
}
