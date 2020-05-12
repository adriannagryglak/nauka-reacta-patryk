import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import { pageContents, listData, settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';


class App extends React.Component {
  state = {
    lists: listData || {},
  };

  addList(title) {
    this.setState((state) => (
      {
        lists: [
          //zamienić ...state.lists na coś działającego
          
          {
            key: state.lists.length? state.lists[state.lists.length - 1].key + 1: 0,
            title,
            description: listData.description,
            image: listData.image,
            columns: listData.columns,
          },
        ],
    }));
  }

  render() {  
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />

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
