import Search from '@/components/search/Search';

export const HomePage = () => {
  return (
    <section className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="container items-center pb-12 ">
        <div className="col-span-7">
          <h1 className="mx-auto my-4 text-3xl font-bold text-center lg:text-5xl lg:w-8/12">
            Hotel for memorable moments rich in emotions
          </h1>
          <p className="my-2 text-[#5f5e5e] text-center">
            We have 459 rooms spread throughout Indonesia with room standards
            equivalent to 5 star hotels.
          </p>

          <Search />
        </div>
      </div>
    </section>
  );
};
