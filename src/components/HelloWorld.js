import react from 'react';
import glamorous from 'glamorous';

export const HelloWorld = ({ className }) => (
  <div className={className}>Hello World</div>
);

export default glamorous(HelloWorld)({
  backgroundColor: 'red'  
});
