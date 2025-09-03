import { SocialIcons } from '@/components/SocialIcons';
import { config } from '@/data/config';

import '@/components/footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="show-for-mobile">
        <SocialIcons />
      </div>
      <span>
        © {currentYear} {config.name}
      </span>
    </footer>
  );
}
