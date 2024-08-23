import Hero from '@/components/layout/Hero';
import Header from '@/components/layout/Header';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeader from '@/components/layout/SectionHeader';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeader subHeader={'Our story'} mainHeader={'About us'} />
        <div className='text-gray-500 max-w-lg mx-auto mt-4 flex flex-col gap-4'>
          <p>
            Pezzo Perfetto is an online platform offering gourmet pizza
            experiences for food lovers. The website features a diverse menu of
            artisanal pizzas made with high-quality ingredients, from classic
            Margherita to seasonal specialties, ensuring there&apos;s something
            for everyone.
          </p>
          <p>
            Pezzo Perfetto offers an intuitive interface for easy order
            customization. With ingredient filters and a simple checkout,
            customers can quickly enjoy their favorite pizzas.
          </p>
          <p>
            Pezzo Perfetto focuses on sustainability by sourcing local
            ingredients and reducing its environmental impact.
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
    </>
  );
}
