import { Notification } from "@guvam/components";
import type { FC, ReactNode } from "react";
import { XLg } from "react-bootstrap-icons";

import { ComponentBlock } from "@/components/ComponentBlock";

export const NotificationSection: FC = () => (
  <ComponentBlock id="notification">
    <TemplateNotification />
  </ComponentBlock>
);

const NotificationItem: FC<{ children: ReactNode }> = (props) => (
  <div className="Notification">
    <div className="Notification-content">{props.children}</div>
    <button className="Button Button--icon Button--type-text">
      <XLg size={12} />
    </button>
  </div>
);

const TemplateNotification: FC = () => (
  <>
    <Notification id="n1" modal={true}>
      <button className="Button">Notify</button>
      <div className="Notification-position Notification-position--topLeft">
        <NotificationItem>
          <p>This</p>
        </NotificationItem>
        <NotificationItem>
          <p>
            This is a message in the Notification Bar. This is a message in the Notification Bar.
            This is a message in the Notification Bar. This is a message in the Notification Bar.{" "}
          </p>
        </NotificationItem>
      </div>
    </Notification>
    <Notification id="n2" modal={true}>
      <button className="Button">Notify</button>
      <div className="Notification-position Notification-position--topRight">
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
      </div>
    </Notification>
    <Notification id="n3" modal={true} timer={8}>
      <button className="Button">Notify</button>
      <div className="Notification-position Notification-position--bottomLeft">
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
      </div>
    </Notification>
    <Notification id="n4" modal={true} timer={6}>
      <button className="Button">Notify</button>
      <div className="Notification-position Notification-position--bottomRight">
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
        <NotificationItem>
          <p>This is a message in the Notification Bar</p>
        </NotificationItem>
      </div>
    </Notification>
  </>
);
