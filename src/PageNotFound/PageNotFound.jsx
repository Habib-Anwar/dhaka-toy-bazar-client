import notFound from '../../src/assets/images/404.png'

const PageNotFound = () => {
    return (
        <div>
      <img src={notFound} alt="404 Error" className='mx-auto'/>
      <div className='text-center'>
      <h1 className='text-4xl text-red-600 font-bold'>Oops! Page Not Found</h1>
      <p className='text-md font-semibold'>We are sorry, but the page you requested could not be found.</p>
      <p className='text-md font-semibold'>Please check the URL and try again.</p>
      </div>
      </div>
    );
};

export default PageNotFound;