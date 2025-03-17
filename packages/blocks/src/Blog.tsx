import Image from "next/image";

export const Blog = () => (
  <ul className="Grid">
    {[1, 2, 3, 4].map((x) => (
      <li key={x} className="Card Grid--span-2 Card--muted">
        <article className="Card-content">
          <hgroup>
            <time className="Content-text">Jan 16, 2025</time>
            <span className="Badge Badge--outline">Marketing</span>
          </hgroup>
          <div className="Content Content-text">
            <h3 className="Content-heading4">Neque porro quisquam est</h3>
            <p className="Content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida consequat metus
              non dictum. Etiam arcu odio, efficitur eget vehicula vitae, consequat et diam.
            </p>
          </div>
          <div className="List">
            <div className="Avatar">
              <Image
                className="Avatar-image"
                src="/blocks/avatars/avatar-2.jpg"
                alt="Profile Image of Jane Doe"
                width={24}
                height={24}
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
  <section className="List-stack" style={{ gap: "2rem" }}>
    <div className="List List--between">
      <div className="Content-titleInfo">Recent posts</div>
      <a href="/blog" className="Content-link">
        View all
      </a>
    </div>
    <ul className="Grid" style={{ "--Grid-count": 2 } as never}>
      {[1, 2].map((i) => (
        <li key={i} className="Card Card--muted">
          <article className="Card-content Content">
            <h3 className="Content-heading4">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
            </h3>
            <time className="Content-text">16/10/2024</time>

            <p className="Content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida consequat metus
              non dictum. Etiam arcu odio, efficitur eget vehicula vitae, consequat et diam.
              Praesent dictum sem sed commodo mollis. Nulla feugiat, elit in dignissim iaculis,
              neque sapien vehicula nisi, vitae suscipit eros dolor vitae neque. Nunc in neque at
              quam vehicula dapibus sed vel lectus. Quisque fermentum enim ut placerat hendrerit.
              Maecenas rhoncus ultricies augue.
            </p>
            <a className="Content-link" href="/blog/post-01">
              Read more
            </a>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
