export const FeaturesList = () => (
  <section className="List-stack Util--gap-4">
    <hgroup className="Content Util--center">
      <p className="Title-info">Deploy faster</p>
      <h2>Everything you need to deploy your app</h2>
      <p>
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
        elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
      </p>
    </hgroup>
    <ul className="Grid Grid--column-4">
      {[1, 2, 3, 4].map((x) => (
        <li key={x}>
          <h4>Functionalities of Linkedin.</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
            suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export const FeaturesListAlt = () => (
  <section className="List-stack Util--gap-4">
    <ul className="Grid Grid--column-4">
      <li>
        <h3 className="Header">Functionalities of Linkedin.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
          suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </p>
      </li>
      <li>
        <h3 className="Header">Functionalities of Linkedin.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
          suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </p>
      </li>
      <li>
        <h3 className="Header">Functionalities of Linkedin.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
          suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </p>
      </li>
      <li>
        <h3 className="Header">Functionalities of Linkedin.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
          suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </p>
      </li>
    </ul>
  </section>
);
