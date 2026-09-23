import BrandMark from '../components/BrandMark'
import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to top when loaded
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen font-body text-[#1c2033]">
      <header className="bg-gradient-to-br from-navy via-[#150f3d] to-purple text-white pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 font-bold tracking-wide text-sm text-[#c9bff0] mb-6">
            <BrandMark />
            TAPASYA AI
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#d8d3f0] text-lg max-w-2xl leading-relaxed">
            How Tapasya AI collects, uses, and protects information when we work with students, schools, and visitors to this website.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <span className="inline-block text-sm font-medium text-purple bg-[#f4effc] border border-[#e7dcfa] px-4 py-1.5 rounded-full mb-10">
          Last updated: 22 September 2026
        </span>

        <div className="bg-[#f7f5fd] border-l-4 border-purple p-5 rounded-r-md text-[#1a2568] text-base mb-12">
          <strong className="text-navy">Plain-language summary:</strong> we collect the information needed to run our
          school workshops and this website &mdash; contact details, session photos, and basic
          site-usage data. We do not sell personal data. Because we work directly with
          school students, several sections below deal specifically with minors' data
          and school partnership records.
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">01</span> Who we are
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              Tapasya AI (&quot;Tapasya AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is an EdTech initiative that
              teaches practical artificial intelligence skills to school students, through
              free introductory workshops and a paid monthly skills program delivered in
              partnership with schools. This policy explains how we handle information
              collected through our website, our workshops, and our school partnerships.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">02</span> Information we collect
            </h2>
            
            <h3 className="text-base font-bold text-[#1a2568] mt-6 mb-2">Information you give us directly</h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>Name, email address, phone number, and school name, when you fill out our contact or partnership enquiry form.</li>
              <li>Any message content you choose to include in that form.</li>
              <li>Name and role (e.g. principal, coordinator, teacher), when a school signs a Memorandum of Understanding (MOU) with us.</li>
            </ul>

            <h3 className="text-base font-bold text-[#1a2568] mt-6 mb-2">Information collected during sessions</h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>Photographs taken during on-site workshops and sessions, which may include images of students, teachers, and school premises.</li>
              <li>Attendance and participation records shared with us by the partnering school for the purpose of running the program.</li>
            </ul>

            <h3 className="text-base font-bold text-[#1a2568] mt-6 mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>Basic technical data such as browser type, device type, approximate location (city/region level), and pages visited, collected through standard website analytics.</li>
              <li>Cookies or similar technologies used to keep the site functioning correctly and to understand overall traffic patterns (see Section 6).</li>
            </ul>

            <p className="text-gray-700 leading-relaxed max-w-prose mt-6">
              We do not knowingly collect sensitive personal data such as health information, government ID numbers, or financial account details through this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">03</span> How we use this information
            </h2>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose mb-4">
              <li>To respond to enquiries from schools, parents, or visitors.</li>
              <li>To plan, schedule, and deliver workshops and the monthly skills program.</li>
              <li>To display our &quot;Session Gallery&quot; and &quot;School Collaborations&quot; sections on this website, showcasing the work we do and the schools we partner with.</li>
              <li>To maintain records of school partnerships and MOUs.</li>
              <li>To understand how visitors use our website, so we can improve it.</li>
              <li>To meet legal, accounting, or regulatory obligations where applicable.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              We do not use information collected through this site for automated decision-making or profiling that produces legal or similarly significant effects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">04</span> Session photographs and student privacy
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose mb-4">
              Because our work happens inside schools and directly involves students, we take
              extra care with session photographs:
            </p>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>Photographs used in our public Session Gallery are selected and shared only with the knowledge and involvement of the partnering school.</li>
              <li>We rely on the school's own consent and photography policies (as agreed to at the time of MOU signing) to confirm that photographing students during sessions is permitted.</li>
              <li>If a school, parent, or guardian requests that a specific photograph be removed from our website, we will remove it promptly &mdash; see Section 9 for how to make this request.</li>
              <li>We avoid publishing any identifying information alongside student photographs beyond the school name and session date.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">05</span> School partnership and MOU information
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              When a school partners with Tapasya AI, we display the school's name, logo, and
              partnership status in our &quot;School Collaborations&quot; section, as agreed with the
              school as part of the partnership. Schools may request an update or removal of
              their listing at any time by contacting us using the details in Section 10.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">06</span> Cookies and analytics
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              This website may use cookies or similar tools (such as Google Analytics) to
              understand website traffic in aggregate &mdash; for example, how many people visit,
              which pages are popular, and which device types are used. This data is used to
              improve the site and is not used to individually identify visitors for
              marketing purposes. You can control or disable cookies through your browser
              settings; some site features may not function as intended if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">07</span> How we share information
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose mb-4">We do not sell personal information. We may share information only in these limited circumstances:</p>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>With the partnering school itself, where the information relates to a session or program conducted at that school.</li>
              <li>With service providers who help us operate this website (e.g. hosting or analytics providers), bound to use data only for that purpose.</li>
              <li>Where required by law, regulation, or a valid legal request.</li>
              <li>In connection with a business transition (such as a merger or restructuring), where the recipient agrees to honor this policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">08</span> Data security and retention
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              We take reasonable technical and organizational measures to protect the
              information we hold, including restricting access to authorized team members
              and using secure storage for photographs and partnership records. We retain
              information only for as long as it is needed for the purposes described in this
              policy, or as required by law, after which it is deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">09</span> Your rights and choices
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose mb-4">Depending on your role and applicable law (including India's Digital Personal Data Protection Act, 2023), you may have the right to:</p>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>Ask what personal information we hold about you or your child, and request a copy.</li>
              <li>Ask us to correct inaccurate information.</li>
              <li>Ask us to delete personal information, including removing a specific photograph from the Session Gallery.</li>
              <li>Withdraw consent previously given, where processing is based on consent.</li>
              <li>Raise a concern or complaint about how we handle information.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed max-w-prose mt-6">
              Parents or guardians of a student pictured on our website may make any of the
              above requests on the student's behalf by contacting us directly, or through
              the partnering school.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">10</span> Contact us
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose mb-4">For any privacy-related question, request, or concern, reach out to us directly:</p>
            <div className="bg-navy text-white rounded-xl p-8 max-w-prose mt-2 shadow-lg">
              <h3 className="text-white text-lg font-bold mb-3">Tapasya AI &mdash; Privacy Enquiries</h3>
              <p className="text-[#cfd0e6] mb-2">Email: <a href="mailto:privacy@tapasya.ai" className="text-[#b79cf0] hover:text-white transition-colors underline underline-offset-2">privacy@tapasya.ai</a></p>
              <p className="text-[#cfd0e6] text-sm mt-4">We aim to respond to all privacy requests within a reasonable time, and no later than 30 days.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">11</span> Changes to this policy
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              We may update this Privacy Policy from time to time as our programs grow or as
              legal requirements change. The &quot;Last updated&quot; date at the top of this page will
              reflect the most recent revision. We encourage schools, parents, and visitors to
              review this page periodically.
            </p>
          </section>
        </div>
      </main>

      <footer className="text-center text-sm text-[#5b5f78] py-12 px-6 border-t border-gray-100 max-w-3xl mx-auto">
        Tapasya AI &mdash; Privacy Policy. This document is provided as a starting template and
        should be reviewed by a qualified legal professional before publication, to ensure
        full compliance with applicable laws in your operating jurisdiction(s).
      </footer>
    </div>
  )
}
