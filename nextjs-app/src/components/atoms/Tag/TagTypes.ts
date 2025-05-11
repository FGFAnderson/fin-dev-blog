export interface TagType {
  label: string;
  color?: "default" | "primary" | "secondary" | "warning" | "error" | "success";
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
}
