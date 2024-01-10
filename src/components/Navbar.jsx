import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Link to={"/"}>홈</Link>
        <Link to={"/work"}>작업</Link>
        {/* :이가 있으면 변수 없으면 상수 :plan  */}
        <Link to={"/work/:plan"}>대표작</Link>
        <Link to={"/login"}>로그인</Link>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid var(--line-gray);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Nav = styled.nav`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Navbar;
