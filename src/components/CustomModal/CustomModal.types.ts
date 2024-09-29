import { TypeContent } from "../PageHome/PageHome";

export interface CustomModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: TypeContent;
}
