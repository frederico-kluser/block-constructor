import Block from '../../components/Block';
import Player from '../../components/Player';
import getRandomColor from '../../utils/random-color';
import Container from './styled';

const Edition = () => {
  return (
    <Container>
      <Block backgroundColor={getRandomColor()} />
      <Player />
    </Container>
  );
};

export default Edition;
