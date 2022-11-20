import { useEffect, useState } from 'react';

import Container, { PlayButton, Progress as ProgressArea, ProgressButton, ProgressLine, ProgressTime } from './styled';
import { FaPlay, FaPause } from 'react-icons/fa';
import { formatDecimal } from '../../utils/format-time';
import { getPercentageOfNumber, getPercentageOfTwoNumbers } from '../../utils/percentage';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [time, setTime] = useState(0);
  const [actualTime, setActualTime] = useState(0);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handlePlay = () => {
    const isPlayingNow = !isPlaying;
    setTimeout(() => {
      setActualTime(actualTime - 0.01);
    }, 10);

    setIsPlaying(isPlayingNow);
  };

  const handleTime = () => {
    const timePrompt = prompt('Digite o tempo em segundos');
    const timeInSeconds = Number(timePrompt);

    if (timeInSeconds) {
      setMinutes(Math.floor(timeInSeconds / 60));
      setSeconds(timeInSeconds % 60);
      setActualTime(timeInSeconds);
      setTime(timeInSeconds);
    }
  };

  const handleProgress = (event: any) => {
    const { clientWidth } = event.target;
    const { offsetX } = event.nativeEvent;
    const percentageOfArea = getPercentageOfTwoNumbers(offsetX, clientWidth);
    const percentageOfTime = getPercentageOfNumber(percentageOfArea, time);
    setIsPlaying(false);
    setTimeout(() => {
      setActualTime(time - percentageOfTime);
    }, 11);
  };

  useEffect(() => {
    setMinutes(Math.floor(actualTime / 60));
    setSeconds(actualTime % 60);
    if (isPlaying && actualTime > 0) {
      setTimeout(() => {
        setActualTime(actualTime - 0.01);
      }, 10);
    } else {
      setIsPlaying(false);
    }
  }, [actualTime]);

  return (
    <Container>
      <PlayButton onClick={handlePlay}>
        { isPlaying ? <FaPause /> : <FaPlay /> }
      </PlayButton>
      <ProgressArea>
        <ProgressLine onClick={handleProgress}>
          <ProgressButton percentage={100 - getPercentageOfTwoNumbers(actualTime, time)} />
        </ProgressLine>
      </ProgressArea>
      <ProgressTime onClick={handleTime}>
        {formatDecimal(minutes)}:{formatDecimal(seconds)}
      </ProgressTime>
    </Container>
  );
};

export default Player;
