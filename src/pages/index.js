import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import DiscordIcon from '../icons/discord.svg';
import SuperhiveIcon from '../icons/superhive.svg';

const features = [
  {
    title: 'Seam Edge Loop',
    status: 'Documented',
    href: '/operators/modal-operators/seam-edge-loop',
    text: 'Hover an edge, preview the loop, and mark a seam without crossing existing seam borders.',
  },
  {
    title: 'Mark Around Flat',
    status: 'Documented',
    href: '/operators/modal-operators/mark-around-flat',
    text: 'Mark the boundary around a linked flat area, with hover preview and angle/grow controls.',
  },
  {
    title: 'Tube Seam',
    status: 'Documented',
    href: '/operators/modal-operators/tube-seam',
    text: 'Create cylindrical seam cuts from a seed edge, including grow and auto-grow workflows.',
  },
  {
    title: 'Draw Path Seam',
    status: 'Documented',
    href: '/operators/modal-operators/draw-path-seam',
    text: 'Draw a seam path across mesh edges with direct viewport feedback and modal controls.',
  },
  {
    title: 'Mark / Clear Seam',
    status: 'Documented',
    href: '/operators/actions/mark-clear-seam',
    text: 'Quickly toggle Blender seam state from selected mesh edges.',
  },
  {
    title: 'Re-Unwrap',
    status: 'Documented',
    href: '/operators/actions/reunwrap',
    text: 'Force re-unwrap the whole mesh using Easeam settings after seam changes.',
  },
  {
    title: 'Around Flat Selection',
    status: 'Documented',
    href: '/operators/non-modal-operators/around-flat-selection',
    text: 'Mark flat-area boundaries from the current selection without entering the modal workflow.',
  },
  {
    title: 'Limit Loop Selection',
    status: 'Documented',
    href: '/operators/non-modal-operators/limit-loop-selection',
    text: 'Create seam loops from selected edges for quick non-modal loop marking.',
  },
  {
    title: 'Tube Seam Selection',
    status: 'Documented',
    href: '/operators/non-modal-operators/tube-seam-selection',
    text: 'Apply tube seam logic from selected edges when a direct action is faster than a modal pass.',
  },
  {
    title: 'Tri-Planar Unwrap',
    status: 'Documented',
    href: '/operators/actions/triplanar-unwrap',
    text: 'Project faces into six directional UV groups, useful for blockout and hard-surface assets.',
  },
  {
    title: 'Auto Unwrap & Seam',
    status: 'Documented',
    href: '/operators/non-modal-operators/auto-unwrap-and-seam',
    text: 'Use Smart UV Project, then convert generated UV island borders into seams.',
  },
  {
    title: 'Seam by Sharp Edge',
    status: 'Documented',
    href: '/operators/non-modal-operators/seam-by-sharp-edge',
    text: 'Turn marked sharp edges or angle-based sharp edges into UV seams.',
  },
  {
    title: 'Auto Seam By Y Verts',
    status: 'Documented',
    href: '/operators/non-modal-operators/auto-seam-by-y-verts',
    text: 'Detect Y-vertex seam candidates and mark practical split lines for UV preparation.',
  },
  {
    title: 'Seams From UV Islands',
    status: 'Documented',
    href: '/operators/non-modal-operators/seam-from-uv-islands',
    text: 'Convert existing UV island borders back into mesh seams for cleanup or iteration.',
  },
  {
    title: 'UV Maps Manager',
    status: 'Documented',
    href: '/operators/uv-maps/overview',
    text: 'Manage multiple UV channels across objects with the original Easeam workflow.',
  },
];

function FeatureCard({title, text, href}) {
  return (
    <Link className="featureCard" to={href}>
      <span>
        <h3>{title}</h3>
        <p>{text}</p>
      </span>
    </Link>
  );
}

const communityLinks = [
  {
    title: 'Superhive',
    label: 'Superhive, formerly Blender Market',
    href: 'https://superhivemarket.com/products/easeam',
    icon: SuperhiveIcon,
  },
  {
    title: 'Discord',
    label: 'Join our Discord',
    href: 'https://discord.gg/MznXAXeYQN',
    icon: DiscordIcon,
  },
];

function ExternalLinkIcon() {
  return (
    <svg className="buttonIcon" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

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
                A focused Blender UV toolkit with multiple methods to speed up seam and UV
                workflows. Use viewport previews, modal marking tools, UV map management,
                and unwrap actions to handle common prep jobs without breaking your flow.
              </p>
              <div className="heroActions">
                <a
                  className="button button--product button--lg"
                  href="https://superhivemarket.com/products/easeam"
                  target="_blank"
                  rel="noopener noreferrer">
                  Get Easeam
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <aside className="workflowPanel">
              <h2>Built around viewport flow</h2>
              <ul className="workflowList">
                <li>
                  <strong>Easy marking seam.</strong> Mark seams directly from the viewport with fast preview and commit controls.
                </li>
                <li>
                  <strong>Modal operator available.</strong> Work interactively with modal tools for Mark Around Flat, Tube Seam, and seam loops.
                </li>
                <li>
                  <strong>Easy managing UV channel.</strong> Add, rename, clean, and align UV maps across multiple selected objects.
                </li>
              </ul>
            </aside>
          </div>
        </section>
        <section className="sectionSeparator" aria-hidden="true" />

        <section className="sectionBand" id="features">
          <div className="container">
            <h2>Feature Map</h2>
            <div className="featureGrid">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
            <p className="visualNotice">
              Visuals may differ between Blender and Easeam versions, but the function and usage flow remain the same.
            </p>
          </div>
        </section>

        <section id="community-links" className="sectionBand sectionBand--support">
          <div className="container">
            <h2>Get Easeam & Support</h2>
            <div className="communityLinkGrid">
              {communityLinks.map((item) => (
                <a key={item.title} className="communityLinkCard" href={item.href}>
                  <span className="communityLinkIcon">
                    <item.icon className="assetIcon" aria-hidden="true" />
                  </span>
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
