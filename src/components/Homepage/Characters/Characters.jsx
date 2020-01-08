import React from 'react';
import {useState} from 'react';
import styles from './characters.module.css';
import Character from './Character.jsx';
import Preloader from './../../Preloader/Preloader.jsx';
import Pagination from './Pagination/Pagination.jsx';

const Characters = (props) => {

  const [isShowMore, setShowMore] = useState(false);
  const [inputValue, setInputValue] = useState('Show More Characters');

  // In fact there are 20 characters per page. I want to show just 4 first from each page.
  const charactersItems = props.characters.map((character, index) => {
      if (index < 4) {
        return (
          <Character key={character.id} character={character}/>
        )
      }
      return null;
  })

  // Also I decided to make expanded button to render all other characters from page, so User will be able to see all 20 characters;
  const expandedCharactersItems = props.characters.map((character) => {
    return <Character key={character.id} character={character}/>;
  })

  const showMoreCharacters = () => {
    if (!isShowMore) {
      setInputValue("Hide More Characters");
      setShowMore(true);
    } else {
      setInputValue("Show More Characters")
      setShowMore(false);
    }
  }

  if (props.characters.length === 0) {
    return <Preloader />
  }

  return (
  <div className={styles.wrap}>
    <h2 className={styles.title}>Rick and Morty Characters: </h2>
    <Pagination pages={props.pages} onPageChange={props.askSomeData}/>
    <div className={styles.characters}>
      {isShowMore ? expandedCharactersItems : charactersItems}
    </div>
    <input className={styles.button} type="button" onClick={showMoreCharacters} value={inputValue}></input>
  </div>
  )
}

export default Characters;
