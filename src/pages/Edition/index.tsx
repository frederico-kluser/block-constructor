import Block from '../../components/Block';
import BlockInfo from '../../components/BlockInfo';
import Player from '../../components/Player';
import getRandomColor from '../../utils/random-color';
import Container from './styled';

const Edition = () => {
  return (
    <Container>
      <Block backgroundColor={getRandomColor()} />
      <BlockInfo />
      <Player />
    </Container>
  );
};

export default Edition;
