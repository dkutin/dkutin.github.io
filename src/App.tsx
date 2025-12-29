import Nav from '@/components/layout/Navbar';

import Routes from './routes';

const App = () => {
  return (
    <>
      <Nav />
      <main className='flex w-full h-auto items-center justify-center'>
        <section className='flex mt-6 px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-[1280px]'>
          <div>
            <Routes />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
