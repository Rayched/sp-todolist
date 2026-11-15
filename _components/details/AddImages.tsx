"use client"

import styled from "styled-components"
import { Detail_EditImageBtnIcon, Details_AddImageBtnIcon, Details_EmptyImageIcon } from "../commons/IconComponents";
import { DetailCommons } from "./detail_commons";

interface I_imagesComponents {
    imgurl?: string;
};

const AddImageContainer = styled(DetailCommons.img_container)`
    border: 2px dotted #CBD5E1;
    background-color: #F8FAFC;
`;

const EditImageContainer = styled(DetailCommons.img_container) <{ bgimgurl: string }>`
    background-image: ${(props) => `url(${props.bgimgurl})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const ImageButton = styled.button`
    width: auto;
    height: auto;
    position: absolute;
    border: 0px;
    background-color: inherit;
    right: 2px;
    bottom: 2px;
`;

/**
 * 저장된 이미지가 없을 때
 * Rendering하는 AddImages components
 */
export function AddImages({ is_selected }: I_imagesComponents) {
    return (
        <AddImageContainer>
            <Details_EmptyImageIcon />
            <ImageButton disabled={!is_selected}>
                <Details_AddImageBtnIcon />
            </ImageButton>
        </AddImageContainer>
    );
}

/**
 * 저장된 이미지가 있는 경우
 * Render하는 EditImages Components
 */
export function EditImages({ imgurl, is_selected }: I_imagesComponents) {
    const urls = imgurl ? imgurl : "/imgs/tododetails/img.svg";

    return (
        <EditImageContainer bgimgurl={urls}>
            <ImageButton disabled={!is_selected}>
                <Detail_EditImageBtnIcon />
            </ImageButton>
        </EditImageContainer>
    );
}

