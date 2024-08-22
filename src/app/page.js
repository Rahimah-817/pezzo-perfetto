import Hero from '@/components/layout/Hero';
import Header from '@/components/layout/Header';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeader from '@/components/layout/SectionHeader';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeader subHeader={'Our story'} mainHeader={'About us'} />
        <div className='text-gray-500 max-w-lg mx-auto mt-4 flex flex-col gap-4'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section className='text-center my-8'>
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={'Contact us'} />
        <div className='mt-8'>
          <a
            className='text-4xl underline text-gray-500 mt-16'
            href='tel:+46738123123'>
            +46738123123
          </a>
        </div>
      </section>
      <footer className='border-t text-center text-gray-500 p-8'>&copy; 2023 All rights reserved</footer>
    </>
  );
}
