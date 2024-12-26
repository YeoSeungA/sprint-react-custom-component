import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  background-color: rgba(128, 128, 128, 0.5);
  width: 100%;
  height: 100%;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white !important;
  border-radius: 30px;
  cursor: grab;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  background-color: pink;
  color: white;
  border-radius: 30px;
  width: 200px;
  height: 100px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn
        onClick={openModalHandler}
        >
          {isOpen ? 'Opened!' : 'Open Modal'}
        </ModalBtn>
        {isOpen ?
        <>
        <ModalBackdrop onClick={openModalHandler}/>
        <ModalView onClick={openModalHandler}>
          x
          <div/>
          Hello
        </ModalView>
        </> : null}
      </ModalContainer>
    </>
  );
};
