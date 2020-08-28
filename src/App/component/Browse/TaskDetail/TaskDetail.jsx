import React from 'react';
import {connect} from 'react-redux';

import styles from './TaskDetail.module.scss';

import Header from './Header';
import Section from './Section';
import SideBar from './SideBar';
import OfferButton from './OfferButton';
import Question from './Question';
import { selectTask } from '../../Redux/Browse/selector';
import { createStructuredSelector } from 'reselect';


function TaskDetail({task}) {
  const {status, details} = task;

  const active = (status !== 'expired');

  return(
    <div className = {styles.task_detail}>
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
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  task: selectTask, 
});

// const mapStateToProps = ({taskList, taskIndex}) => {
//   const task = taskList[taskIndex];
//   const {status, details} = task;
//   return {
//     status, 
//     details,  
//   };
// }

export default connect(mapStateToProps)(TaskDetail);

