export const FeaturesList = () => (
  <section className="List-stack Util--gap-4">
    <hgroup className="Content Content--center">
      <p className="Title-info">Deploy faster</p>
      <h2 className="Content-heading1">Everything you need to deploy your app</h2>
      <p className="Content-text">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
        elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
      </p>
    </hgroup>
    <ul className="Grid Grid--column-4">
      {[1, 2, 3, 4].map((x) => (
        <li key={x}>
          <b className="Content-heading4">Functionalities of Linkedin.</b>
          <p className="Content-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
            suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
        </li>
      ))}
    </ul>
  </section>
);
