import Link from "next/link";
import styles from "./button.module.sass";

export const IconTypes = {
  ARROW_RIGHT: "ARROW_RIGHT",
};

const Button = (props) => {
  if (props.href) {
    return (
      <Link className={styles.button} href={props.href}>
        {props.children}
        <Button.Icon iconType={props.icon} />
      </Link>
    );
  }

  return <button className={styles.button}>{props.children}</button>;
};

Button.Icon = ({ iconType }) => {
  if (iconType === "ARROW_RIGHT") {
    return (
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          fill="currentColor"
          d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
        />
      </svg>
    );
  }

  return null;
};

Button.Icon.displayName = "Icon";

export default Button;
