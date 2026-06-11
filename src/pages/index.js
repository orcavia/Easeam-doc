import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import DiscordIcon from '../icons/discord.png';
import GumroadIcon from '../icons/gumroad.png';
import SuperhiveIcon from '../icons/superhive.png';

const superhiveUrl = 'https://superhivemarket.com/products/easeam-2';
const gumroadUrl = 'https://orcavia.gumroad.com/l/easeam2';
const discordUrl = 'https://discord.gg/MznXAXeYQN';

const seoKeywords = [
  'Easeam 2',
  'Blender add-on',
  'Blender addon',
  'UV seam marking',
  'Blender unwrap',
  'UV unwrap',
  'UV mapping',
  'UV map management',
  'UV island cleanup',
  'seam tools',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Easeam 2 Blender UV Seam & Unwrap Documentation',
  description:
    'Documentation for Easeam 2, a Blender add-on for UV seam marking, unwrap workflows, UV island cleanup, and UV map management.',
  url: 'https://orcavia.dev/Easeam-doc/',
  about: [
    'Blender add-on',
    'UV seam marking',
    'UV unwrap workflow',
    'UV map management',
    'UV island cleanup',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Orcavia',
    url: 'https://orcavia.dev/',
  },
};

const topicChips = [
  'Blender add-on',
  'UV seam marking',
  'Unwrap workflow',
  'UV map management',
  'UV island cleanup',
  'Modal seam tools',
];

const features = [
  {
    title: 'Seam Edge Loop',
    status: 'Documented',
    href: '/operators/modal-operators/seam-edge-loop',
    text: 'Mark Blender UV seam loops from a hovered edge without crossing existing seam borders.',
  },
  {
    title: 'Mark Around Flat',
    status: 'Documented',
    href: '/operators/modal-operators/mark-around-flat',
    text: 'Create UV seams around linked flat regions with hover preview and angle/grow controls.',
  },
  {
    title: 'Tube Seam',
    status: 'Documented',
    href: '/operators/modal-operators/tube-seam',
    text: 'Create cylindrical seam cuts for tube-like meshes, including grow and auto-grow workflows.',
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
    text: 'Quickly toggle Blender UV seam state from selected mesh edges.',
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
    text: 'Use Smart UV Project, then convert generated UV island borders into Blender seams.',
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
    text: 'Manage multiple Blender UV channels across selected objects with the original Easeam workflow.',
  },
];

const useCases = [
  {
    title: 'Blender UV seam marking addon',
    href: '/operators/modal-operators/seam-edge-loop',
    text: 'Start with modal seam tools for edge loops, flat regions, tube cuts, and drawn seam paths.',
  },
  {
    title: 'Fast unwrap workflow',
    href: '/operators/actions/reunwrap',
    text: 'Pair seam changes with Re-Unwrap and shared unwrap settings for faster iteration in Blender.',
  },
  {
    title: 'UV island cleanup',
    href: '/operators/non-modal-operators/seam-from-uv-islands',
    text: 'Convert UV island borders back into mesh seams when refining existing UV layouts.',
  },
  {
    title: 'UV map management',
    href: '/operators/uv-maps/overview',
    text: 'Add, rename, clean, compare, and activate UV channels across selected mesh objects.',
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

function UseCaseCard({title, text, href}) {
  return (
    <Link className="useCaseCard" to={href}>
      <h3>{title}</h3>
      <p>{text}</p>
    </Link>
  );
}

const communityLinks = [
  {
    title: 'Superhive',
    label: 'Superhive, formerly Blender Market',
    href: superhiveUrl,
    icon: SuperhiveIcon,
  },
  {
    title: 'Gumroad',
    label: 'Buy Easeam 2 on Gumroad',
    href: gumroadUrl,
    icon: GumroadIcon,
  },
  {
    title: 'Discord',
    label: 'Join our Discord',
    href: discordUrl,
    icon: DiscordIcon,
  },
];

function ProductButton({href, icon, children}) {
  return (
    <a
      className="button button--product button--lg"
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <img className="productButtonIcon" src={icon} alt="" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

export default function Home() {
  return (
    <Layout
      title="Easeam 2 Blender UV Seam & Unwrap Documentation"
      description="Easeam 2 documentation for Blender UV seam marking, unwrap workflows, UV island cleanup, and UV map management.">
      <Head>
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main>
        <section className="heroShell">
          <div className="container heroGrid">
            <div>
              <h1 className="heroTitle">Easeam 2</h1>
              <p className="developmentNotice">
                Easeam 2 is now available on Superhive and Gumroad. Documentation is still being expanded.
              </p>
              <p className="heroLead">
                Easeam 2 is a Blender add-on for faster UV seam marking, unwrap workflows,
                UV island cleanup, and UV map management. Use viewport previews, modal seam
                tools, and unwrap actions to handle common UV prep jobs without breaking
                your flow.
              </p>
              <div className="topicChips" aria-label="Easeam documentation topics">
                {topicChips.map((topic) => (
                  <span key={topic} className="topicChip">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="heroActions">
                <ProductButton href={superhiveUrl} icon={SuperhiveIcon}>
                  Get on Superhive
                </ProductButton>
                <ProductButton href={gumroadUrl} icon={GumroadIcon}>
                  Get on Gumroad
                </ProductButton>
              </div>
            </div>
            <aside className="workflowPanel">
              <h2>Built around viewport flow</h2>
              <ul className="workflowList">
                <li>
                  <strong>Blender UV seam marking.</strong> Mark seams directly from the viewport with fast preview and commit controls.
                </li>
                <li>
                  <strong>Interactive unwrap workflow.</strong> Combine modal tools, selection-based operators, and re-unwrap actions.
                </li>
                <li>
                  <strong>UV map management.</strong> Add, rename, clean, and align UV channels across multiple selected objects.
                </li>
              </ul>
            </aside>
          </div>
        </section>
        <section className="sectionSeparator" aria-hidden="true" />

        <section className="sectionBand sectionBand--seo" id="blender-uv-workflow">
          <div className="container">
            <p className="sectionEyebrow">Blender UV workflow docs</p>
            <h2>Seam marking, unwrap passes, and UV map cleanup in one documentation hub</h2>
            <p className="sectionLead">
              These guides cover practical UV preparation in Blender: marking seams, defining
              UV island borders, re-unwrapping after seam changes, and managing UV maps across
              selected mesh objects. Use them as the reference path for learning what each
              Easeam operator does and when to use it.
            </p>
            <div className="useCaseGrid">
              {useCases.map((useCase) => (
                <UseCaseCard key={useCase.title} {...useCase} />
              ))}
            </div>
          </div>
        </section>

        <section className="sectionBand" id="features">
          <div className="container">
            <p className="sectionEyebrow">Operator reference</p>
            <h2>Easeam 2 Blender UV tools</h2>
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
                <a
                  key={item.title}
                  className="communityLinkCard"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="communityLinkIcon">
                    <img className="assetIcon" src={item.icon} alt="" aria-hidden="true" />
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
