import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
