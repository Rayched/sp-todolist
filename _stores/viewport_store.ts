//Viewport_store
/**
 * 현재 브라우저의 viewport-width 값을 전역 상태 저장
 * 모바일, 태블릿, 데스크탑 별 반응형 디자인 구현하기 위해
 * 만든 zustand store
 */

import { create } from "zustand";

interface I_ViewportStore {
    NowViewportWidth: number;
    setNowViewportWidth: (NewWidthValue: number) => void;
};

export const ViewportStore = create<I_ViewportStore>((set) => ({
    NowViewportWidth: 0,
    setNowViewportWidth: (NewWidthValue) => set({NowViewportWidth: NewWidthValue})
}));