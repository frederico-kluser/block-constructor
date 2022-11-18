import { useEffect, useState } from 'react';
import isObjectsEqual from '../../utils/compare.objects';
import Container, { positions, ResizeDot } from './styled';
import { TypePosition, TypeResizeDotsPositions } from './types';

interface IBlocks {
  backgroundColor: string;
  children?: any[];
};

let initialPosition: TypeResizeDotsPositions = {
  pageX: 0,
  pageY: 0,
};

const Block = ({ backgroundColor, children }: IBlocks) => {
  const [isResizing, setIsResizing] = useState(false);
  const [choisedResizeDot, setChoisedResizeDot] = useState<TypePosition | null>(null);
  const [resizeDots, setResizeDots] = useState<any[]>([]);
  const [resizeDotsPositions, setResizeDotsPositions] = useState<TypeResizeDotsPositions>(initialPosition);
  const [containerSize, setContainerSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setResizeDots(Object.keys(positions).map((position: TypePosition) => (
      <ResizeDot
        draggable
        key={position}
        position={positions[position]}
        onMouseDown={({ pageX, pageY }) => {
          initialPosition = { pageX, pageY };
          setResizeDotsPositions(initialPosition);
          setChoisedResizeDot(position);
        }}
        onMouseUp={() => {
          setChoisedResizeDot(null);
        }}
        onDrag={({ pageX, pageY }) => {
          setResizeDotsPositions({ pageX, pageY });
        }} />
    )));
  }, []);

  useEffect(() => {
    if (choisedResizeDot === 'bottomRight' && !isObjectsEqual(resizeDotsPositions, {
      pageX: 0,
      pageY: 0,
    })) {
      setContainerSize({
        height: resizeDotsPositions.pageY - initialPosition.pageY,
        width: resizeDotsPositions.pageX - initialPosition.pageX,
      });
    }

    console.log('initialPosition :', initialPosition);
    console.log('resizeDotsPositions :', resizeDotsPositions);
  }, [resizeDotsPositions]);

  return (
    <Container
      backgroundColor={backgroundColor}
      onClick={() => { setIsResizing(true); }}
      height={containerSize.height}
      width={containerSize.width}>
      <>
        { isResizing && resizeDots }
      </>
        {children}
    </Container>
  );
};

export default Block;
