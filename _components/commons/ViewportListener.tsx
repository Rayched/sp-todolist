"use client"

import { ViewportStore } from "@/_stores/viewport_store";
import { useEffect } from "react";
import { useStore } from "zustand";

/**
 * 사용자가 현재 접속 중인 브라우저의 viewport-width 값을
 * 확인하고, 이를 전역 상태(ViewportStore)에 저장하는 역할을
 * 하는 ViewportListener Component
 * 프로젝트 전체에서 공통적으로 사용하기 때문에
 * root layout에서 import
 */
export default function ViewportListener(){
    const {NowViewportWidth, setNowViewportWidth} = useStore(ViewportStore);

    useEffect(() => {
        /**
         * 현재 브라우저의 width 값을 전역상태에 저장하는 함수
         */
        const WidthResized = () => {
            setNowViewportWidth(window.innerWidth);
        };

        WidthResized(); //현재 브라우저 width 값 세팅
        
        window.addEventListener("resize", WidthResized);
        /**
         * 브라우저의 너비가 변경될 때 (resize event 발생)
         * 다른 컴포넌트들에서 참조 중인 전역 상태
         * NowViewportWidth의 값이 업데이트가 되야하기에
         * 위와 같은 event listener 추가
         */

        return () => {
            window.removeEventListener("resize", WidthResized);
            /**
             * 해당 컴포넌트가 unmount 됐을 때
             * event listener가 그대로 남아있으면
             * 다른 웹 사이트에서 충돌이 발생할 수도 있으니
             * 이를 방지하기 위해 unmount 시 event listener delete
             */
        };
    }, []);

    return null;
}