import type { ButtonHTMLAttributes, FC, MenuHTMLAttributes, ReactElement, ReactNode } from "react";

export const Menu: FC<{ children: ReactNode } & MenuHTMLAttributes<HTMLMenuElement>> = ({
  children,
  ...props
}) => <menu {...props}>{children}</menu>;

export const MenuItem: FC<
  {
    icon?: ReactElement;
    info?: string;
    children: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ icon, info, children, ...props }) => (
  <li>
    <button className="Menu-item" {...props}>
      <div className="Menu-itemIcon">{icon}</div>
      <div className="Menu-itemContent">{children}</div>
      {info && (
        <div className="Menu-itemInfo" aria-keyshortcuts={info}>
          {info}
        </div>
      )}
    </button>
  </li>
);

export const MenuSeparator: FC = () => (
  <li>
    <hr className="Menu-separator" />
  </li>
);
