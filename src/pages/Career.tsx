import CareerList from "../components/Career/CareerList";
import Images from "../components/Career/Images";
import Summary from "../components/Career/Summary";

/*
    작성일 : 2024.10.21
    파일명 : Career.tsx
    설명 : 나의 커리어
*/
export default function Career() {
  return (
    <>
      <Summary />

      <CareerList />
      <Images />
    </>
  );
}
