import React from 'react';
import './AuthorCredit.css';

function AuthorCredit() {
  return (
    <div className="AuthorCredit-citation">
      Icons made by <span> </span>
      <a
        href="https://www.flaticon.com/authors/roundicons-freebies"
        target="_blank"
        rel="noopener noreferrer"
        title="Flat Icons"
      >
        Flat Icons
        </a>
      <span> </span>from<span> </span>
      <a
        href="https://www.flaticon.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="Flaticon"
      >
        www.flaticon.com
        </a>
    </div>
  );
}

export default AuthorCredit;
