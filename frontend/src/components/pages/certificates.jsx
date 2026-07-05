import React from "react";
import {
  Building2,
  ShieldCheck,
  FileText,
  Phone,
  Wrench,
  CheckCircle2,
  Mail,
  MapPin,
  Landmark,
  BadgeCheck,
  GraduationCap,
  Snowflake,
  Flame,
  Sparkles,
} from "lucide-react";

 
const navLinks = ["Home", "About", "Projects", "Certifications", "Compliance", "Contact"];
 
const completedProjects = [
  {
    client: "Rwanda Forensic Laboratory",
    scope: "Maintenance & repairing of generators and other machines — Lot 3, fridges & freezers",
    year: "2018",
  },
  {
    client: "Rwanda Forensic Laboratory",
    scope: "Maintenance & repairing of generators and other machines — Lot 3, fridges & freezers",
    year: "2019",
  },
  {
    client: "Rwanda Forensic Laboratory",
    scope: "Maintenance & repairing of generators and other machines — Lot 3, fridges & freezers",
    year: "2020",
  },
  {
    client: "Rwanda National Police",
    scope: "Maintenance of generators and air conditioning — framework agreement",
    year: "2022",
  },
  {
    client: "Rwanda Forensic Laboratory",
    scope: "Provision of maintenance service for different equipment and machines",
    year: "2022",
  },
];
 
const statutoryCertifications = [
  {
    icon: Landmark,
    title: "RDB Business Registration",
    desc: "Certificate of Domestic Company Registration, Company Code 105460356. Registered 08 March 2016 as a private company limited by shares, Ndera, Gasabo, Kigali.",
  },
  {
    icon: FileText,
    title: "VAT Certificate",
    desc: "Registered for Value Added Tax with Rwanda Revenue Authority. Registration No. 105460356, effective 03 October 2019, Certificate No. 003906935.",
  },
  {
    icon: ShieldCheck,
    title: "RSSB Contributions Clearance",
    desc: "Rwanda Social Security Board certifies no outstanding contribution arrears. Employer No. 3112828000000K, valid 29 Jun 2022 – 31 Jul 2022.",
  },
  {
    icon: BadgeCheck,
    title: "RRA Tax Clearance",
    desc: "Rwanda Revenue Authority certifies no outstanding tax debt owed to the office. TIN 105460356, valid 29 Jun 2022 – 27 Sep 2022.",
  },
];

const academicCertifications = [
  {
    icon: GraduationCap,
    title: "Diploma — Technology: Electrical Option",
    desc: "Kigali Institute of Science and Technology (KIST). Awarded with Credit to Emmanuel Ndindabahizi, 24 March 2011.",
  },
  {
    icon: GraduationCap,
    title: "Diploma — Electrical & Electronics Engineering",
    desc: "IPRC Kicukiro College of Technology. Biomedical Equipment Technology option, awarded with Distinction, 27 March 2014.",
  },
  {
    icon: GraduationCap,
    title: "BSc (Hons) Electronics & Telecommunications Engineering",
    desc: "University of Rwanda, College of Science and Technology. Second Class Honours, Lower Division, 25 August 2017.",
  },
];
 
const completionCertifications = [
  {
    icon: Snowflake,
    title: "RFL — Fridges & Freezers Maintenance",
    desc: "Rwanda Forensic Laboratory, Contract N° 02-000004/NC/NCB/2018/2019/RFL, Lot 3. Executed successfully for period 2018/2019.",
  },
  {
    icon: Snowflake,
    title: "RFL — Fridges & Freezers Maintenance",
    desc: "Rwanda Forensic Laboratory, Contract N° 02-000004/NC/NCB/2018/2019/RFL, Lot 3. Executed successfully for period 2019/2020.",
  },
  {
    icon: Snowflake,
    title: "RFL — Fridges & Freezers Maintenance",
    desc: "Rwanda Forensic Laboratory, Contract N° 02-000004/NC/NCB/2018/2019/RFL, Lot 3. Executed successfully for period 2020/2021.",
  },
  {
    icon: Wrench,
    title: "RNP — Air Conditioner Maintenance",
    desc: "Rwanda National Police, Contract N° 00-000004/NC/2021/2022/RNP, Lot 1. Framework agreement signed 23 May 2022, first year executed.",
  },
  {
    icon: Flame,
    title: "RFI — Firefighting & Air-Sucking Equipment",
    desc: "Rwanda Forensic Institute, Contract N° 00-000012/NC/NCB/2022/2023/RFL, Lot 5. Purchase order worth 15,611,400 RWF, closed 2023.",
  },
  {
    icon: Sparkles,
    title: "RFI — Nitrogen Generator Maintenance",
    desc: "Rwanda Forensic Institute, Contract N° 00-000017/NC/NCB/2022/2023/RFL, Lot 6. Preventive maintenance, worth 10,242,400 RWF, closed 2023.",
  },
  {
    icon: Building2,
    title: "RSB — Supply of Office Furniture",
    desc: "Rwanda Standards Board, Contract N° 000011/G/NCB/2023/2024/RSB. Signed 22 Apr 2024, worth 19,304,800 RWF, closed 21 May 2024.",
  },
  {
    icon: Snowflake,
    title: "RSB — ACs, Fridges, Freezers & Cold-Rooms",
    desc: "Rwanda Standards Board, framework Contract N° 000012/NC/NCB/2021/2022/RSB, Lot 1. Signed 07 Sep 2022, closed 06 Sep 2023.",
  },
];
 
const complianceDocs = [
  { label: "RDB Registration", value: "Code 105460356 · Registered 08 Mar 2016" },
  { label: "VAT Certificate", value: "Certificate No. 003906935 · Effective 03 Oct 2019" },
  { label: "RSSB Clearance", value: "Employer No. 3112828000000K · No arrears" },
  { label: "RRA Tax Clearance", value: "TIN 105460356 · No outstanding debt" },
];
 
const referees = [
  { name: "Lt. Col. Dr. Charles Karangwa", role: "Director General & CBM, Rwanda Forensic Laboratory", phone: "0788 634 679" },
  { name: "Kagaba Alexis", role: "Contract Manager, Rwanda Forensic Laboratory", phone: "0788 850 685" },
  { name: "Vincent Sano", role: "Chief Budget Manager, Rwanda National Police", phone: "0788 311 521" },
  { name: "Butera", role: "Procurement Specialist, Rwanda National Police", phone: "0788 312 381" },
];
 

 
function CertCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-base font-bold text-slate-900 leading-snug">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}
 
function CertGroup({ eyebrow, title, subtitle, items }) {
  return (
    <div className="mb-16 last:mb-0">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-blue-600">{eyebrow}</p>
      <h3 className="mt-2 text-center text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h3>
      {subtitle && (
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <CertCard key={i} icon={c.icon} title={c.title} desc={c.desc} />
        ))}
      </div>
    </div>
  );
}
 
function Certificate() {
  const totalCerts =
    statutoryCertifications.length + academicCertifications.length + completionCertifications.length;
 
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Track Record & Credentials</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our dedicated team of professionals brings together years of experience and expertise in electro-mechanical, 
              construction and maintenance services across Rwanda.
            </p>
          </div>
        </div>
      </section>
 
      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="bg-slate-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">Completed Projects</h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            A track record of executed contracts with national institutions.
          </p>
 
          <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-600">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-white">Client</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-white hidden md:table-cell">Scope of Work</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-white text-right">Year</th>
                </tr>
              </thead>
              <tbody>
                {completedProjects.map((p, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="px-6 py-4 align-top">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-blue-600 shrink-0" />
                        <span className="font-semibold text-sm text-slate-900">{p.client}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500 md:hidden">{p.scope}</p>
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-600 hidden md:table-cell">{p.scope}</td>
                    <td className="px-6 py-4 align-top text-right">
                      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                        {p.year}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
 
      {/* ---------------- CERTIFICATIONS (ALL) ---------------- */}
      <section id="certifications" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">Our Certifications</h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            Every certificate on file in our company profile — {totalCerts} in total across
            statutory registration, professional qualifications and client-issued completion
            certificates.
          </p>
 
          <div className="mt-14">
            <CertGroup
              title="Statutory &amp; Compliance Certificates"
              subtitle="Registration and clearance certificates on file with Rwandan authorities."
              items={statutoryCertifications}
            />
 
            <CertGroup
              title="Academic &amp; Professional Credentials"
              subtitle="Engineering qualifications held by the company's founder and Managing Director."
              items={academicCertifications}
            />
 
            <CertGroup
              title="Certificates of Good Completion"
              subtitle="Issued by client institutions confirming successful execution of each contract."
              items={completionCertifications}
            />
          </div>
        </div>
      </section>
 
      {/* ---------------- COMPLIANCE SUMMARY ---------------- */}
      <section id="compliance" className="bg-slate-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">Compliance at a Glance</h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            Quick-reference summary of the statutory documents above.
          </p>
 
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {complianceDocs.map((d, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{d.label}</p>
                  <p className="text-sm text-slate-500">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ---------------- REFEREES ---------------- */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">Referees</h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            Reach us directly, or speak to a client reference named below.
          </p>
 
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* referees */}
            <div className="space-y-4">
              {referees.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.role}</p>
                  </div>
                  <a
                    href={`tel:${r.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shrink-0"
                  >
                    <Phone className="h-3.5 w-3.5" /> {r.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certificate;