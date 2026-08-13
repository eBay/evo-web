import { useState, type ReactNode } from "react";
import styles from "./icon-example.module.css";

export function IconGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}

export function IconExample({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={styles.cell}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-label={name}
        aria-expanded={open}
        className={styles.host}
        onClick={(e) => {
          e.currentTarget.focus();
          setOpen(!open);
        }}
      >
        {children}
      </button>
      {open && (
        <span role="tooltip" tabIndex={-1} className={styles.bubble}>
          {`<${name}/>`}
        </span>
      )}
    </div>
  );
}
