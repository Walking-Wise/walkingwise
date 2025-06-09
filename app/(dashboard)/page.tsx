import Hero from "@/components/hero/Hero";

export default function Main() {
  return (
    <>
      <Hero />
    </>
  );
}

// import MetricBar from "@/components/ui/MetricBar/MetricBar";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "./page.module.css";

// export default function HomePage() {
//   return (
//     <main className="flex flex-col">
//       {/* Hero Section */}
//       <section className={styles.heroSection}>
//         <div className="relative w-full h-full">
//           <Image
//             src="https://walking-wise-assets.s3.us-east-1.amazonaws.com/images/HOME_300dpi_1200x511.jpg"
//             alt="Hero background"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             priority
//             className={styles.heroImage}
//           />
//           <div className={styles.heroOverlay}>
//             <div className={styles.heroOverlayContent}>
//               <h1 className={styles.heroTitle}>WALKING WISE</h1>
//               <h2 className={styles.heroSubtitle}>Empowering Youth</h2>
//               <p className={styles.heroDescription}>
//                 Educating Communities to Combat Child Exploitation
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className={styles.testimonialSection}>
//         <p className={styles.testimonialText}>
//           "Just one year after watching your animated video, my 11 year old
//           daughter reported an 'unsafe adult' in her life."
//         </p>
//         <p className={styles.testimonialAuthor}>- Proactive Father</p>
//       </section>

//       <div className={styles.statsContainer}>
//         <section className={styles.statsSection}>
//           <MetricBar
//             title="460,000"
//             value="Missing U.S. Children"
//             description="~460,000 U.S. children go missing every year, with 19% at risk for sex trafficking."
//             citation={{
//               source: "Missing U.S. Children",
//               link: "https://www.missingkids.org/missing-kids-statistics",
//             }}
//           />
//           <MetricBar
//             title="90%"
//             value="Sexual Abuse"
//             description="~90% of child victims are sexually abused by someone they know and trust."
//             citation={{
//               source: "Sexual Abuse",
//               link: "https://www.missingkids.org/missing-kids-statistics",
//             }}
//           />
//           <MetricBar
//             title="36.2MM"
//             value="Child Sexual Exploitation"
//             description="36,210,368 reports were received of suspected child sexual exploitation in 2023."
//             citation={{
//               source: "Child Sexual Exploitation",
//               link: "https://www.missingkids.org/missing-kids-statistics",
//             }}
//           />
//         </section>
//       </div>

//       {/* Knowledge Section */}
//       <section className={styles.knowledgeSection}>
//         <h2 className={styles.knowledgeTitle}>
//           KNOWLEDGE IS A POWERFUL DEFENSE
//         </h2>
//         <p className={styles.knowledgeDescription}>
//           Our Walking Wise® mission is to equip adults with the knowledge and
//           tools to educate young people on 12 critical topics related to sexual
//           abuse and child sexual exploitation.
//         </p>
//       </section>

//       {/* Accreditation Section */}
//       <section className={styles.accreditationSection}>
//         <h2 className={styles.accreditationTitle}>
//           POSTGRADUATE INSTITUTE FOR MEDICINE & ACADEMY OF FORENSIC NURSING
//         </h2>
//         <p className={styles.accreditationDescription}>
//           Walking Wise has developed evidence-based education for adults and
//           adolescents in collaboration with survivor leaders and advocacy
//           experts, helping to deliver content that is sensitive to the effect of
//           trauma.
//         </p>
//         <div className={styles.accreditationLogos}>
//           <Image
//             src="/pim_logo.png"
//             alt="PIM Accreditation"
//             width={100}
//             height={100}
//           />
//           <Image
//             src="/afn_logo.png"
//             alt="AFN Partnership"
//             width={100}
//             height={100}
//           />
//         </div>
//         <button className={styles.accreditationButton}>
//           Online Course for Adults
//         </button>
//       </section>

//       {/* Curriculum Options Section */}
//       <section className={styles.curriculumSection}>
//         <div className={styles.curriculumGrid}>
//           <div>
//             <Image
//               src="/curriculum_youth.jpg"
//               alt="Curriculum for Youth"
//               width={300}
//               height={200}
//               className={styles.curriculumImage}
//             />
//             <h3 className={styles.curriculumTitle}>Curriculum for Youth</h3>
//             <p className={styles.curriculumDescription}>
//               Helping young people develop life skills through age-appropriate,
//               interactive lessons and animated explanations.
//             </p>
//           </div>
//           <div>
//             <Image
//               src="/youth_orgs.jpg"
//               alt="Youth Organizations"
//               width={300}
//               height={200}
//               className={styles.curriculumImage}
//             />
//             <h3 className={styles.curriculumTitle}>Youth Organizations</h3>
//             <p className={styles.curriculumDescription}>
//               Youth leaders can play a vital role in equipping teens with
//               knowledge to protect themselves from predators.
//             </p>
//           </div>
//           <div>
//             <Image
//               src="/education_portal.jpg"
//               alt="Your Education Portal"
//               width={300}
//               height={200}
//               className={styles.curriculumImage}
//             />
//             <h3 className={styles.curriculumTitle}>Your Education Portal</h3>
//             <p className={styles.curriculumDescription}>
//               Medical and business leaders can integrate our modules into their
//               in-house education portal.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer Quick Links */}
//       <footer className={styles.footer}>
//         <p>
//           Report Suspicions of Human Trafficking to the{" "}
//           <span className="font-semibold">
//             National Human Trafficking Hotline
//           </span>
//         </p>
//         <p>Send a Text to 233733 (BEFREE)</p>
//         <div className={styles.footerLinks}>
//           <Link href="#">Home</Link>
//           <Link href="#">About</Link>
//           <Link href="#">Curriculum</Link>
//           <Link href="#">School Programs</Link>
//           <Link href="#">Login</Link>
//           <Link href="#">My Account</Link>
//           <Link href="#">Contact</Link>
//         </div>
//       </footer>
//     </main>
//   );
// }
