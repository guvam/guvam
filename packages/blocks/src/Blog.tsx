import Image from "next/image";

export const Blog = () => (
  <ul className="Grid">
    {[1, 2, 3, 4].map((x) => (
      <li key={x} className="Card Grid-columnThird">
        <article className="Card-content">
          <hgroup>
            <time className="Content-text">Jan 16, 2025</time>
            <span className="Content-badge">Marketing</span>
          </hgroup>
          <div className="Content Content-text">
            <h3 className="Content-heading4">Boost your conversion Rate</h3>
            <p className="Content-text">
              Use these Tailwind CSS blog section examples to promote interesting content from your
              company blog or content universe throughout your website. These examples are designed
              and built by the Tailwind CSS team, and include a variety of different styles and
              layouts.
            </p>
          </div>
          <div className="List">
            <div className="Avatar">
              <Image
                className="Avatar-image"
                src="/blocks/profile/Kat.jpg"
                alt="Profile Image of Jane Doe"
                width={36}
                height={36}
              />
            </div>
            <div>
              <p>Jane Doe</p>
              <p>Co-Founder / CTO</p>
            </div>
          </div>
        </article>
      </li>
    ))}
  </ul>
);

export const BlogCards = () => (
  <ul className="Grid">
    {[1, 2, 3, 4].map((i) => (
      <li className="Card Grid-columnThird" key={i}>
        <article className="Card-content">
          <hgroup>
            <h3 className="Content-heading4">Introducing Guvam Editor: Our First Test Release</h3>
            <time className="Content-text">16/10/2024</time>
          </hgroup>
          <p className="Content-text">
            Hello everyone! We&#39;re happy to finally be able to push out the first testing release
            of the Guvam Editor. Though the editor is still in its early stages, we hope you&#39;ll
            try it out, explore its features, and share your ideas and feedback on our community
            page.
          </p>
          <a className="Content-link" href="/blog/post-01">
            Read more
          </a>
        </article>
      </li>
    ))}
  </ul>
);
