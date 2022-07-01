import Image from 'next/image'

const externaImageLoader = ({ src }: { src: string }) =>
  `http://localhost:3000/${src}`;
            /*
            <div className="block w-32 h-32 rounded-full shadow border">
              <Image src="/Headshot.jpg" layout="responsive" alt="Headshot" className="rounded-full"/>
            </div>
            */
function AboutMeCard() {
    return (
        <div className="shadow-lg border bg-gray-100 w-12/12 sm:w-96 rounded-xl m-auto p-5 sm:flex space-x-2">
            <div className="block w-32 h-32 rounded-xl m-auto">
              <Image src="Headshot.jpg" loader={externaImageLoader} width="400" height="400" layout="responsive" alt="Headshot" className="rounded-full border shadow"/>
            </div>
            <div className="flex-1">
                <div className="text-2xl mb-2 font-medium text-center sm:text-left">Tadeh Boghozian</div>
                <div className="text-sm text-gray-600 mb-1 whitespace-pre-line">Senior CS student @ UCLA.
                    It's a joy to be in a field where I can be constantly learning new things.
                    
                </div>
            </div>
        </div>
    );
}

export default AboutMeCard;
