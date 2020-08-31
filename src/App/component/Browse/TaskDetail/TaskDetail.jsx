import React from 'react';

import styles from './TaskDetail.module.scss';

import Header from './Header';
import Section from './Section';
import SideBar from './SideBar';
import OfferButton from './OfferButton';
import Question from './Question';
import { TaskProvider } from '../TaskContext';

function TaskDetail({ task }) {
  const { status, details } = task;

  const active = (status !== 'expired');

  return(
    <div className = {styles.task_detail}>
      <TaskProvider task = {task}>
        <SideBar/>
        <Header/>
        <Section title = 'DETAILS'>
          {details}
        </Section>
        <Section title = 'OFFER'>
          <div className = {styles.offer_icon}/>
          <div className = {styles.button_wrapper}>
            <OfferButton active = {active}/>
          </div>
        </Section>
        <Question/>
      </TaskProvider>
    </div>
  );
}

export default TaskDetail;

