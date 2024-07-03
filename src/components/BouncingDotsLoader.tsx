import { FaCheck } from 'react-icons/fa';
import './CompStyles/BouncingLoader.css'
const BouncingDotsLoader = (props: {
    default ?: boolean
    loading ?: boolean
    success ?: boolean
}) => {
  return (
    <>
      {
        props.default && <p className='text-white'>Send Message</p>
      }
      {
        props.loading && <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      }
      {
        props.success && 
        <FaCheck className='an' color='white'/>
      }
      </>
  );
};

export default BouncingDotsLoader;