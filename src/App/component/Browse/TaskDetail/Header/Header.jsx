import React from 'react';

import styles from './Header.module.scss';

import PosterInfoList from './PosterInfoList';
import StatusList from './StatusList'; 
import { TaskConsumer } from '../../TaskContext';

function Header() {
  return (
    <div className = {styles.header}>
        <TaskConsumer>
          {
            ({ title, status, poster, location, due, }) => {
              return (
                <div className = {styles.detail_panel}>
                  <div className = {styles.status_bar}>
                    <StatusList status={status} />
                  </div>
                  <div className = {styles.title}>
                    <h1>{title}</h1>
                  </div>
                  <PosterInfoList>
                    {poster}{location}{due}
                  </PosterInfoList>
                </div>
              );
            }
          }
        </TaskConsumer>
    </div>
    
 );
}

export default Header;



