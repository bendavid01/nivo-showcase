import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Leaf,
  Smartphone,
  SlidersHorizontal,
} from "lucide-react";
import { site, release } from "../config/site";

function Visual({ hero = false }: { hero?: boolean }) {
  const asset = site.screenshots[0];
  return (
    <figure className={hero ? "hero-visual" : ""}>
      <Image
        src={asset.src}
        alt={asset.alt}
        width={1024}
        height={1536}
        priority={hero}
        sizes="(max-width: 760px) 100vw, 55vw"
      />
      <figcaption>{asset.caption}</figcaption>
    </figure>
  );
}
export default function Home() {
  const appUrl = release.status === "released" ? release.androidUrl : null;
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="flex items-center justify-between">
        <a className="wordmark" href="#" aria-label="Nivo home">
          nivo<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#vision">The vision</a>
          <a href="#experience">The experience</a>
          <a href="#development">
            What’s next <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {release.label}
            </p>
            <h1>
              Money feels
              <br />
              better with
              <br />
              <em>a little clarity.</em>
            </h1>
            <p className="intro">
              A calmer way to see your money.
              <br />A little less noise. A little more Nivo.
            </p>
            <div className="hero-actions">
              <a className="button" href="#experience">
                Meet Nivo <ArrowUpRight size={18} />
              </a>
              <a className="quiet-link" href="#vision">
                Our philosophy
              </a>
            </div>
            <p className="micro">Thoughtfully taking shape for Android.</p>
          </div>
          <Visual hero />
          <a className="scroll" href="#vision">
            <ArrowDown size={16} /> A calmer way forward
          </a>
        </section>
        <section id="vision" className="vision section">
          <p className="eyebrow">01 / A LITTLE SPACE TO BREATHE</p>
          <h2>
            Life has enough
            <br />
            on its mind.
            <br />
            <span>
              Money shouldn’t
              <br />
              take all of yours.
            </span>
          </h2>
          <div className="vision-copy">
            <p>
              An account here. A card there. A hundred little moments in
              between.
            </p>
            <p>
              Nivo begins with a simple idea: understanding your money should
              feel natural. Clear enough to make sense of your day, gentle
              enough to let you get on with it.
            </p>
            <p className="signature">Clarity, without the pressure.</p>
          </div>
        </section>
        <section id="experience" className="experience section">
          <div className="section-top">
            <p className="eyebrow">02 / THE EXPERIENCE WE’RE DESIGNING</p>
            <h2>
              Your everyday picture.
              <br />
              <em>Beautifully in view.</em>
            </h2>
            <p>One thoughtful home for the moments that make up your money.</p>
          </div>
          <div className="experience-grid">
            <Visual />
            <div className="feature-story">
              {site.features.map((feature, i) => (
                <article key={feature.title}>
                  <span className="feature-number">0{i + 1}</span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.copy}</p>
                    <small>Planned experience</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="philosophy section">
          <p className="eyebrow">03 / BUILT AROUND A HUMAN</p>
          <h2>
            More perspective.
            <br />
            <span>Less pressure.</span>
          </h2>
          <div className="values">
            {[
              {
                Icon: Leaf,
                title: "Calm over clutter",
                copy: "Space to understand. Language that feels familiar. The essentials, given room to breathe.",
              },
              {
                Icon: SlidersHorizontal,
                title: "Your decisions, your pace",
                copy: "We’re designing for understanding and choice, without scores to chase or guilt to carry.",
              },
              {
                Icon: Smartphone,
                title: "Android, thoughtfully",
                copy: "An experience shaped for Android from the start, with care for the details of everyday use.",
              },
            ].map(({ Icon, title, copy }) => (
              <article key={title}>
                <Icon size={24} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="development" className="development section">
          <div>
            <p className="eyebrow">04 / GOOD THINGS TAKE CARE</p>
            <h2>
              A little closer
              <br />
              <em>every day.</em>
            </h2>
            <p className="development-label">
              <span className="status-dot" />
              {release.label}
            </p>
            <p className="development-copy">{release.description}</p>
            {appUrl ? (
              <a
                className="button"
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Nivo for Android <ArrowUpRight size={18} />
              </a>
            ) : (
              <a
                className="button"
                href={site.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the website project <ArrowUpRight size={18} />
              </a>
            )}
          </div>
          <div className="timeline">
            {[
              {
                title: "Shape the vision",
                copy: "A warm, human-first direction for everyday financial clarity.",
                status: "Design direction",
              },
              {
                title: "Build with care",
                copy: "Turn the intended experience into an Android app, then validate it through development and testing.",
                status: "Development journey",
              },
              {
                title: "Share when it’s ready",
                copy: "Confirmed release details and an official Android app link will appear here when available.",
                status: "No release date announced",
              },
            ].map((item, i) => (
              <article key={item.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <small>{item.status}</small>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="closing">
          <p className="eyebrow">YOUR MONEY. A LITTLE MORE HUMAN.</p>
          <h2>
            Make room
            <br />
            for <em>living.</em>
          </h2>
          <a className="quiet-link" href="#">
            Back to the beginning ↑
          </a>
        </section>
      </main>
      <footer>
        <a className="wordmark" href="#">
          nivo<span>.</span>
        </a>
        <p>
          {release.label}
          <br />
          <small>
            Concept visuals. Fictional data. Final experience may change.
          </small>
        </p>
        <a href={site.sourceUrl} target="_blank" rel="noopener noreferrer">
          The website project <ArrowUpRight size={14} />
        </a>
      </footer>
    </>
  );
}
