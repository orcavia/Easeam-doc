import React from 'react';

function DiscordIcon() {
  return (
    <svg className="floatingDiscord__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.7 7.4c1.2-.9 2.4-1.3 3.7-1.5l.4.8c1.5-.2 3-.2 4.4 0l.4-.8c1.3.2 2.6.7 3.7 1.5 1.8 2.6 2.6 5.5 2.3 8.3-1.5 1.1-2.9 1.8-4.3 2.1l-1-1.4c.6-.2 1.2-.5 1.7-.8-.1-.1-.3-.2-.4-.3-3.2 1.5-6.5 1.5-9.7 0-.1.1-.3.2-.4.3.5.3 1.1.6 1.7.8l-1 1.4c-1.5-.3-2.9-1-4.3-2.1-.2-3 .6-5.8 2.3-8.3Z" />
      <path d="M10.8 13.5c.7 0 1.2-.6 1.2-1.3s-.5-1.3-1.2-1.3-1.2.6-1.2 1.3.6 1.3 1.2 1.3Zm6.4 0c.7 0 1.2-.6 1.2-1.3s-.5-1.3-1.2-1.3-1.2.6-1.2 1.3.5 1.3 1.2 1.3Z" />
    </svg>
  );
}

export default function Root({ children }) {
  return (
    <>
      {children}
      <a className="floatingDiscord" href="https://discord.gg/MznXAXeYQN" aria-label="Join our Discord">
        <DiscordIcon />
        Join our Discord
      </a>
    </>
  );
}
