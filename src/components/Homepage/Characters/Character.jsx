import React from 'react';
import styles from './characters.module.css'

const Character = (props) => {
  return <div className={styles.character}>
    <img src={props.character.image} alt={props.character.name}/>
    <span className={styles.name}><b>Name: </b>{props.character.name}</span>
    <span className={styles.location}><b>Location: </b>{props.character.location.name}</span>
    <span className={styles.status}><b>Status: </b>{props.character.status}</span>
    <span><b>Species: </b>{props.character.species}</span>
    {props.character.type ? <span><b>Type: </b>{props.character.type}</span> : ''}
    <span><b>Gender: </b>{props.character.gender}</span>
  </div>
}

export default Character;
