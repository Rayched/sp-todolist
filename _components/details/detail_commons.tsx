"use client"

import styled from "styled-components"

const DetailButton = styled.button`
    width: 50%;
    height: 100%;
    max-width: 120px;
    max-height: 60px;
    margin-left: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 25px;
    font-size: 16px;
    box-shadow: 1px 2px rgba(0, 0, 0, 1);

    .iconbox {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const ImageContainer_commons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 10px;

    /**desktop version, 크기 설정 */
    @media screen and (min-width: 1100px){
        width: 35dvw;
        max-width: 383px;
        height: 32dvh;
        max-height: 310px;
    };

    /**태블릿 및 모바일 version 크기 설정 */
    @media screen and (max-width: 1099px){
        width: 85dvw;
        height: 32dvh;
    };
`;

export const DetailCommons = {
    img_container: ImageContainer_commons,
    edit_buttons: DetailButton
};