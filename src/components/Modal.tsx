// Modal.tsx
import React, { useEffect, useRef } from "react";

type ModalProps = {
    isModalOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
};

// 모달 창 바깥 영역 클릭 시 닫히는 효과 구현한 컴포넌트
const Modal = ({ isModalOpen, onClose, children, className }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null); // 초기값은 null, 렌더링 이후 ref={modalRef}를 통해 연결됨

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // 클릭 했을 때 모달 안쪽 영역이 아니라면 닫기
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        // 모달 열렸을 때만 이벤트 등록
        if (isModalOpen) {
            document.addEventListener("mouseup", handleClickOutside);
        }

        // 클린 업
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [isModalOpen, onClose]);

    

    return (
        <div className={className} ref={modalRef}>
            {children}
        </div>
    );
};

export default Modal;
