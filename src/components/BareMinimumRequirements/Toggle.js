import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
    background-color:pink;
    }
    transition: background-color 0.3s ease;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      left:27px;
    }
    transition: left 0.3s ease;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer
        onClick={toggleHandler}
      >
        <div className= {`toggle-container ${isOn ? "toggle--checked":""}`}/>
        <div className= {`toggle-circle ${isOn ? "toggle--checked" :""}`}/>
      </ToggleContainer>
      <Desc>{isOn ? 'Toggle Switch ON' : 'Toggle Switch OFF'}</Desc>
    </>
  );
};