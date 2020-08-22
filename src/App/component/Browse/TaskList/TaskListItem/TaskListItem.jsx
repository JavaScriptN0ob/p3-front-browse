import React from 'react';
import classNames from 'classnames/bind';

import styles from './TaskListItem.module.scss';

function TaskListItem({data}) {
  const {
    title,
    status,
    budget,
    poster,
    location,
    due,
  } = data;
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('task-list-item')}>
      <div className = {cx('header')}>
        <div className = {cx('title')}>
          {title}
        </div>
        <div className = {cx('budget')}>
          ${budget}
        </div>
      </div>
      <div className = {cx('content')}>
        <div className = {cx('avatar')}>
          <img src = {poster.avatar} alt = 'avatar'/>
        </div>
        <div className = {cx('location')}>
          {location}
        </div>
        <div className = {cx('due')}>
          {due}
        </div>
      </div>
      <div className = {cx('footer')}>
        <div className = {cx('status')}>
          {status}
        </div>
      </div>
    </div>
  );
}

export default TaskListItem;