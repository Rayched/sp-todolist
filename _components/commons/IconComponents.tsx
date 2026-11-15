/**
 * 프로젝트 내에서 사용되는 모든 아이콘 이미지들을(svg) 
 * 모아두고 관리하는 파일
 */

//root page ('/', home, 할 일 목록 페이지)

//text 입력 X, input button icon
export function NonText_InputButtonIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12L21 12" strokeWidth="3" strokeLinecap="round" stroke="#64748B" />
            <path d="M12 21L12 3" strokeWidth="3" strokeLinecap="round" stroke="#64748B" />
        </svg>
    );
}

//text 입력 O, input button icon
export function Text_InputButtonIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8L14 8" strokeWidth="2" strokeLinecap="round" stroke="white" />
            <path d="M8 14L8 2" strokeWidth="2" strokeLinecap="round" stroke="white" />
        </svg>
    );
}

//할 일 상세 페이지
//비어있는 이미지 박스 정중앙 아이콘
/**
 * 할 일 상세 페이지 '/items/[itemId]'
 * 비어있는 이미지 박스 정중앙 아이콘
 */
export function Details_EmptyImageIcon() {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.9466 5.3335H26.6666C14.8846 5.3335 5.33331 14.8848 5.33331 26.6668V37.9735C5.33331 49.7556 14.8846 59.3068 26.6666 59.3068H37.9466C49.7287 59.3068 59.28 49.7556 59.28 37.9735V26.6668C59.28 14.8848 49.7287 5.3335 37.9466 5.3335ZM21.6533 16.3202C24.5988 16.3202 26.9866 18.708 26.9866 21.6535C26.9866 24.599 24.5988 26.9868 21.6533 26.9868C18.7078 26.9868 16.32 24.599 16.32 21.6535C16.32 18.708 18.7078 16.3202 21.6533 16.3202ZM41.36 53.6535C48.9097 50.834 53.9231 43.6325 53.9466 35.5735L53.8666 30.9868C53.8666 29.8935 53.6533 27.8402 53.6533 27.8402H49.3066C39.2437 27.8707 30.0548 33.5634 25.5466 42.5602C22.2744 39.6349 18.0424 38.0124 13.6533 38.0002H10.4266C10.1886 44.1995 13.5557 49.9776 19.0666 52.8268C21.0367 53.8763 23.2345 54.4257 25.4666 54.4268H36.5866C38.2107 54.4501 39.8263 54.1883 41.36 53.6535Z" fillRule="evenodd" clipRule="evenodd" fill="#E2E8F0" />
        </svg>
    );
}

/**
 * 할 일 상세 페이지 '/items/[itemId]'
 * 비어있는 이미지 박스 우측 하단, 이미지 추가 아이콘
 */
export function Details_AddImageBtnIcon() {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#E2E8F0" />
            <path d="M23 32L41 32" strokeWidth="3" strokeLinecap="round" stroke="#64748B" />
            <path d="M32 41L32 23" strokeWidth="3" strokeLinecap="round" stroke="#64748B" />
        </svg>
    );
}

/**
 * 할 일 상세 페이지 '/items/[itemId]'
 * 이미지 편집 버튼 아이콘
 */
export function Detail_EditImageBtnIcon() {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="31" fill="#0F172A" fillOpacity="0.5" strokeWidth="2" stroke="#0F172A" />
            <path d="M33.3098 23.866C33.586 23.3877 34.1975 23.2239 34.6758 23.5L38.0481 25.447C38.5264 25.7231 38.6903 26.3347 38.4141 26.813L31.1837 39.3366C31.072 39.5299 30.8989 39.6803 30.6919 39.7639L27.1219 41.2048C26.8183 41.3273 26.4809 41.1299 26.4389 40.8052L25.9504 37.0233C25.9223 36.8058 25.9665 36.5851 26.0761 36.3952L33.3098 23.866Z" fill="white" />
        </svg>
    );
}