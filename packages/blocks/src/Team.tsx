import { Linkedin, TwitterX } from "react-bootstrap-icons";

const content = [1, 2, 3, 4, 5, 6];

export const Team = () => (
  <section>
    <hgroup className="Content Content--center">
      <h1 className="Content-heading1">The Team</h1>
      <p className="Content-text">Lorem Ipsum is simply dummy text</p>
    </hgroup>
    <ul className="Grid Grid--column-3">
      {content.map((x) => (
        <li className="Content" key={x}>
          <img className="Content-image Team-Avatar" src="/blocks/profile/Kat.jpg" />
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
      {content.map((x) => (
        <li key={x}>
          <img className="Content-image Team-Avatar" src="/blocks/profile/Kat.jpg" />
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
      {content.map((x) => (
        <li className="Card" key={x}>
          <div className="Card-content">
            <img className="Team-Image" src="/blocks/profile/Kat.jpg" />
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
