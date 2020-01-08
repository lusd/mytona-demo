import React from 'react';
import styles from './slider.module.css';
import slide1 from './../../../assets/slide1.jpg';
import slide1mobile from './../../../assets/slide1mobile.jpg';
import slide1caption from './../../../assets/caption_image1.png';
import slide2 from './../../../assets/slide2.jpg';
import slide2mobile from './../../../assets/slide2mobile.jpg';
import slide2caption from './../../../assets/caption_image2.png';
import slide3 from './../../../assets/slide3.jpg';
import slide3mobile from './../../../assets/slide3mobile.jpg';
import slide3mobileEn from './../../../assets/slide3mobile_en.jpg';
import slide3caption from './../../../assets/caption_image3.png';
import slide3captionEn from './../../../assets/caption_image3_en.png';
import slide4 from './../../../assets/slide4.jpg';
import slide4mobile from './../../../assets/slide4mobile.jpg';
import slide4caption from './../../../assets/caption_image4.png';
import slide5 from './../../../assets/slide5.jpg';
import slide5mobile from './../../../assets/slide5mobile.jpg';
import slide5caption from './../../../assets/caption_image5.png';

const Slider = (props) => {

  const mobileBP = "(max-width: 575px)";

  const language = props.language;

  return (
    <div id="homePageSlider" className={"carousel slide " + styles.mySlider} data-ride="carousel">
      <div className={`carousel-inner ${styles.carousel_slider}`}>
        <div className={"carousel-item active"}>
          <a className={'d-block w-100'} href="/asfdsaf">
            <picture>
              <source srcSet={slide1mobile} media={mobileBP}/>
              <source srcSet={slide1}/>
            <img className={'d-block w-100'} src={slide1} alt="First slide, Cooking Diary"/>
            </picture>
            <img className={styles.image_caption} src={slide1caption} alt="Cooking Diary"/>
          </a>
          <div className={styles.gameBlock}>
            <a href="/asdfasdf" className={styles.gameLink}>Играть Сейчас</a>
          </div>
        </div>

        <div className={"carousel-item"}>
          <a className={'d-block w-100'} href="/asdfasdf">
            <picture>
              <source srcSet={slide2mobile} media={mobileBP}/>
              <source srcSet={slide2}/>
              <img className={'d-block w-100'} src={slide2} alt="Second slide, RavenHill Hidden Mistery"/>
            </picture>
            <img className={styles.image_caption} src={slide2caption} alt="RavenHill Hidden Mistery"/>
          </a>
          <div className={styles.gameBlock}>
            <a href="/asdfasfd" className={styles.gameLink}>Играть Сейчас</a>
          </div>
        </div>

        <div className={"carousel-item"}>
          <a className={'d-block w-100'} href="/asdfasfd">
            <picture>
              <source srcSet={language === 'ru' ? slide3mobile : slide3mobileEn} media={mobileBP}/>
            <source srcSet={slide3}/>
          <img className={'d-block w-100'} src={slide3} alt="Third slide, Seekers Notes, Hidden Mistery"/>
            </picture>
            <img className={styles.image_caption} src={language === 'ru' ? slide3caption : slide3captionEn} alt="Seekers Notes, Hidden Mistery"/>
          </a>
          <div className={styles.gameBlock}>
            <a href="/123123" className={styles.gameLink}>Играть Сейчас</a>
          </div>
        </div>

        <div className={"carousel-item"}>
          <a className={'d-block w-100'} href="/asdfasfd">
            <picture>
              <source srcSet={slide4mobile} media={mobileBP}/>
            <source srcSet={slide4}/>
            <img className={'d-block w-100'} src={slide4} alt="Fourth slide, Manastorm, arena of legends"/>
            </picture>
            <img className={styles.image_caption} src={slide4caption} alt="Manastorm, arena of legends"/>
          </a>
          <div className={styles.gameBlock}>
            <a href="/asfd" className={styles.gameLink}>Играть Сейчас</a>
          </div>
        </div>

        <div className={"carousel-item"}>
          <a className={'d-block w-100'} href="/asdfasf">
            <picture>
              <source srcSet={slide5mobile} media={mobileBP}/>
            <source srcSet={slide5}/>
          <img className={'d-block w-100'} src={slide5} alt="Fifth slide, RiddleSide, fading legacy"/>
            </picture>
            <img className={styles.image_caption} src={slide5caption} alt="RiddleSide, fading legacy"/>
         </a>
         <div className={styles.gameBlock}>
           <a href="/asdfsadf" className={styles.gameLink}>Играть Сейчас</a>
         </div>
        </div>

      </div>

      <a className={"carousel-control-prev"} href="#homePageSlider" role="button" data-slide="prev">
        <span className={"carousel-control-prev-icon"} aria-hidden="true"></span>
        <span className={"sr-only"}>Previous</span>
      </a>
      <a className={"carousel-control-next"} href="#homePageSlider" role="button" data-slide="next">
        <span className={"carousel-control-next-icon"} aria-hidden="true"></span>
        <span className={"sr-only"}>Next</span>
      </a>

      <ol className={`carousel-indicators ${styles.customIndicators}`}>
        <li data-target="#homePageSlider" data-slide-to="0" className={"active"}>
          <img className={'d-block w-100'} src={slide1} alt="Cooking Diary caption"/>
        </li>
        <li data-target="#homePageSlider" data-slide-to="1">
          <img className={'d-block w-100'} src={slide2} alt="RavenHill Hidden Mistery caption"/>
        </li>
        <li data-target="#homePageSlider" data-slide-to="2">
          <img className={'d-block w-100'} src={slide3} alt="Seekers Notes, Hidden Mistery caption"/>
        </li>
        <li data-target="#homePageSlider" data-slide-to="3">
          <img className={'d-block w-100'} src={slide4} alt="Manastorm, arena of legends caption"/>
        </li>
        <li data-target="#homePageSlider" data-slide-to="4">
          <img className={'d-block w-100'} src={slide5} alt="RiddleSide, fading legacy caption"/>
        </li>
      </ol>

    </div>
  )
}

export default Slider;
