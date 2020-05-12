import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
<<<<<<< HEAD
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    return <h3 className={styles.component}>{this.props.title}</h3>;
  }
}
export default Card;
=======
    static PropTypes = {
        title: PropTypes.string,
    }
    render(){
        return (
            <h3 className={styles.component}>
                    {this.props.title}
            </h3>
        );
    }
}
export default Card;
>>>>>>> 34bac04d80f3b5d583c02feba810923ceb9d6736
