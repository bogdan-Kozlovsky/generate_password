export type ArrayType = Array<number | string>;
export type PasswordType = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

export interface IIconProps {
  size?: string;
  color?: string;
}
