/**
 * To Do 혹은 Done이 비어있을 때
 * empty image를 내보내는 컴포넌트
 * 모바일/태블릿/데스크탑 별로 이미지 크기가 다르기에
 * 컴포넌트 하나에 구현하면 
 */

import styled from "styled-components";

interface I_Empty {
    isdesktop: string;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 25%;
        height: 25%;
    }
`;

const TextBox = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #94A3B8;

    span {
        margin: 1px 0px;
    }
`;

export function ToDoEmpty({ isdesktop }: I_Empty) {
    return (
        <Container>
            {
                isdesktop === "true" ? (
                    <img src={'/imgs/showtodos/Type=Todo, Size=Large.svg'} />
                ) : (
                    <img src={'/imgs/showtodos/Type=Todo, Size=Small.svg'} />
                )
            }
            <TextBox>
                <span>할 일이 없어요!</span>
                <span>TODO를 새롭게 추가해주세요!</span>
            </TextBox>
        </Container>
    );
}

export function DoneEmpty({ isdesktop }: I_Empty) {
    return (
        <Container>
            {
                isdesktop === "true" ? (
                    <img src={'/imgs/todoemptys/Type=Done, Size=Large.svg'} />
                ) : (
                    <img src={'/imgs/todoemptys/Type=Done, Size=Small.svg'} />
                )
            }
            <TextBox>
                <span>아직 다 한 일이 없어요</span>
                <span>해야 할 일을 체크해보세요!</span>
            </TextBox>
        </Container>
    );
}