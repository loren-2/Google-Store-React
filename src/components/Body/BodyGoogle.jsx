
import {
  Main, Img,Galeria, ImagenMini, FullImage,} from './styledcomponents';

  // Importar las imágenes
import Earbuds01 from '../../assets/img/earbuds/earbuds_01.png';
import Earbuds02 from '../../assets/img/earbuds/earbuds_02.png';
import Earbuds03 from '../../assets/img/earbuds/earbuds_03.png';
import Earbuds04 from '../../assets/img/earbuds/earbuds_04.png';

const BodyGoogle = () => {
  return (
    <Main>
      <Galeria>
        <ImagenMini>
          <div>
            <Img src={Earbuds01} alt="earbuds google complete" />
          </div>
          <div>
            <Img src={Earbuds02} alt="earbuds google one side" />
          </div>
          <div>
            <Img src={Earbuds03} alt="earbuds google other side" />
          </div>
          <div>
            <Img src={Earbuds04} alt="earbuds google details" />
          </div>
        </ImagenMini>
        <FullImage>
          <Img src={Earbuds01} alt="earbuds google big position" />
        </FullImage>
      </Galeria>
    </Main>
  );
}

export default BodyGoogle;