import { Link, useParams } from 'react-router-dom';
import { BreadCrumPath } from '@/assets/icons/BreadCrumPath';
import PerfumeSample from '@/assets/image/perfume-sample.png';
import { LikeIcon } from '@/assets/icons/LikeIcon';
import { StarIcon } from '@/assets/icons/StarIcon';

const data = {
  topbase: ['Oriental', 'Resinous', 'Spicy', 'Synthetic'],
  middlebase: [
    'Oriental',
    'Resinous',
    'Spicy',
    'Synthetica',
    'Syntheticb',
    'Syntheticc',
  ],
  basebase: ['Oriental', 'Resinous', 'Spicy', 'Synthetic'],
  scent: 25,
  longevity: 50,
  sillage: 75,
};

export const PerfumeDetail = () => {
  const { brandName, perfumeName } = useParams();
  return (
    <div className="w-full">
      <nav className="flex gap-2 ml-6 md:ml-16 mt-10 mb-7">
        <ol className="flex items-center gap-1.5">
          <Link
            to="/"
            className="cursor-pointer hover:text-brand-80 emphasize-middle"
          >
            Home
          </Link>
          <BreadCrumPath />
        </ol>
        <ol className="flex items-center gap-1.5">
          <Link
            to="/"
            className="cursor-pointer hover:text-brand-80 emphasize-middle"
          >
            {brandName}
          </Link>
          <BreadCrumPath />
        </ol>
        <ol className="flex items-center gap-1.5 cursor-pointer hover:text-brand-80 emphasize-middle">
          {perfumeName}
        </ol>
      </nav>
      <article className="pb-12">
        <div className="bg-background-basic h-[29rem] relative flex justify-center items-center">
          <img
            className="h-2/3 object-contain"
            src={PerfumeSample}
            alt="like button"
          />
          <div className="absolute top-7 left-7 cursor-pointer">
            <LikeIcon width="18" height="15" />
          </div>
        </div>
        <div className="w-fit mt-4 mx-auto  flex items-center gap-4">
          <div className="rating">9.4</div>
          <StarIcon width="24" height="24" />
        </div>
        <section className="ml-6 mt-14 md:ml-16">
          <h1 className="title-bold">Bois des Îles</h1>
          <p className="brand mt-3">Chanel</p>
          <p className="description-basic mt-3">2019 Chanel Bois des Îles</p>
          <div className="mt-14 ">
            <h2 className="emphasize-middle">Notes</h2>
            <h3 className="description-basic mt-7">Top base</h3>
            <div className="flex flex-wrap mt-4 gap-3">
              {data.topbase.map(top => (
                <div
                  key={'top' + top}
                  className="flex items-center shrink-0 py-3 px-5 h-11 cursor-pointer hover:bg-brand-60 hover:text-white hover:border-brand-60 rounded-[2rem] border border-midgray-2"
                >
                  {top}
                </div>
              ))}
            </div>
            <h3 className="description-basic mt-8">Middle base</h3>
            <div className="flex flex-wrap mt-4 gap-3">
              {data.middlebase.map(top => (
                <div
                  key={'middle' + top}
                  className="flex items-center shrink-0 py-3 px-5 h-11 cursor-pointer hover:bg-brand-60 hover:text-white hover:border-brand-60 rounded-[2rem] border border-midgray-2"
                >
                  {top}
                </div>
              ))}
            </div>
            <h3 className="description-basic mt-8">Base base</h3>
            <div className="flex flex-wrap mt-4 gap-3">
              {data.basebase.map(top => (
                <div
                  key={'base' + top}
                  className="flex items-center shrink-0 py-3 px-5 h-11 cursor-pointer hover:bg-brand-60 hover:text-white hover:border-brand-60 rounded-[2rem] border border-midgray-2"
                >
                  {top}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 w-4/5">
            <h2 className="emphasize-middle">Ratings</h2>
            <h3 className="mt-7">Scent</h3>
            <div className="w-full h-4 mt-2 mb-16 rounded-lg bg-[#EAEAEA]">
              <div
                className="percenti bg-black rounded-lg h-full"
                style={{ '--width': `${data.scent}%` } as React.CSSProperties}
              ></div>
            </div>
            <h3 className="mt-7">Longevity</h3>
            <div className="w-full h-4 mt-2 mb-16 rounded-lg bg-[#EAEAEA]">
              <div
                className="percenti bg-black rounded-lg h-full"
                style={
                  { '--width': `${data.longevity}%` } as React.CSSProperties
                }
              ></div>
            </div>
            <h3 className="mt-7">Sillage</h3>
            <div className="w-full h-4 mt-2 mb-16 rounded-lg bg-[#EAEAEA]">
              <div
                className="percenti bg-black rounded-lg h-full"
                style={{ '--width': `${data.sillage}%` } as React.CSSProperties}
              ></div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
