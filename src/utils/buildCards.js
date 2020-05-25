import { shuffle } from "./shuffle";
import back_card from "../assets/back_card.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";

export function buildCards(cardsAmount) {
  if (cardsAmount) {
    let id = 0;
    const pull = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
    ];
    const images = {};
    for (let index = 0; index < cardsAmount / 2; index++) {
      images[pull[index]] = pull[index];
    }

    const cards = Object.keys(images).reduce((result, key) => {
      const createCard = () => ({
        id: id++,
        type: key,
        back_card: back_card,
        frontImg: images[key],
        flipped: false,
      });
      result.push(createCard());
      result.push(createCard());

      return result;
    }, []);
    return shuffle(cards);
  }
}
