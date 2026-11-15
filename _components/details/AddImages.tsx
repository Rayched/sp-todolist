"use client"

import styled from "styled-components"
import { Detail_EditImageBtnIcon, Details_AddImageBtnIcon, Details_EmptyImageIcon } from "../commons/IconComponents";
import { DetailCommons } from "./detail_commons";
import { SetStateAction, useEffect, useRef } from "react";
import { UploadImage } from "@/app/_fetchs/UploadImage";

interface I_imagesComponents {
    imgurl: string;
    setImgUrl: React.Dispatch<SetStateAction<string>>;
};

const AddImageContainer = styled(DetailCommons.img_container) <{ bgimgurl: string }>`
    border: 2px dotted #CBD5E1;
    background-color: #F8FAFC;
    background-image: ${(props) => props.bgimgurl === "" ? "none" : `URL(${props.bgimgurl})`};
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
export function AddImages({ imgurl, setImgUrl }: I_imagesComponents) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const previewUrlRef = useRef<string | null>(null);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const imageChangeEvent = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const Imagefile = e.target.files?.[0];

        if (!Imagefile) return;

        e.target.value = "";
        //동일한 이미지 파일 다시 선택 가능하도록 초기화

        /**
         * 이미지 파일 검증
         * 파일명 => 영어로만 구성됐는지 확인
         * 용량 => 5MB 이하의 이미지 파일을 업로드 했는지 체크
         */
        const FilenameRegex = /^[A-Za-z]+\.(jpg|jpeg|png|gif|webp|avif)$/i;
        const MaxSize = 5 * 1024 * 1024;

        if (!FilenameRegex.test(Imagefile.name)) {
            alert("파일 명은 영문만 사용할 수 있습니다.");
            return;
        }

        if (!Imagefile.type.startsWith('image/')) {
            alert("이미지 파일만 추가할 수 있습니다.");
            return;
        }

        if (Imagefile.size > MaxSize) {
            alert("이미지 크기는 5MB 이하여야 합니다.");
            return;
        }

        //이미지 업로드
        try {
            const getImageUrl = await UploadImage(Imagefile);
            setImgUrl(getImageUrl);
        } catch (error) {
            alert(error instanceof Error ? error.message : "이미지 업로드에 실패했습니다.");
        }
    }

    //컴포넌트 unmount될 때, 미리보기 url 정리
    useEffect(() => {
        return () => {
            if (previewUrlRef.current) {
                URL.revokeObjectURL(previewUrlRef.current);
            }
        }
    }, [])

    return (
        <AddImageContainer bgimgurl={imgurl}>
            {imgurl === "" ? <Details_EmptyImageIcon /> : null}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                hidden
                onChange={imageChangeEvent}
            />
            <ImageButton onClick={handleImageClick}>
                {imgurl === "" ? <Details_AddImageBtnIcon /> : <Detail_EditImageBtnIcon />}
            </ImageButton>
        </AddImageContainer>
    );
};
