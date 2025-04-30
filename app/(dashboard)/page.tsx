import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <section className="relative w-screen h-[60vh] bg-gray-900 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="https://www.walkingwise.com/wp-content/uploads/HOME_WalkingWise_SexTrafficking_Prevention_Education.jpg"
            alt="Hero background"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            priority
            className="z-0"
          />
        </div>
      </section>
    </main>
  );
}
