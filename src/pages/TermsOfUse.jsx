import { useEffect } from 'react'
import BrandMark from '../components/BrandMark'

export default function TermsOfUse() {
  useEffect(() => {
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
            Terms of Use
          </h1>
          <p className="text-[#d8d3f0] text-lg max-w-2xl leading-relaxed">
            The rules and conditions that govern your use of the Tapasya AI website and participation in our workshops and programs.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <span className="inline-block text-sm font-medium text-purple bg-[#f4effc] border border-[#e7dcfa] px-4 py-1.5 rounded-full mb-10">
          Last updated: 22 September 2026
        </span>

        <div className="bg-[#f7f5fd] border-l-4 border-purple p-5 rounded-r-md text-[#1a2568] text-base mb-10">
          <strong className="text-navy">Plain-language summary:</strong> by using this website or enrolling in a
          Tapasya AI workshop or program, you agree to these terms. Our programs are
          designed for school students and delivered through partner schools, so several
          sections below deal specifically with school partnerships, minors, and payment
          for the paid monthly program.
        </div>

        <nav className="bg-[#fbfaff] border border-[#e4e2f1] rounded-xl p-6 md:p-8 mb-12 shadow-sm">
          <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">On this page</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-decimal list-inside text-[#1c2033] text-sm">
            <li><a href="#acceptance" className="hover:text-purple transition-colors">Acceptance of these terms</a></li>
            <li><a href="#eligibility" className="hover:text-purple transition-colors">Who can use our services</a></li>
            <li><a href="#description" className="hover:text-purple transition-colors">Description of our services</a></li>
            <li><a href="#school-partnerships" className="hover:text-purple transition-colors">School partnerships and MOUs</a></li>
            <li><a href="#payment" className="hover:text-purple transition-colors">Payment, fees, and refunds</a></li>
            <li><a href="#website-use" className="hover:text-purple transition-colors">Acceptable use of this website</a></li>
            <li><a href="#ip" className="hover:text-purple transition-colors">Intellectual property</a></li>
            <li><a href="#photos" className="hover:text-purple transition-colors">Session photographs and content license</a></li>
            <li><a href="#thirdparty" className="hover:text-purple transition-colors">Third-party links</a></li>
            <li><a href="#disclaimers" className="hover:text-purple transition-colors">Disclaimers</a></li>
            <li><a href="#liability" className="hover:text-purple transition-colors">Limitation of liability</a></li>
            <li><a href="#indemnity" className="hover:text-purple transition-colors">Indemnification</a></li>
            <li><a href="#termination" className="hover:text-purple transition-colors">Suspension and termination</a></li>
            <li><a href="#law" className="hover:text-purple transition-colors">Governing law and disputes</a></li>
            <li><a href="#changes" className="hover:text-purple transition-colors">Changes to these terms</a></li>
            <li><a href="#contact" className="hover:text-purple transition-colors">Contact us</a></li>
          </ol>
        </nav>

        <div className="space-y-12">
          <section id="acceptance" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">01</span> Acceptance of these terms
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Tapasya AI
              website, and your participation in any workshop, session, or program we
              deliver (&quot;Services&quot;). By visiting this website, submitting an enquiry, or
              participating in a Tapasya AI program, you agree to be bound by these Terms.
              If you are accessing our Services on behalf of a school or organization, you
              confirm you have the authority to accept these Terms on that school's behalf.
            </p>
          </section>

          <section id="eligibility" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">02</span> Who can use our services
            </h2>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>Our workshops and monthly programs are designed for school students and are delivered on-site through partner schools, not sold or offered directly to individual students online.</li>
              <li>Because most participants are minors, enrollment and participation are arranged through the partnering school, and we rely on the school to coordinate any parental consent required under its own policies and applicable law.</li>
              <li>This website itself may be viewed by anyone, including parents, educators, and the general public, for informational purposes.</li>
              <li>Anyone submitting a contact or partnership enquiry through this website confirms that the information they provide is accurate.</li>
            </ul>
          </section>

          <section id="description" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">03</span> Description of our services
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose mb-3">Tapasya AI provides practical AI-skills education to school students through:</p>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose mb-4">
              <li><strong className="text-navy font-semibold">A free introductory workshop</strong> &mdash; a one-day, on-site session offered to a school at no cost, intended to introduce our teaching approach.</li>
              <li><strong className="text-navy font-semibold">A paid monthly program</strong> &mdash; four sessions per month combining theory and hands-on practice, delivered under a partnership agreement with the school.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              We aim to deliver our Services with reasonable skill and care, but we do not
              guarantee any specific learning outcome, exam result, or career result for any
              individual student.
            </p>
          </section>

          <section id="school-partnerships" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">04</span> School partnerships and MOUs
            </h2>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>A formal school partnership begins once both parties sign a Memorandum of Understanding (MOU) setting out session schedules, fees (if applicable), responsibilities, and any other specific commitments.</li>
              <li>Where these Terms and a signed MOU conflict on a specific point, the MOU's terms will govern for that school.</li>
              <li>Partner schools agree to provide a safe, suitable environment for sessions to take place, and to coordinate any necessary parental consent (including consent for photography, where applicable).</li>
              <li>A school's name, logo, and partnership status may be featured in our &quot;School Collaborations&quot; section, as agreed with that school; a school may request an update or removal of its listing at any time.</li>
            </ul>
          </section>

          <section id="payment" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">05</span> Payment, fees, and refunds
            </h2>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>The introductory workshop is provided free of charge.</li>
              <li>Fees for the monthly program are agreed with each partnering school in advance, typically as part of the MOU, and are billed to the school rather than to individual students or parents.</li>
              <li>Unless otherwise agreed in writing, fees already paid for sessions already delivered are non-refundable; fees for sessions not yet delivered may be refunded or adjusted by mutual agreement.</li>
              <li>We reserve the right to reschedule a session for reasons outside our reasonable control (e.g. school closure, weather, instructor illness), and will work with the school to arrange a suitable replacement date.</li>
            </ul>
          </section>

          <section id="website-use" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">06</span> Acceptable use of this website
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose mb-3">When using this website, you agree not to:</p>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 max-w-prose">
              <li>Attempt to gain unauthorized access to any part of the website or its underlying systems.</li>
              <li>Use the website to transmit harmful code, spam, or unlawful content.</li>
              <li>Scrape, copy, or republish substantial parts of the website's content without permission.</li>
              <li>Impersonate any person or organization, or misrepresent your affiliation with a school or Tapasya AI.</li>
              <li>Use the contact or enquiry form for purposes unrelated to a genuine question about our Services.</li>
            </ul>
          </section>

          <section id="ip" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">07</span> Intellectual property
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              The Tapasya AI name, logo, website design, session curriculum, and all original
              text, graphics, and materials on this website are the property of Tapasya AI
              unless otherwise stated, and are protected by applicable intellectual property
              laws. You may view and share pages of this website for personal,
              non-commercial purposes, but you may not reproduce, modify, or distribute our
              branding or course materials without our prior written permission.
            </p>
          </section>

          <section id="photos" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">08</span> Session photographs and content license
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              Photographs taken during workshops and sessions may be used in our public
              Session Gallery, in line with our <a href="/privacy" className="text-purple hover:text-navy underline underline-offset-2">Privacy Policy</a>
              and the consent arrangements agreed with the relevant partnering school. If you
              are a school, parent, or guardian and would like a specific photograph reviewed
              or removed, please contact us using the details in Section 16.
            </p>
          </section>

          <section id="thirdparty" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">09</span> Third-party links
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              This website may contain links to third-party sites (for example, social media
              pages). We are not responsible for the content, accuracy, or practices of any
              third-party site, and linking to it does not imply our endorsement of it.
            </p>
          </section>

          <section id="disclaimers" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">10</span> Disclaimers
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              This website and our Services are provided on an &quot;as is&quot; and &quot;as available&quot;
              basis. To the fullest extent permitted by law, we make no warranties, express
              or implied, regarding the accuracy, completeness, or reliability of any content
              on this website, or that our Services will be uninterrupted or error-free.
            </p>
          </section>

          <section id="liability" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">11</span> Limitation of liability
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              To the fullest extent permitted by applicable law, Tapasya AI shall not be
              liable for any indirect, incidental, or consequential damages arising out of
              your use of this website or participation in our Services. Nothing in these
              Terms limits any liability that cannot be excluded or limited under applicable
              law.
            </p>
          </section>

          <section id="indemnity" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">12</span> Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              You agree to indemnify and hold Tapasya AI harmless from any claim or demand,
              including reasonable legal fees, arising out of your misuse of this website or
              your violation of these Terms.
            </p>
          </section>

          <section id="termination" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">13</span> Suspension and termination
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              We may suspend or terminate a school partnership, in accordance with the terms
              of the relevant MOU, in the event of a material breach of these Terms or the
              MOU, non-payment of agreed fees, or conduct that puts student safety or our
              staff at risk.
            </p>
          </section>

          <section id="law" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">14</span> Governing law and disputes
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              These Terms are governed by the laws of India. Any dispute arising out of or
              relating to these Terms or our Services shall first be addressed through good-
              faith discussion between the parties, and if unresolved, shall be subject to
              the exclusive jurisdiction of the courts of New Delhi, India.
            </p>
          </section>

          <section id="changes" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">15</span> Changes to these terms
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose">
              We may revise these Terms from time to time as our Services evolve or as legal
              requirements change. The &quot;Last updated&quot; date at the top of this page reflects
              the most recent revision. Continued use of this website or our Services after
              changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-xl font-heading font-bold text-navy pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="text-purple tabular-nums">16</span> Contact us
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose mb-4">For any question about these Terms, reach out to us directly:</p>
            <div className="bg-navy text-white rounded-xl p-8 max-w-prose mt-2 shadow-lg">
              <h3 className="text-white text-lg font-bold mb-3">Tapasya AI &mdash; General Enquiries</h3>
              <p className="text-[#cfd0e6] mb-2">Email: <a href="mailto:hello@tapasya.ai" className="text-[#b79cf0] hover:text-white transition-colors underline underline-offset-2">hello@tapasya.ai</a></p>
            </div>
          </section>
        </div>
      </main>

      <footer className="text-center text-sm text-[#5b5f78] py-12 px-6 border-t border-gray-100 max-w-3xl mx-auto">
        Tapasya AI &mdash; Terms of Use. This document is provided as a starting template and
        should be reviewed by a qualified legal professional before publication, to ensure
        full compliance with applicable laws in your operating jurisdiction(s).
      </footer>
    </div>
  )
}
