import React from "react";

import {
  Snowflake,
  Wrench,
  Flame,
  ShieldCheck,
  Building2,
  Zap,
  Package,
  Cog,
  FileText,
  Phone,
  CheckCircle2,
  Landmark,
  BadgeCheck,
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
    desc: "Rwanda Revenue Authority certifies no outstanding tax debt owed to the office. TIN 105460356",
  },
];

const completionCertifications = [
  {
    title: "RFL — Fridges & Freezers Maintenance",
    organization: "Rwanda Forensic Laboratory",
    contract: "02-000004/NC/NCB/2018/2019/RFL",
    desc: "Lot 3. Executed successfully for period 2018/2019.",
    icon: Snowflake,
  },
  {
    title: "RFL — Fridges & Freezers Maintenance",
    organization: "Rwanda Forensic Laboratory",
    contract: "01-000004/NC/NCB/2018/2019/RFL",
    desc: "Lot 3. Executed successfully for period 2019/2020.",
    icon: Snowflake,
  },
  {
    title: "RFL — Fridges & Freezers Maintenance",
    organization: "Rwanda Forensic Laboratory",
    contract: "00-000004/NC/NCB/2018/2019/RFL",
    desc: "Lot 3. Executed successfully for period 2020/2021.",
    icon: Snowflake,
  },
  {
    title: "RNP — Air Conditioner Maintenance",
    organization: "Rwanda National Police",
    contract: "00-000004/NC/NCB/2021/2022/RNP",
    desc: "Framework agreement signed 2022 - 2025.",
    icon: Wrench,
  },
  {
    title: "RFL — Firefighting & Air-Sucking Equipment",
    organization: "Rwanda Forensic Institute",
    contract: "00-000012/NC/NCB/2022/2023/RFL",
    desc: "Lot 5. Closed 2023 - 2026.",
    icon: Flame,
  },
  {
    title: "RFL — Nitrogen Generator Maintenance",
    organization: "Rwanda Forensic Institute",
    contract: "00-000017/NC/NCB/2022/2023/RFL",
    desc: "Lot 6. Preventive maintenance 2023 - 2025.",
    icon: ShieldCheck,
  },
  {
    title: "RSB — Supply of Office Furniture",
    organization: "Rwanda Standards Board",
    contract: "000011/G/NCB/2023/2024/RSB",
    desc: "Signed 22 Apr 2024, closed 21 May 2024.",
    icon: Building2,
  },
  {
    title: "RSB — ACs, Fridges, Freezers & Cold Rooms",
    organization: "Rwanda Standards Board",
    contract: "000012/NC/NCB/2021/2022/RSB",
    desc: "Framework contract. Signed 07 Sep 2022, closed 06 Sep 2023.",
    icon: Snowflake,
  },
  {
    title: "RCS — Electricity Power System",
    organization: "Rwanda Correctional Services",
    contract: "00-000015/NC/NCB/2025/2026/RCS",
    desc: "Lightning conductors. Signed Apr 2026.",
    icon: Zap,
  },
  {
    title: "RFI — Peak Scientific Nitrogen Generator",
    organization: "Rwanda Forensic Institute",
    contract: "00-000015/NC/NCB/2025/2026/RFI",
    desc: "Preventive maintenance services 2026 - 2027.",
    icon: ShieldCheck,
  },
  {
    title: "RNP — Reefer Container Spare Parts",
    organization: "Rwanda National Police",
    contract: "01-000007/G/NCB/2025/2026/RNP",
    desc: "Supply of spare parts for reefer containers.",
    icon: Package,
  },
  {
    title: "RNP — Construction Materials",
    organization: "Rwanda National Police",
    contract: "01-000003/G/NCB/2024/2025/RNP",
    desc: "Supply of construction materials for maintenance.",
    icon: Building2,
  },
  {
    title: "RNP — FPU Re-launch Requirements",
    organization: "Rwanda National Police",
    contract: "02-000014/G/NCB/2024/2025/RNP",
    desc: "Acquisition of different requirements for new generated FPU re-launch.",
    icon: Cog,
  },
  {
    title: "RFL — Biology Equipment Maintenance",
    organization: "Rwanda Forensic Laboratory",
    contract: "02-000012/NC/NCB/2022/2023/RFI",
    desc: "Preventive and curative maintenance of biology equipment.",
    icon: Cog,
  },
  {
    title: "RSB — Electrical Installations",
    organization: "Rwanda Standards Board",
    contract: "01-000023/NC/NCB/2022/2023/RSB",
    desc: "Maintenance and repair of electrical installations and equipment.",
    icon: Zap,
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
      {eyebrow && (
        <p className="text-center text-xs font-bold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </p>
      )}
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
  const totalCerts = statutoryCertifications.length + completionCertifications.length;

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
              eyebrow="Compliance"
              title="Statutory & Compliance Certificates"
              subtitle="Registration and clearance certificates on file with Rwandan authorities."
              items={statutoryCertifications}
            />

            <CertGroup
              eyebrow="Delivered Work"
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

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
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
      </section>
    </div>
  );
}

export default Certificate;