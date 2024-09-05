export interface ButtonProps {
    text: string; 
    onClick?: () => void;
    style?: React.CSSProperties;
}

export interface InputFieldProps {
    type?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
  } 