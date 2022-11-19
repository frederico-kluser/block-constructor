import { useEffect, useState } from 'react';
import isObjectsEqual from '../../utils/compare.objects';
import Container, { ResizeDot } from './styled';
import { InterfaceBlocks, TypePosition, TypeResizeDotsPositions } from './types';

let initialPosition: TypeResizeDotsPositions = {
  pageX: 0,
  pageY: 0,
};

let actualPosition: TypeResizeDotsPositions = {
  pageX: 0,
  pageY: 0,
};

let initialSize = {
  height: 0,
  width: 0,
};

const Block = ({ backgroundColor, children }: InterfaceBlocks) => {
  const [isResizing, setIsResizing] = useState(false);
  const [choisedResizeDot, setChoisedResizeDot] = useState<TypePosition | null>(null);
  const [resizeDots, setResizeDots] = useState<any[]>([]);
  const [resizeDotsPositions, setResizeDotsPositions] = useState<TypeResizeDotsPositions>(initialPosition);
  const [containerSize, setContainerSize] = useState(initialSize);

  useEffect(() => {
    const positions: TypePosition[] = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    setResizeDots(positions.map((position: TypePosition) => (
      <ResizeDot
        draggable
        key={position}
        position={position}
        onMouseDown={({ pageX, pageY }) => {
          if (isObjectsEqual(initialPosition, {
            pageX: 0,
            pageY: 0,
          })) {
            initialPosition = { pageX, pageY };
          }
          setResizeDotsPositions(actualPosition);
          setChoisedResizeDot(position);
        }}
        onMouseUp={() => {
          actualPosition = resizeDotsPositions;
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
      initialSize = {
        height: resizeDotsPositions.pageY - initialPosition.pageY,
        width: resizeDotsPositions.pageX - initialPosition.pageX,
      };
      setContainerSize(initialSize);
    }
  }, [resizeDotsPositions]);

  return (
    <Container
      draggable
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
