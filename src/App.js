import './App.css';
import Card from './Card'
import Left from './images/Left.png'
import Right from './images/right.png'
import AllDrinkImage from './images/person-drink.png'
import PointerImage from './images/pointing.png'
import ToastImage from './images/toast.png'
import GuyDrinkImage from './images/drinking.png'
import AllPlayPointToTheSkyImage from './images/fan.png'
import RyhmeSongImage from './images/sing.png'
import CategoriesImage from './images/social-media.png'
import PickAPersonImage from './images/water-gun.png'
import NeverHaveIImage from './images/keep-quiet.png'
import BossImage from './images/leader.png'
import ToiletImage from './images/toilet.png'
import ConnectedImage from './images/love-birds.png'
import DanceImage from './images/dance.png'
import AskAQuestionImage from './images/doctor.png'
import LadiesImage from './images/ladies.png'
import TouchTheGroundImage from './images/world.png'
import ChaliceImage from './images/holy-chalice.png'
import React, {useState} from 'react';
import Popup from './popup' 

let cardPosition = 0;
let gameOver = false;
let keepCount = 0;
let previousCard = '';
const cardArray = [{cardCount: 0  , cardImage: ToastImage, cardRule : 'Every player begins drinking, and no one can stop until the player before them does'},
{cardCount: 0  , cardImage: PointerImage ,  cardRule : 'Whoever drew the card assigns a drink'}
,{cardCount: 0  , cardImage: AllDrinkImage ,  cardRule : 'Whoever drew the card drinks'},
{cardCount: 0  , cardImage: TouchTheGroundImage , cardRule : 'Everyone races to touch the floor, last person to do so drinks'}
,{cardCount: 0  , cardImage: GuyDrinkImage ,  cardRule : 'All guys drink' }
,{cardCount: 0  , cardImage: LadiesImage , cardRule : 'All girls drink'}
,{cardCount: 0  , cardImage: AllPlayPointToTheSkyImage , cardRule : 'All players point towards the sky, last player to do so drinks' }
,{cardCount: 0  , cardImage: PickAPersonImage , cardRule :'Pick a person to drink with you' }
,{cardCount: 0  , cardImage: RyhmeSongImage , cardRule : 'Say a phrase, and everyone else must say phrases that rhyme in the form of a song'}
,{cardCount: 0  ,cardImage: CategoriesImage , cardRule : 'Pick a category, and say something from that category (i.e. if "drinking games" was the category, "kings" would be a viable answer.'},
{cardCount: 0  ,cardImage: NeverHaveIImage , cardRule : 'Never have I ever - Each player puts up 3 fingers, then starting with the person who drew the card, each player says "never have I ever «something»". If you have done it, you put a finger down, until someone loses'}
,{cardCount: 0  ,cardImage: AskAQuestionImage , cardRule : 'The person who drew the card asks a random person a question, and they then turn and ask a random person a question, until someone loses by either failing to ask a question or by responding to the person who just asked them a question'},
{cardCount: 0  ,cardImage: BossImage , cardRule : 'Make a rule that everyone must follow until the next King is drawn (i.e. force everyone to drink after each turn)'},
{cardCount: 0  ,cardImage: ToiletImage , cardRule : 'The person who drew the card has a free pass to go to the toilet'}
,{cardCount: 0  ,cardImage: ConnectedImage , cardRule : 'The person who drew the card will be connected to the person who draws the card next'}
,{cardCount: 0  ,cardImage: DanceImage , cardRule : 'The person who drew the card should come up with a dance and Everyone else must repeat the dance and the person that gets it wrong my drink'},
{cardCount: 0  ,cardImage: ChaliceImage , cardRule : 'The person who drew the card must drink the special Bojwala cup' }];

function App() {


  const [cardState , setCardState] = useState(cardArray[0]);
  const [isOpen, setIsOpen] = useState(false);
 

 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  function randomise(randomNumber){
    if(previousCard === cardArray[randomNumber].cardRule){
      randomNumber = Math.floor(Math.random() * 17);
    }

    setCardState(cardArray[randomNumber]);
    cardArray[randomNumber].cardCount = cardArray[randomNumber].cardCount + 1;
  }

function getCard(){

  
  let randomNumber = Math.floor(Math.random() * 17);


  if(!(cardArray[randomNumber].cardCount === 4)){

    randomise(randomNumber);
  }else{ 

    randomise(randomNumber);
    keepCount = keepCount + 1;

  }

  if(keepCount === 17 || cardPosition === 68){
    gameOver = true;
  }

  previousCard = cardArray[randomNumber].cardRule;
  cardPosition++;
  console.log(cardPosition)

}

return (
    <div className="App">
        <h1>Kings&Queens of Bojwala</h1>

        <div className='card-section'>
          <img onClick={getCard}  src={Left} alt="left-arrow" />

          <Card cardState = {cardState} togglePopup = {togglePopup} />

          <img onClick={getCard}  src={Right} alt="right-arrow" />
        </div>

        <div>
          {isOpen && <Popup
            content={<>
              <b>{cardState.cardRule}</b>
            </>}
            handleClose={togglePopup}
         />}
        </div>


  <div>
  {gameOver && <Popup
            content={<>
              <b>🎈🎈🎈🎈🎈🎈🎈🎈 Game Over 🎈🎈🎈🎈🎈🎈🎈🎈</b>
            </>}
            handleClose={togglePopup}
            
         />}
  </div>

    </div>
  );
}

export default App;
