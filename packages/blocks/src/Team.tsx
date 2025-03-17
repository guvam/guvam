import { Linkedin, TwitterX } from "react-bootstrap-icons";

const content = [
  "/blocks/avatars/avatar-1.jpg",
  "/blocks/avatars/avatar-2.jpg",
  "/blocks/avatars/avatar-3.jpg",
  "/blocks/avatars/avatar-4.jpg",
  "/blocks/avatars/avatar-5.jpg",
  "/blocks/avatars/avatar-6.jpg",
];

export const Team = () => (
  <section>
    <hgroup className="Content Content--center">
      <h1 className="Content-heading1">The Team</h1>
      <p className="Content-text">Lorem Ipsum is simply dummy text</p>
    </hgroup>
    <ul className="Grid Grid--column-3">
      {content.map((img, i) => (
        <li className="Content" key={i}>
          <img className="Content-image Team-Avatar" src={img} />
          <p className="Content-text Content--bold">Name Surname</p>
          <p className="Content-text">Development</p>
        </li>
      ))}
    </ul>
  </section>
);

export const TeamSmall = () => (
  <section>
    <hgroup className="Content Content--center">
      <h1 className="Content-heading1">The Team</h1>
      <p className="Content-text">Lorem Ipsum is simply dummy text</p>
    </hgroup>
    <ul className="Grid Grid--column-4">
      {content.map((img, i) => (
        <li key={i}>
          <img className="Content-image Team-Avatar" src={img} />
          <p className="Content--bold">Name Surname</p>
          <p className="Content-text">Occupation</p>
        </li>
      ))}
    </ul>
  </section>
);

export const TeamCard = () => (
  <section>
    <hgroup className="Content Content--center">
      <h1 className="Content-heading1">The Team</h1>
      <p className="Content-text">Lorem Ipsum is simply dummy text</p>
    </hgroup>
    <ul className="Grid Grid--column-3">
      {content.map((img, i) => (
        <li className="Card Card--muted" key={i}>
          <div className="Card-content">
            <img className="Team-Image" src={img} />
            <p className="Content--bold">Name Surname</p>
            <p className="Content-text">Occupation</p>
            <p className="Content-text">
              <TwitterX />
              <Linkedin />
            </p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
