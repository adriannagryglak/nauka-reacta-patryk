import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import { pageContents, settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  };
  static propTypes = {
    lists: PropTypes.array,
  }
  addList(title) {
    console.log('addList');
    this.setState((state) => ({
      lists: [
        ...state.lists,
        {
          key: state.lists.length
            ? state.lists[state.lists.length - 1].key + 1
            : 0,
          title,
          image: state.lists[0].image,
          description: settings.defaultListDescription,
        },
      ],
    }));
  }

  render() {
    console.log('propsy', this.props);
    console.log('listy', this.state.lists);
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>

        <div>
          {this.state.lists.map(({ key, ...listProps }) => (
            <List key={key} {...listProps} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator
            text={settings.listCreatorText}
            action={this.addList.bind(this)}
          />
        </div>
      </main>
    );
  }
}

export default App;
