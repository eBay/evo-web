import type { ReactNode } from "react";
import { EvoInfotip } from "../infotip";
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
  return (
    <div className={styles.cell}>
      <EvoInfotip
        className={styles.tip}
        a11yIconText={name}
        a11yCloseText="Dismiss"
        icon={children}
      >
        {`<${name}/>`}
      </EvoInfotip>
    </div>
  );
}
