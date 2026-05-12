import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const features = [
  {
    title: 'Mark Around Flat',
    status: 'Documented',
    href: '/operators/modal-operators/mark-around-flat',
    text: 'Mark the boundary around a linked flat area, with hover preview and angle/grow controls.',
  },
  {
    title: 'Seam Edge Loop',
    status: 'Coming soon',
    href: '/operators/modal-operators/seam-edge-loop',
    text: 'Hover an edge, preview the loop, and mark a seam without crossing existing seam borders.',
  },
  {
    title: 'Tube Seam',
    status: 'Documented',
    href: '/operators/modal-operators/tube-seam',
    text: 'Create cylindrical seam cuts from a seed edge, including grow and auto-grow workflows.',
  },
  {
    title: 'Mark / Clear Seam',
    status: 'Coming soon',
    href: '/operators/actions/mark-clear-seam',
    text: 'Quickly toggle Blender seam state from selected mesh edges.',
  },
  {
    title: 'Re-Unwrap',
    status: 'Coming soon',
    href: '/operators/actions/reunwrap',
    text: 'Run a fast unwrap pass using Easeam settings after seam changes.',
  },
  {
    title: 'Tri-Planar Unwrap',
    status: 'Coming soon',
    href: '/operators/actions/triplanar-unwrap',
    text: 'Project faces into six directional UV groups, useful for blockout and hard-surface assets.',
  },
  {
    title: 'Auto Unwrap & Seam',
    status: 'Coming soon',
    href: '/operators/non-modal-operators/auto-unwrap-and-seam',
    text: 'Use Smart UV Project, then convert generated UV island borders into seams.',
  },
  {
    title: 'Seam by Sharp Edge',
    status: 'Coming soon',
    href: '/operators/non-modal-operators/seam-by-sharp-edge',
    text: 'Turn marked sharp edges or angle-based sharp edges into UV seams.',
  },
  {
    title: 'UV Map Tools',
    status: 'Coming soon',
    href: '/operators/uv-maps/overview',
    text: 'Add, delete, rename, prune, compare, and align UV map channels across mesh selections.',
  },
];

function FeatureCard({title, text, status, href}) {
  return (
    <Link className="featureCard" to={href}>
      <span>
        <h3>{title}</h3>
        <p>{text}</p>
      </span>
      <span className="featureBadge">{status}</span>
    </Link>
  );
}

function MarketIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.6 9.2 7.4 5h9.2l.8 4.2" />
      <path d="M5 9.2h14l-1.1 10.3H6.1L5 9.2Z" />
      <path d="M9 12.2V8.1a3 3 0 0 1 6 0v4.1" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8.7 17.4c-1.2-.4-2.2-1-3.1-1.8.2-3.7 1.1-6.4 2.8-8.6 1.1-.5 2.2-.8 3.4-.9l.3.7c1.3-.2 2.6-.2 3.9 0l.3-.7c1.2.1 2.3.4 3.4.9 1.7 2.2 2.6 4.9 2.8 8.6-.9.8-1.9 1.4-3.1 1.8l-.7-1.1c.4-.1.8-.3 1.2-.6-2.4 1.1-5.4 1.1-7.8 0 .4.3.8.5 1.2.6l-.6 1.1Z" />
      <path d="M10.1 13.6c.7 0 1.2-.6 1.2-1.3s-.5-1.3-1.2-1.3-1.2.6-1.2 1.3.5 1.3 1.2 1.3Z" />
      <path d="M15.9 13.6c.7 0 1.2-.6 1.2-1.3s-.5-1.3-1.2-1.3-1.2.6-1.2 1.3.5 1.3 1.2 1.3Z" />
    </svg>
  );
}

const communityLinks = [
  {
    title: 'Superhive',
    label: 'Superhive, formerly Blender Market',
    href: 'https://superhivemarket.com/products/easeam',
    icon: <MarketIcon />,
  },
  {
    title: 'Discord',
    label: 'Join the Easeam Discord server',
    href: 'https://discord.gg/MznXAXeYQN',
    icon: <DiscordIcon />,
  },
];

export default function Home() {
  return (
    <Layout
      title="Easeam 2 Documentation"
      description="Easeam 2 documentation for Blender UV seam marking and unwrap operators">
      <main>
        <section className="heroShell">
          <div className="container heroGrid">
            <div>
              <h1 className="heroTitle">Easeam 2</h1>
              <p className="developmentNotice">
                Documentation in development. Easeam 2 has not been released yet.
              </p>
              <p className="heroLead">
                A focused Blender UV toolkit for artists who want seam marking to feel direct,
                visual, and fast. Easeam keeps common UV prep jobs close to the viewport:
                hover to preview, click to commit, then unwrap with the same settings you already use.
              </p>
              <div className="heroActions">
                <Link className="button button--accent button--lg" to="/operators/modal-operators/mark-around-flat">
                  Open Mark Around Flat
                </Link>
                <Link className="button button--quiet button--lg" to="/operators/modal-operators/mark-around-flat">
                  Browse features
                </Link>
              </div>
            </div>
            <aside className="workflowPanel">
              <h2>Built around viewport flow</h2>
              <ul className="workflowList">
                <li>
                  <strong>Preview first.</strong> Modal tools show the seam result before it is committed.
                </li>
                <li>
                  <strong>Respect existing islands.</strong> Operators avoid crossing seams that already define UV boundaries.
                </li>
                <li>
                  <strong>Unwrap when needed.</strong> Choose no unwrap, selected unwrap, or live unwrap depending on the mesh.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="features" className="sectionBand">
          <div className="container">
            <h2>Feature Map</h2>
            <p>
              This is the starting index for the operator docs. For now, Mark Around Flat and Tube Seam
              are complete example pages; the rest already have folders prepared for future GIFs and notes.
            </p>
            <div className="featureGrid">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="community-links" className="sectionBand">
          <div className="container">
            <h2>Get Easeam & Support</h2>
            <div className="communityLinkGrid">
              {communityLinks.map((item) => (
                <a key={item.title} className="communityLinkCard" href={item.href}>
                  <span className="communityLinkIcon">{item.icon}</span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.label}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
