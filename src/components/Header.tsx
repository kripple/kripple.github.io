import { EmailIcon } from '@/components/EmailIcon';
import { GithubIcon } from '@/components/GithubIcon';
import { LinkedinIcon } from '@/components/LinkedinIcon';

import '@/components/Header.css';

export function Header() {
  return (
    <header className="header">
      <GithubIcon />
      <LinkedinIcon />
      <EmailIcon />
      <div className="theme-icon-placeholder" />
    </header>
  );
}
