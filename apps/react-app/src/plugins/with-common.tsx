import type {
  ImageProps,
  PlaitImageBoard,
  RenderComponentRef
} from '@plait/common';
import { PlaitBoard } from '@plait/core';
import { createRoot } from 'react-dom/client';
import { Image } from '../components/image';

export const withCommonPlugin = (board: PlaitBoard) => {
  const newBoard = board as PlaitBoard & PlaitImageBoard;

  newBoard.renderImage = (
    container: Element | DocumentFragment,
    props: ImageProps
  ) => {
    const root = createRoot(container);
    root.render(<Image {...props}></Image>);
    let newProps = { ...props };
    const ref: RenderComponentRef<ImageProps> = {
      destroy: () => {
        root.unmount();
      },
      update: (updatedProps: Partial<ImageProps>) => {
        newProps = { ...newProps, ...updatedProps };
        root.render(<Image {...newProps}></Image>);
      }
    };
    return ref;
  };

  return board;
};
