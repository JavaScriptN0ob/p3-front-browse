import React from 'react';

import styles from './Section.module.scss';

function Section({title, children}) {
  return(
    <div className = {styles.section}>
      <div className = {styles.title}>
        {title}
      </div>
      <div className = {styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Section;