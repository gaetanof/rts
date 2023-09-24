import React from 'react';
import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked')}>
      ddddasdasd
    </ChildAsFC>
  );
};

export default Parent;
