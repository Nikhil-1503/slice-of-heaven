import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Eat a slice, more than twice
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          People say, there&apos;s is no better feeling in the world than a warm pizza box on your lap.
          Order some from our collection to find out if it&apos;s true.
        </p>
        <UnderlineLink href="/store">Explore our delicious pizzas</UnderlineLink>
      </div>
      <Image
        src="/wallpaper.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @iavnt https://unsplash.com/@iavnt"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
