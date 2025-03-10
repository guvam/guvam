import Image from "next/image";

export const Contact = () => (
  <form className="List-stack">
    <hgroup className="Content">
      <h1 className="Content-heading1">Contact the Team</h1>
      <p className="Content-text">
        Fill out your Contact request and contact the Team for your inquiry
      </p>
    </hgroup>
    <fieldset className="Grid">
      <label className="Control">
        <span className="Control-label">First name</span>
        <input type="text" autoComplete="given-name" className="Input" placeholder="Jane" />
      </label>
      <label className="Control">
        <span className="Control-label">Last name</span>
        <input type="text" autoComplete="family-name" className="Input" placeholder="Doe" />
      </label>
      <label className="Control">
        <span className="Control-label">Company</span>
        <input type="text" name="username" className="Input" />
      </label>
      <label className="Control">
        <span className="Control-label">Email</span>
        <input type="text" name="username" className="Input" placeholder="Jane.Doe@gmail.com" />
      </label>
      <label className="Control">
        <span className="Control-label">Phone Number</span>
        <input type="text" name="username" className="Input" placeholder="+372 123 4242" />
      </label>
      <label className="Control">
        <span className="Control-label">Inquiry Message</span>
        <textarea name="about" className="Input Input--type-textarea"></textarea>
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
      <h1 className="Content-heading1">Get in Touch</h1>
      <p className="Content-text">
        Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed.
        Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed. Sed rhoncus quis
        ultricies ac pellentesque.
      </p>
    </hgroup>
    <ul className="Grid">
      <li className="Card">
        <div className="Card-content Content">
          <h3 className="Content-heading4">New York</h3>
          <p className="Content-text">1234, New York Street</p>
          <p className="Content-text">New York, NY12345</p>
        </div>
      </li>
      <li className="Card">
        <div className="Card-content Content">
          <h3 className="Content-heading4">Los Angeles</h3>
          <p className="Content-text">1234, Los Angeles Street </p>
          <p className="Content-text">Los Angeles, CA12345</p>
        </div>
      </li>
      <li className="Card">
        <div className="Card-content Content">
          <h3 className="Content-heading4">Toronto</h3>
          <p className="Content-text">1234, Toronto Street</p>
          <p className="Content-text">Toronto, TO12345</p>
        </div>
      </li>
    </ul>
  </div>
);

export const ContactCards = () => (
  <article className="List-stack">
    <hgroup className="Content">
      <h1 className="Content-heading1">Get in Touch</h1>
      <p className="Content-text">
        Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed.
        Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed. Sed rhoncus quis
        ultricies ac pellentesque.
      </p>
    </hgroup>
    <ul className="Grid">
      <li className="Card">
        <div className="Card-content Content">
          <h3 className="Content-heading3">Collab</h3>
          <p className="Content-text">+372 123 45 678</p>
          <a className="Content-link">Collab@email.com</a>
        </div>
      </li>
      <li className="Card">
        <div className="Card-content Content">
          <h3 className="Content-heading3">Collab</h3>
          <p className="Content-text">+372 123 45 678</p>
          <a className="Content-link">Collab@email.com</a>
        </div>
      </li>
      <li className="Card">
        <div className="Card-content Content">
          <h3 className="Content-heading3">Collab</h3>
          <p className="Content-text">+372 123 45 678</p>
          <a className="Content-link">Collab@email.com</a>
        </div>
      </li>
      <li className="Card">
        <div className="Card-content Content">
          <h3 className="Content-heading3">Collab</h3>
          <p className="Content-text">+372 123 45 678</p>
          <a className="Content-link">Collab@email.com</a>
        </div>
      </li>
    </ul>
  </article>
);

export const ContactSplit = () => (
  <div className="List-stack">
    <hgroup className="Content">
      <h1 className="Content-heading1">Get in Touch</h1>
      <p className="Content-text">
        Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque. Quam nunc nunc eu sed.
        Sed rhoncus quis ultricies ac pellentesque.
      </p>
      <div className="Content">
        <p className="Content-text">111, Diamond City, Commonwealth</p>
        <p className="Content-text">+372 12 345 678</p>
        <p className="Content-text">Jane.Doe@gmail.com</p>
      </div>
    </hgroup>
    <form>
      <fieldset className="Grid">
        <label className="Control">
          <span className="Control-label">First name</span>
          <input type="text" autoComplete="given-name" className="Input" placeholder="Jane" />
        </label>
        <label className="Control">
          <span className="Control-label">Last name</span>
          <input type="text" autoComplete="family-name" className="Input" placeholder="Doe" />
        </label>
        <label className="Control">
          <span className="Control-label">Company</span>
          <input type="text" name="username" className="Input" />
        </label>
        <label className="Control">
          <span className="Control-label">Email</span>
          <input type="text" name="username" className="Input" placeholder="Jane.Doe@gmail.com" />
        </label>
        <label className="Control">
          <span className="Control-label">Phone Number</span>
          <input type="text" name="username" className="Input" placeholder="+372 123 4242" />
        </label>
        <label className="Control">
          <span className="Control-label">Inquiry Message</span>
          <textarea name="about" className="Input Input--type-textarea"></textarea>
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
  <article className="List-stack">
    <form>
      <fieldset className="Grid">
        <label className="Control">
          <span className="Control-label">First name</span>
          <input type="text" autoComplete="given-name" className="Input" placeholder="Jane" />
        </label>
        <label className="Control">
          <span className="Control-label">Last name</span>
          <input type="text" autoComplete="family-name" className="Input" placeholder="Doe" />
        </label>
        <label className="Control">
          <span className="Control-label">Company</span>
          <input type="text" name="username" className="Input" />
        </label>
        <label className="Control">
          <span className="Control-label">Email</span>
          <input type="text" name="username" className="Input" placeholder="Jane.Doe@gmail.com" />
        </label>
        <label className="Control">
          <span className="Control-label">Phone Number</span>
          <input type="text" name="username" className="Input" placeholder="+372 123 4242" />
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
    <div className="Contact-Image-Form">
      <Image
        className="Image"
        src="/blocks/profile/Kat.jpg"
        alt="Placeholder"
        width={736}
        height={839}
      />
    </div>
  </article>
);
