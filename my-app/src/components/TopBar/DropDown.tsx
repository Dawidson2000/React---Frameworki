import { FC } from "react";
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';

const Container = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
`;

const CustomIcon = styled.img`
margin-right: 70px;
`;

export const DropDown: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
  return (
    <div>
      <div ref={wrapperRef}>
        <div onClick={toggleDropdown}><CustomIcon src ='../../media/icons/arrow-down.png'/></div>
	{dropdownOpen &&
	  <>
	    <Container/>
	  </> 
	}
      </div>
      <div onClick={closeDropdown}></div>
    </div>
  )
}