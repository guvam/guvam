import Image from "next/image";

export const Contact = () => (
  <form className="List-stack">
    <hgroup className="Content">
      <h1>Contact the Team</h1>
      <p className="Content-text">
        Fill out your Contact request and contact the Team for your inquiry
      </p>
    </hgroup>
    <fieldset className="Grid Grid--column-2">
      <label className="Control">
        <span className="Control-label">First name</span>
        <div className="Input">
          <input type="text" autoComplete="given-name" placeholder="Jane" />
        </div>
      </label>
      <label className="Control">
        <span className="Control-label">Last name</span>
        <div className="Input">
          <input type="text" autoComplete="family-name" placeholder="Doe" />
        </div>
      </label>
      <label className="Control">
        <span className="Control-label">Company</span>
        <div className="Input">
          <input type="text" name="username" />
        </div>
      </label>
      <label className="Control">
        <span className="Control-label">Email</span>
        <div className="Input">
          <input type="text" name="username" placeholder="Jane.Doe@gmail.com" />
        </div>
      </label>
      <label className="Control">
        <span className="Control-label">Phone Number</span>
        <div className="Input">
          <input type="text" name="username" placeholder="+372 123 4242" />
        </div>
      </label>
      <label className="Control">
        <span className="Control-label">Inquiry Message</span>
        <div className="Input">
          <textarea name="about"></textarea>
        </div>
      </label>
      <label className="Control">
        <input type="checkbox" className="Switch" />
        <legend className="Control-label">
          By selecting this, you agree to our privacy policy.
        </legend>
      </label>
      <div>
        <button type="submit" className="Button">
          Save
        </button>
      </div>
    </fieldset>
  </form>
);

export const ContactLocation = () => (
  <div className="List-stack">
    <hgroup>
      <h2>Get in Touch</h2>
      <p>
        Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed.
        Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed. Sed rhoncus quis
        ultricies ac pellentesque.
      </p>
    </hgroup>
    <ul className="Grid Grid--column-3">
      <li className="Card Card--muted">
        <div className="Card-content Content">
          <h4>New York</h4>
          <p>1234, New York Street</p>
          <p>New York, NY12345</p>
        </div>
      </li>
      <li className="Card Card--muted">
        <div className="Card-content Content">
          <h4>Los Angeles</h4>
          <p>1234, Los Angeles Street </p>
          <p>Los Angeles, CA12345</p>
        </div>
      </li>
      <li className="Card Card--muted">
        <div className="Card-content Content">
          <h4>Toronto</h4>
          <p>1234, Toronto Street</p>
          <p>Toronto, TO12345</p>
        </div>
      </li>
    </ul>
  </div>
);

export const ContactCards = () => (
  <article className="List-stack">
    <hgroup className="Content">
      <h1>Get in Touch</h1>
      <p>
        Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed.
        Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed. Sed rhoncus quis
        ultricies ac pellentesque.
      </p>
    </hgroup>
    <ul className="Grid Grid--column-4">
      <li className="Card Card--muted">
        <div className="Card-content Content">
          <h3>Collab</h3>
          <p>+372 123 45 678</p>
          <a href="mailto:test@email.com">test@email.com</a>
        </div>
      </li>
      <li className="Card Card--muted">
        <div className="Card-content Content">
          <h3>Collab</h3>
          <p>+372 123 45 678</p>
          <a href="mailto:test@email.com">test@email.com</a>
        </div>
      </li>
      <li className="Card Card--muted">
        <div className="Card-content Content">
          <h3>Collab</h3>
          <p>+372 123 45 678</p>
          <a href="mailto:test@email.com">test@email.com</a>
        </div>
      </li>
      <li className="Card Card--muted">
        <div className="Card-content Content">
          <h3>Collab</h3>
          <p>+372 123 45 678</p>
          <a href="mailto:test@email.com">test@email.com</a>
        </div>
      </li>
    </ul>
  </article>
);

export const ContactSplit = () => (
  <div className="List-stack">
    <hgroup className="Content">
      <h1>Get in Touch</h1>
      <p>
        Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed.
        Sed rhoncus quis ultricies ac pellentesque.
      </p>
      <div className="Content">
        <p>111, Diamond City, Commonwealth</p>
        <p>+372 12 345 678</p>
        <p>Jane.Doe@gmail.com</p>
      </div>
    </hgroup>
    <form>
      <fieldset className="Grid Grid--column-3">
        <label className="Control">
          <span className="Control-label">First name</span>
          <div className="Card-content Content">
            <div className="Input">
              <input type="text" autoComplete="given-name" placeholder="Jane" />
            </div>
          </div>
        </label>
        <label className="Control">
          <span className="Control-label">Last name</span>
          <div className="Input">
            <input type="text" autoComplete="family-name" placeholder="Doe" />
          </div>
        </label>
        <label className="Control">
          <span className="Control-label">Company</span>
          <div className="Input">
            <input type="text" name="username" />
          </div>
        </label>
        <label className="Control">
          <span className="Control-label">Email</span>
          <div className="Input">
            <input type="text" name="username" placeholder="Jane.Doe@gmail.com" />
          </div>
        </label>
        <label className="Control">
          <span className="Control-label">Phone Number</span>
          <div className="Input">
            <input type="text" name="username" placeholder="+372 123 4242" />
          </div>
        </label>
        <label className="Control">
          <span className="Control-label">Inquiry Message</span>
          <div className="Input">
            <textarea name="about"></textarea>
          </div>
        </label>
        <label className="Checkbox-label">
          <input type="checkbox" className="Switch" />
          <span className="Control-label">By selecting this, you agree to our privacy policy.</span>
        </label>
        <div>
          <button type="submit" className="Button">
            Save
          </button>
        </div>
      </fieldset>
    </form>
  </div>
);

export const ContactSplitImage = () => (
  <article className="Grid Grid--column-2">
    <form>
      <fieldset className="Grid">
        <label className="Control">
          <span className="Control-label">First name</span>
          <input type="text" autoComplete="given-name" placeholder="Jane" />
        </label>
        <label className="Control">
          <span className="Control-label">Last name</span>
          <input type="text" autoComplete="family-name" placeholder="Doe" />
        </label>
        <label className="Control">
          <span className="Control-label">Company</span>
          <input type="text" name="username" />
        </label>
        <label className="Control">
          <span className="Control-label">Email</span>
          <input type="text" name="username" placeholder="Jane.Doe@gmail.com" />
        </label>
        <label className="Control">
          <span className="Control-label">Phone Number</span>
          <input type="text" name="username" placeholder="+372 123 4242" />
        </label>
        <label className="Control">
          <span className="Control-label">Inquiry Message</span>
          <textarea name="about" className="Input Input--type-textarea"></textarea>
        </label>
        <label className="Checkbox-label">
          <input type="checkbox" className="Switch" />
          <span className="Control-label">By selecting this, you agree to our privacy policy.</span>
        </label>
        <div className="Control">
          <button type="submit" className="Button">
            Save
          </button>
        </div>
      </fieldset>
    </form>

    <Image
      className="Hero-image"
      src="/blocks/avatars/avatar-2.jpg"
      alt="Placeholder"
      width={384}
      height={438}
    />
  </article>
);
