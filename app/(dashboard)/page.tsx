import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-screen h-[80vh] bg-gray-900 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="https://www.walkingwise.com/wp-content/uploads/HOME_WalkingWise_SexTrafficking_Prevention_Education.jpg"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 bg-black/40">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">WALKING WISE</h1>
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Empowering Youth</h2>
            <p className="text-lg md:text-2xl">Educating Communities to Combat Child Exploitation</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-black text-white py-8 px-6 text-center">
        <p className="text-lg md:text-2xl italic max-w-3xl mx-auto">
          "Just one year after watching your animated video, my 11 year old daughter reported an 'unsafe adult' in her life."
        </p>
        <p className="mt-4 font-bold">- Proactive Father</p>
      </section>

      {/* Stats Section */}
      <section className="flex flex-col md:flex-row justify-center gap-6 bg-white text-black py-10 px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold">460,000</h3>
          <p className="mt-2 font-semibold">Missing U.S. Children</p>
          <p className="text-sm mt-1">~460,000 U.S. children go missing every year, with 19% at risk for sex trafficking.</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">90%</h3>
          <p className="mt-2 font-semibold">Sexual Abuse</p>
          <p className="text-sm mt-1">~90% of child victims are sexually abused by someone they know and trust.</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">36.2MM</h3>
          <p className="mt-2 font-semibold">Child Sexual Exploitation</p>
          <p className="text-sm mt-1">36,210,368 reports were received of suspected child sexual exploitation in 2023.</p>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="bg-gray-900 text-white py-10 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">KNOWLEDGE IS A POWERFUL DEFENSE</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Our Walking Wise® mission is to equip adults with the knowledge and tools to educate young people on 12 critical topics related to sexual abuse and child sexual exploitation.
        </p>
      </section>

      {/* Accreditation Section */}
      <section className="bg-white text-black py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">POSTGRADUATE INSTITUTE FOR MEDICINE & ACADEMY OF FORENSIC NURSING</h2>
        <p className="max-w-4xl mx-auto mb-6">
          Walking Wise has developed evidence-based education for adults and adolescents in collaboration with survivor leaders and advocacy experts, helping to deliver content that is sensitive to the effect of trauma.
        </p>
        <div className="flex justify-center items-center gap-8 mb-6">
          <Image src="/pim_logo.png" alt="PIM Accreditation" width={100} height={100} />
          <Image src="/afn_logo.png" alt="AFN Partnership" width={100} height={100} />
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">
          Online Course for Adults
        </button>
      </section>

      {/* Curriculum Options Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Image src="/curriculum_youth.jpg" alt="Curriculum for Youth" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-4 text-xl font-bold">Curriculum for Youth</h3>
            <p className="mt-2">Helping young people develop life skills through age-appropriate, interactive lessons and animated explanations.</p>
          </div>
          <div>
            <Image src="/youth_orgs.jpg" alt="Youth Organizations" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-4 text-xl font-bold">Youth Organizations</h3>
            <p className="mt-2">Youth leaders can play a vital role in equipping teens with knowledge to protect themselves from predators.</p>
          </div>
          <div>
            <Image src="/education_portal.jpg" alt="Your Education Portal" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-4 text-xl font-bold">Your Education Portal</h3>
            <p className="mt-2">Medical and business leaders can integrate our modules into their in-house education portal.</p>
          </div>
        </div>
      </section>

      {/* Footer Quick Links */}
      <footer className="bg-black text-white text-center text-sm py-6">
        <p>Report Suspicions of Human Trafficking to the <span className="font-semibold">National Human Trafficking Hotline</span></p>
        <p>Send a Text to 233733 (BEFREE)</p>
        <div className="flex flex-wrap justify-center mt-4 gap-4">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Curriculum</Link>
          <Link href="#">School Programs</Link>
          <Link href="#">Login</Link>
          <Link href="#">My Account</Link>
          <Link href="#">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
