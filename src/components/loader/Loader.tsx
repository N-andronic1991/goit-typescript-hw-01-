import { ColorRing } from 'react-loader-spinner';
const props = {
  visible: true,
  height: '80',
  width: '80',
  ariaLabel: 'color-ring-loading',
  wrapperStyle: {},
  wrapperClass: 'color-ring-wrapper',
  colors: ['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87'],
};

const Loader: React.FC = props => {
  return (
    <div>
      <ColorRing {...props} />
    </div>
  );
};

export default Loader;
