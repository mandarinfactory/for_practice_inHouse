import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className='w-full flex justify-center items-center flex-col-reverse'>
    <img className='w-32 h-32 object-contain' src={loader} alt='loader' />
    <h1 className='font-bold text-2x1 text-white mt-2'>{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
