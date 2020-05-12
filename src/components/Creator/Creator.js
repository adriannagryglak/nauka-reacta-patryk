import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import {settings} from '../../data/dataStore.js';
=======
>>>>>>> 34bac04d80f3b5d583c02feba810923ceb9d6736

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
<<<<<<< HEAD
    text: settings.creator.defaultText,
=======
    text: 'Add new item',
>>>>>>> 34bac04d80f3b5d583c02feba810923ceb9d6736
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange = event => {
<<<<<<< HEAD
    console.log(event.target.value);
=======
    // console.log(event);
>>>>>>> 34bac04d80f3b5d583c02feba810923ceb9d6736
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0
    });
  }

  handleOK = () => {
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false
      });
    }
  }

  handleCancel = () => {
    this.setState({
      value: '',
      visibleButtons: false
    });
<<<<<<< HEAD
    const result = window.confirm(settings.creator.confirmationText);
=======
>>>>>>> 34bac04d80f3b5d583c02feba810923ceb9d6736
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
<<<<<<< HEAD
        />                                  
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
    <Button onClick={this.handleOK}>{settings.creator.buttonOK}</Button>
    <Button onClick={this.handleCancel} variant='danger'>{settings.creator.buttonCancel}</Button>
=======
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
>>>>>>> 34bac04d80f3b5d583c02feba810923ceb9d6736
        </div>
      </div>
    );
  }
}

export default Creator;
