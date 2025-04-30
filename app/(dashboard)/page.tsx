import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-gray-900">
        <Image
          src="https://www.walkingwise.com/wp-content/uploads/HOME_WalkingWise_SexTrafficking_Prevention_Education.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
            Empower Your Mission
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white max-w-xl mx-auto">
            Helping educators and advocates deliver real impact with powerful,
            accessible tools.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-gray-900 rounded-full"
              asChild
            >
              <a href="/book-demo">
                Book a demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
