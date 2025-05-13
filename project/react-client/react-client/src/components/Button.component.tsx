import classes from "./Button.module.css";

interface ButtonProps {
  label: string;
  style: "primary" | "secondary" | "danger" | "success";
  loading?: boolean;
  onClick?: () => void;
}

export function Button({ label, style, loading, onCLick }: ButtonProps) {
  return (
    <>
      <button
        onClick={onCLick}
        className={style === "primary" ? classes.primaryButton : classes.button}
      >
        {label}
      </button>
    </>
  );
}
