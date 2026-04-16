import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function BrochureLink({ href, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-[#e3d99b] bg-[#fff8d8] px-4 py-2 text-sm font-bold text-[#6b5a00] transition hover:bg-[#fff0a8]"
      >
        📄 {label} →
      </a>

      {hovered && (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-[360px] -translate-x-1/2 overflow-hidden rounded-xl border border-[#ddd7c0] bg-white shadow-2xl">
          <div className="border-b border-[#ece7d2] bg-[#faf8ef] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#8b7a20]">
            Brochure Preview
          </div>
          <iframe src={href} title={label} className="h-56 w-full bg-white" />
        </div>
      )}
    </div>
  );
}

export default function AxisSchoolSecurityBrochure() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedZone, setSelectedZone] = useState("main_entry");
  const [cloudTab, setCloudTab] = useState("overview");
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [brochurePage, setBrochurePage] = useState(1);
  const [brochureFile, setBrochureFile] = useState("/brochures/axis/cloud_solution.pdf");
  const [areaModalOpen, setAreaModalOpen] = useState(false);

  const axisPartnerLogo = "/images/axis/authorized-partner-logo.jpg";

  const assets = {
    proMain: "/images/responsemanaged.png",
    proCS: "/images/axis/acs-pro-3screens-man03.jpg",
    proCloud: "/images/axis/acs-pro-monitor.png",
    proStep1: "/images/entrance.png",
    proStep2: "/images/axis/acs-pro-3screens-man-01.png",
    proStep3: "/images/communicationstart.png",
    proMonitor: "/images/axis/acs-pro-monitor.png",
    proMobile: "/images/axis/iphone-acs-pro.png",
    proPhone: "/images/axis/acs-pro-mobile.jpg",
    proPackshot: "/images/axis/acs-pro-packshot.png",
    proVideo: "/videos/axis/acs_pro_promo_240523.mp4",
    bodycam: "/images/bodycam.png",
    Cloudar: "/images/cloudar.png",

    entryArea: "/images/map-popouts/main-entrance.png",
    hallwayArea: "/images/map-popouts/main-hallway.png",
    adminArea: "/images/map-popouts/admin-office.png",
    gymArea: "/images/map-popouts/gym-area.png",
    parkingArea: "/images/map-popouts/parking-lot.png",
    campusSketchMap: "/images/campus-sketch-map.png",
  };

  const valuePoints = [
    {
      title: "Safer Entrances",
      text: "Verify visitors faster, control access more confidently, and reduce front-door uncertainty.",
      icon: "🚪",
    },
    {
      title: "Faster Response",
      text: "Give staff live visibility and real-time awareness so they can act quickly.",
      icon: "⚡",
    },
    {
      title: "Better Communication",
      text: "Use intercom and audio tools to guide, warn, and inform in real time.",
      icon: "📣",
    },
    {
      title: "Smarter Operations",
      text: "Improve visibility, simplify workflows, and support future growth across the campus.",
      icon: "🧠",
    },
  ];

  const steps = [
    {
      title: "Door Event Detected",
      desc: "A door is opened at the main entrance and the event is immediately registered.",
      system: "Access Control",
      image: assets.proStep1,
    },
    {
      title: "Video Verification Begins",
      desc: "The nearest camera provides live visual context so staff can verify activity quickly.",
      system: "Video Surveillance",
      image: assets.proStep2,
    },
    {
      title: "Staff Are Alerted",
      desc: "Relevant staff receive the event with live awareness and critical details.",
      system: "Real-Time Notification",
      image: assets.proStep3,
    },
    {
      title: "Communication Starts",
      desc: "Intercom, access control, and video tools help staff communicate and respond with more control.",
      system: "Unified Communication",
      image: assets.proCloud,
    },
    {
      title: "Response Is Managed",
      desc: "Staff coordinate from one system to assess, communicate, and respond with more control.",
      system: "One Pane of Glass",
      image: assets.proMain,
    },
  ];

  const stepMessages = [
    [
      "See the event the moment it happens.",
      "Remove guesswork from the first seconds of response.",
      "Start with awareness instead of delay.",
    ],
    [
      "Verify who is present before acting.",
      "Give staff visual context immediately.",
      "Improve confidence in every decision.",
    ],
    [
      "Notify the right people right away.",
      "Reduce delay and confusion.",
      "Keep information moving in real time.",
    ],
    [
      "Use communication tools to guide behavior more clearly.",
      "Support faster decisions during uncertainty.",
      "Help connect response actions more smoothly.",
    ],
    [
      "Coordinate response from one system.",
      "Keep staff aligned from detection through action.",
      "Strengthen confidence across the building.",
    ],
  ];

  const buildingZones = {
    main_entry: {
      name: "Main Entrance",
      risk: "High-traffic access point",
      focus: [
        "Visitor screening",
        "Vestibule control",
        "Video intercom",
        "Front-door camera coverage",
      ],
      whyItMatters: [
        "Verify visitors before entry is granted.",
        "Allow staff to see and speak before unlocking.",
        "Create a more controlled and documented entry process.",
      ],
      result:
        "Front office staff can verify, communicate, and unlock only when appropriate.",
      marker: { left: "15%", top: "43%" },
      visualTitle: "Main Entrance Security Stack",
      visualDesc:
        "A visual overview of the main entrance showing how Axis devices support controlled access, visitor verification, and front-door awareness.",
      equipment: [
        "AXIS video intercom at the front door",
        "AXIS fixed camera covering entry activity",
        "Door controller for managed access",
        "Front desk live video verification",
      ],
      image: assets.entryArea,
    },
    hallway: {
      name: "Main Hallway",
      risk: "Movement between classrooms and shared spaces",
      focus: [
        "Indoor cameras",
        "Targeted messaging",
        "Hallway visibility",
        "Faster incident awareness",
      ],
      whyItMatters: [
        "Improve visibility where daily movement happens most.",
        "Support faster review of incidents and behavior.",
        "Guide students more effectively during disruptions.",
      ],
      result:
        "Teams can monitor movement, investigate issues, and guide students more quickly.",
      marker: { left: "48%", top: "48%" },
      visualTitle: "Hallway Awareness Layer",
      visualDesc:
        "A hallway view showing camera coverage and notification tools that help staff stay aware of movement and respond faster.",
      equipment: [
        "AXIS hallway dome cameras",
        "AXIS network audio speaker",
        "Event pop-up awareness tools",
        "Camera Station review and monitoring",
      ],
      image: assets.hallwayArea,
    },
    admin: {
      name: "Administration Office",
      risk: "Critical decision point during incidents",
      focus: [
        "Unified event dashboard",
        "Live monitoring",
        "Remote door control",
        "Coordinated response tools",
      ],
      whyItMatters: [
        "Bring visibility and action into one place.",
        "Help administrators react without switching between systems.",
        "Support faster decisions when time matters.",
      ],
      result:
        "Administrators gain a single location to see events and act fast.",
      marker: { left: "44%", top: "73%" },
      visualTitle: "Administrative Response Office",
      visualDesc:
        "A reception or admin-area view showing monitoring, event awareness, and control tools in a central decision-making space.",
      equipment: [
        "AXIS Camera Station workstation",
        "Live monitoring displays",
        "Door control dashboard",
        "Alert and event management tools",
      ],
      image: assets.adminArea,
    },
    gym: {
      name: "Gym / Event Space",
      risk: "Large gatherings and after-hours use",
      focus: [
        "Wide-area video coverage",
        "Event messaging",
        "Access scheduling",
        "Supervision support",
      ],
      whyItMatters: [
        "Improve control during large gatherings.",
        "Support after-hours events and visitors.",
        "Strengthen oversight before, during, and after events.",
      ],
      result:
        "Large gatherings become more manageable before, during, and after events.",
      marker: { left: "74%", top: "28%" },
      visualTitle: "Gym and Shared-Space Coverage",
      visualDesc:
        "A larger-area view showing how Axis devices support visibility, announcements, and managed access during events and after-hours activity.",
      equipment: [
        "AXIS wide-area camera coverage",
        "AXIS audio messaging tools",
        "Scheduled access control",
        "Remote event monitoring",
      ],
      image: assets.gymArea,
    },
    parking: {
      name: "Parking Lot",
      risk: "Arrival, dismissal, and exterior activity",
      focus: [
        "Exterior cameras",
        "Perimeter awareness",
        "Event verification",
        "Response support",
      ],
      whyItMatters: [
        "Improve awareness outside the building.",
        "Review arrival and dismissal activity more clearly.",
        "Support investigations with better exterior context.",
      ],
      result:
        "Staff gain better awareness of exterior activity and respond with better information.",
      marker: { left: "84%", top: "83%" },
      visualTitle: "Parking Lot and Perimeter View",
      visualDesc:
        "An exterior area view showing how Axis cameras and perimeter awareness tools support pickup, arrival, dismissal, and outdoor response.",
      equipment: [
        "AXIS exterior bullet cameras",
        "PTZ coverage for larger outdoor areas",
        "Perimeter event awareness",
        "Audio warning and response support",
      ],
      image: assets.parkingArea,
    },
  };

  const cloudTabs = {
    overview: {
      title: "Cloud-connected management",
      blurb: [
        "Connect users, devices, and system health into one managed layer.",
        "Support remote access without complex IT setup.",
        "Extend operations beyond a single workstation.",
      ],
      bullets: [
        "Device and server visibility",
        "User and license management",
        "Remote operational access",
      ],
      image: assets.proCloud,
    },
    browser: {
      title: "Browser-based access",
      blurb: [
        "Use a web client from a PC or Mac without extra software installation.",
        "View, search, export, and share video more easily.",
        "Give teams simpler access when they need speed and flexibility.",
      ],
      bullets: [
        "PC and Mac support",
        "Live and recorded video access",
        "Easier access for more users",
      ],
      image: assets.proMonitor,
    },
    mobile: {
      title: "Mobile visibility",
      blurb: [
        "Stay aware while away from a workstation.",
        "Support event notifications and action on the go.",
        "Help administrators and responders act while mobile.",
      ],
      bullets: [
        "Live awareness on the go",
        "Event notifications",
        "Better continuity during active situations",
      ],
      image: assets.proPhone,
    },
  };

  const guidedCards = [
    { label: "A guided incident simulation", href: "#simulation" },
    { label: "A clickable school security map", href: "#map" },
    { label: "A cloud-connected operations overview", href: "#cloud" },
  ];

  const zone = buildingZones[selectedZone];
  const progress = useMemo(
    () => ((activeStep + 1) / steps.length) * 100,
    [activeStep, steps.length]
  );

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 9000);

    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#efefea] text-[#1f2937]">
      <div className="pointer-events-none fixed left-0 top-0 z-0 h-full w-4 bg-[#b32025]" />

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-[0.09]">
       <img
  src="/logo.png"
  alt="Northeast Data"
  className="w-80 h-auto object-contain drop-shadow-md"
/>
      </div>

      <div className="relative z-10 pl-[60px]">
        <section className="relative overflow-hidden border-b border-[#d9d7c8] bg-gradient-to-br from-[#f8f8f3] via-[#efefea] to-[#e6e3d5]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#f7e8a3] blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#fff5c8] blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative w-full border-b border-[#d9d7c8] bg-[#f3f1ea]">
            <div className="flex w-full flex-col gap-6 px-8 py-8 md:flex-row md:items-center md:justify-between md:px-14 lg:px-20">
              <div className="flex items-center gap-10">
                <img
                  src="/logo.png"
                  alt="Northeast Data"
                  className="h-auto w-auto max-h-40 object-contain md:max-h-52 lg:max-h-64"
                />
                <div>
                  <div className="text-5xl font-black leading-[0.95] tracking-[-0.02em] text-[#111827] md:text-7xl lg:text-8xl">
                    Northeast Data Inc.
                  </div>
                  <div className="mt-1 text-base font-medium text-[#6b7280] md:text-lg">
                    Network Integration &amp; Security Solutions
                  </div>
                </div>
              </div>

              <div className="text-left text-sm leading-7 text-[#6b7280] md:text-right md:text-base">
                <div>nedatainfo@northeastdata.com</div>
                <div>www.northeastdata.com</div>
                <div>Serving PA &amp; Nationwide</div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-full px-6 py-20 md:px-10 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="inline-flex rounded-full border border-[#d8c96d] bg-[#fff4bf] px-8 py-4 text-xl font-black uppercase tracking-[0.22em] text-[#6b5a00] shadow-md">
                    Interactive School Security Brochure
                  </div>

                  <h1 className="mt-6 max-w-5xl text-3xl font-black leading-[1] text-[#111827] md:text-5xl xl:text-6xl">
                    See risk sooner.
                    <br />
                    Respond faster.
                    <br />
                    Protect your school with more control.
                  </h1>

                  <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-[#6b7280] md:text-lg">
                    See what’s happening faster when cameras, access control,
                    intercom, audio, and management tools work together as one
                    connected system.
                  </p>

                  <div className="mt-8 max-w-3xl space-y-3">
                    {[
                      "See where risk exists across the building.",
                      "Understand how cameras, doors, intercoms, and audio work together.",
                      "Give administrators a clearer path to safer entrances, faster response, and better control.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-lg leading-8 text-[#4b5563] md:text-xl"
                      >
                        <div className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d1af22]" />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.18 } },
                    }}
                    className="mt-10 max-w-4xl"
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                      className="text-3xl font-black leading-[1] text-[#111827] md:text-5xl xl:text-6xl"
                    >
                      What schools are dealing with every day
                    </motion.div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        "Unverified visitors entering the building",
                        "Incidents happening without real-time visibility",
                        "Delays in communication during emergencies",
                        "Disconnected systems slowing response",
                        "Limited visibility across hallways and shared spaces",
                        "Challenges managing after-hours activity and events",
                      ].map((item) => (
                        <motion.div
                          key={item}
                          variants={{
                            hidden: { opacity: 0, y: 18, scale: 0.98 },
                            show: {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              transition: { duration: 0.45 },
                            },
                          }}
                          className="flex items-start gap-3 rounded-xl px-5 py-4 text-lg font-bold text-[#1f2937]"
                        >
                          <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                          <div>{item}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="mt-10 flex w-full justify-center">
                    <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
                      {[
                        { label: "Launch Simulation", href: "#simulation" },
                        { label: "Explore Building Map", href: "#map" },
                        {
                          label: "Book a Walkthrough",
                          href: "mailto:nedatainfo@northeastdata.com?subject=School%20Security%20Walkthrough",
                        },
                      ].map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-center rounded-xl border border-[#d4b83f] bg-[#f6dd75] px-8 py-4 text-center text-base font-black uppercase tracking-[0.18em] text-[#1f2937] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f2d65c]"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[2rem] border border-[#d8d4bf] bg-white p-6 shadow-xl"
                >
                  <div>
                    <div className="text-xl font-black uppercase tracking-[0.26em] text-[#8b7a20]">
                      Product Video
                    </div>
                    <div className="mt-2 text-2xl font-black text-[#111827]">
                      See AXIS Camera Station Pro in action
                    </div>
                  </div>

           <div className="overflow-hidden rounded-2xl border border-[#ece7cf] shadow-sm">
  <iframe
    className="w-full h-[420px]"
    src="https://www.youtube.com/embed/LORK1sGpsMc?rel=0&modestbranding=1&playsinline=1"
    title="Axis Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>

                  <div className="mt-6 grid gap-4">
                    {guidedCards.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.15 * index }}
                        whileHover={{ y: -4, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative block w-full overflow-hidden rounded-2xl border border-[#ece7cf] bg-[#faf8ef] p-4 text-left text-base font-bold text-[#1f2937] shadow-sm transition hover:bg-[#fff6c9] hover:shadow-lg"
                      >
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[100%] group-hover:opacity-100" />

                        <div className="relative flex items-center justify-between gap-4">
                          <div>
                            <div>{item.label}</div>
                       <div className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[#b32025]">
  Click to explore
</div>
                          </div>

                          <div className="shrink-0 rounded-full border border-[#d8c96d] bg-[#fff4bf] px-3 py-2 text-sm font-black text-[#6b5a00] transition group-hover:translate-x-1">
                            →
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#e2d799] bg-[#fff8d8] p-5">
                    <div className="text-xl font-black uppercase tracking-[0.2em] text-[#7a6500]">
                      Why this matters
                    </div>
                    <div className="mt-3 space-y-2">
                      {[
                        "Instantly see what’s happening in real time.",
                        "Verify threats faster.",
                        "Respond with better information right away.",
                        "Reduce delay when seconds matter.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-[#374151]"
                        >
                          <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                          <div>{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {valuePoints.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="rounded-2xl border border-[#e1dcae] bg-[#fff6c9] p-5 shadow-sm"
                  >
                    <div className="mb-3 text-3xl">{item.icon}</div>
                    <div className="text-sm font-black uppercase tracking-[0.08em] text-[#6b5a00]">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[#374151]">
                      {item.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="simulation" className="bg-[#efefea] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <div className="text-4xl font-black uppercase tracking-[0.3em] text-[#8b7a20]">
                Simulation
              </div>
              <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
                Walk through a real-world security event
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-lg">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#8b7a20]">
                      Incident Progress
                    </div>
                    <div className="mt-2 text-2xl font-black text-[#111827]">
                      Simulation Timeline
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (activeStep === steps.length - 1) setActiveStep(0);
                        setIsPlaying((prev) => !prev);
                      }}
                      className="rounded-xl border border-[#d6bc43] bg-[#fff0a8] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-[#6b5a00] shadow-sm transition hover:-translate-y-0.5"
                    >
                      {isPlaying ? "Pause" : "Play"}
                    </button>
                    <div className="text-sm font-black text-[#7a6500]">
                      {activeStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>

                <div className="mb-6 h-2 rounded-full bg-[#ece8d7]">
                  <motion.div
                    className="h-2 rounded-full bg-[#e4c64d]"
                    animate={{ width: `${progress}%` }}
                  />
                </div>

                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <button
                      key={step.title}
                      onClick={() => setActiveStep(i)}
                      className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                        activeStep === i
                          ? "border-[#d6bc43] bg-[#fff0a8] text-[#111827] shadow-md"
                          : "border-[#ece7d2] bg-[#faf8ef] text-[#1f2937] hover:bg-[#fff6c9] hover:shadow-md"
                      }`}
                    >
                      <div
                        className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                          activeStep === i
                            ? "bg-[#1f2937] text-white"
                            : "bg-[#f3de7c] text-[#1f2937]"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-lg font-extrabold uppercase tracking-[0.25em] text-amber-600 md:text-xl">
                          {i === 0 ? "Start Here → Step 1" : `Step ${i + 1}`}
                        </div>
                        <div className="mt-1 text-lg font-black">{step.title}</div>
                        <div className="mt-1 text-sm opacity-80">{step.system}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  className="rounded-[2rem] border border-[#ddd7c0] bg-white p-8 shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                        Current Event
                      </div>
                      <h3 className="mt-3 text-4xl font-black text-[#111827]">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                    <div className="rounded-full border border-[#e4d487] bg-[#fff8d8] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#6b5a00]">
                      {steps[activeStep].system}
                    </div>
                  </div>

                  <p className="mt-6 max-w-2xl text-xl leading-8 text-[#4b5563]">
                    {steps[activeStep].desc}
                  </p>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-[#ece7d2] bg-[#f5f5f0]">
                    <div className="flex h-[420px] w-full items-center justify-center">
                      <img
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-[#e3d99b] bg-[#fff8d8] p-5">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-[#7a6500]">
                      What this means for you
                    </div>
                    <div className="mt-3 space-y-2">
                      {stepMessages[activeStep].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7 text-[#374151]"
                        >
                          <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                          <div>{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="map" className="border-t border-[#ddd9c8] bg-[#f6f5ef] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <div className="text-xs font-black uppercase tracking-[0.3em] text-[#8b7a20]">
                Interactive Campus Map
              </div>
              <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
                Explore how security works across the building
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6b7280] md:text-lg">
                Click the glowing security points to see where risk exists and how a connected
                Axis solution improves visibility, communication, and response.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between gap-4">
                <div>
 <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#e4d487] bg-[#111827] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg">
  <span className="animate-pulse text-sm">👆</span>
  <span className="animate-pulse">Click the glowing dots</span>
</div>
</div>

                  <div className="hidden rounded-full border border-[#e3d99b] bg-[#fff8d8] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6b5a00] md:inline-flex">
                    Interactive Demo
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e5dfc7] bg-white">
                  <img
                    src={assets.campusSketchMap}
                    alt="Interactive campus sketch map"
                    className="block w-full h-auto object-contain"
                  />

                  {Object.entries(buildingZones).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedZone(key);
                        setAreaModalOpen(true);
                      }}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition hover:scale-110"
                      style={{ left: item.marker.left, top: item.marker.top }}
                      aria-label={item.name}
                      type="button"
                    >
                      <div className="relative flex h-10 w-10 items-center justify-center">
                        <motion.span
                          className="absolute inline-flex h-10 w-10 rounded-full bg-[#f3d44a]/40"
                          animate={{ scale: [1, 1.4, 1], opacity: [0.45, 0.1, 0.45] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <motion.span
                          className="absolute inline-flex h-16 w-16 rounded-full bg-[#f3d44a]/15"
                          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.18, 0.04, 0.18] }}
                          transition={{ repeat: Infinity, duration: 2.6 }}
                        />
                        <span
                          className={`relative flex h-8 w-8 items-center justify-center rounded-full border-4 shadow-md ${
                            selectedZone === key
                              ? "border-[#d1af22] bg-[#f3d44a]"
                              : "border-[#f1e8b2] bg-white"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              selectedZone === key ? "bg-[#111827]" : "bg-[#d1af22]"
                            }`}
                          />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 text-right text-xs font-black uppercase tracking-[0.16em] text-[#8b7a20]">
                  Interactive Campus Security Map
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedZone}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  className="rounded-[2rem] border border-[#ddd7c0] bg-white p-8 shadow-xl"
                >
                  <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                    Selected Area
                  </div>
                  <h3 className="mt-3 text-4xl font-black text-[#111827]">{zone.name}</h3>
                  <div className="mt-4 inline-flex rounded-full border border-[#eedf93] bg-[#fff6c9] px-4 py-2 text-sm font-bold text-[#6b5a00]">
                    Risk: {zone.risk}
                  </div>

                  <div className="mt-6">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-[#8b7a20]">
                      Recommended Focus
                    </div>
                    <div className="mt-3 grid gap-3">
                      {zone.focus.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-[#ece7d2] bg-[#faf8ef] px-4 py-3 text-sm font-semibold text-[#374151]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#e3d99b] bg-[#fff8d8] p-5">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-[#7a6500]">
                      Why it matters
                    </div>
                    <div className="mt-3 space-y-2">
                      {zone.whyItMatters.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-[#374151]"
                        >
                          <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                          <div>{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-[#ddd7c0] bg-[#faf8ef] p-5">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-[#8b7a20]">
                      Outcome
                    </div>
                    <button
                      type="button"
                      onClick={() => setAreaModalOpen(true)}
                      className="mt-6 inline-flex items-center justify-center rounded-xl border border-[#d4b83f] bg-[#f6dd75] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#1f2937] shadow-sm transition hover:-translate-y-0.5"
                    >
                      View Area Equipment
                    </button>
                    <p className="mt-2 text-lg leading-8 text-[#374151]">{zone.result}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="cloud" className="border-t border-[#ddd9c8] bg-[#f6f5ef] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <div className="text-xs font-black uppercase tracking-[0.3em] text-[#8b7a20]">
                Cloud Solution Layer
              </div>
              <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
                Extend the system with cloud-connected visibility and control
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.24em] text-[#8b7a20]">
                      How it works
                    </div>
                    <div className="mt-2 text-2xl font-black text-[#111827]">
                      School-to-cloud architecture
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setBrochurePage(1);
                    setBrochureFile("/brochures/axis/cloud_solution.pdf");
                    setBrochureOpen(true);
                  }}
                  className="mb-5 rounded-xl border border-[#d4b83f] bg-[#fff4bf] px-5 py-3 text-sm font-bold text-[#6b5a00]"
                >
                  Click Here to View Cloud Solution Brochure
                </button>

                <div className="overflow-hidden rounded-[1.6rem] border border-[#ece7d2] bg-[#faf8ef]">
                  <img
                    src={assets.Cloudar}
                    alt="School-to-cloud architecture"
                    className="h-[420px] w-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {Object.entries(cloudTabs).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setCloudTab(key)}
                    className={`w-full rounded-[1.5rem] border p-5 text-left transition ${
                      cloudTab === key
                        ? "border-[#d6bc43] bg-[#fff0a8] text-[#111827]"
                        : "border-[#ddd7c0] bg-white text-[#1f2937] hover:bg-[#faf8ef]"
                    }`}
                  >
                    <div className="text-xs font-black uppercase tracking-[0.24em] opacity-70">
                      Cloud View
                    </div>
                    <div className="mt-2 text-2xl font-black">{value.title}</div>
                    <div className="mt-3 space-y-1">
                      {value.blurb.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 opacity-80"
                        >
                          <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-current" />
                          <div>{item}</div>
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#ddd9c8] bg-[#f6f5ef] px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.24em] text-[#8b7a20]">
                    Main Video Platform
                  </div>
                  <div className="mt-2 text-2xl font-black text-[#111827]">
                    AXIS Camera Station Pro
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] border border-[#ece7d2] bg-gradient-to-br from-[#fff8d8] via-[#fff6c9] to-white p-8">
                <img
                  src={assets.proCS}
                  alt="AXIS Camera Station Pro"
                  className="w-full rounded-2xl object-cover"
                />

                <div className="mt-6 flex flex-col items-center">
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-[#8b7a20]">
                    Scan Me
                  </div>

                  <div className="mt-2 text-center text-sm font-semibold text-[#374151]">
                    Explore Axis solutions for education
                  </div>

                  <div className="relative mx-auto mt-4 flex h-[220px] w-[220px] cursor-pointer items-center justify-center rounded-2xl border border-[#ece7d2] bg-[#faf8ef] p-3">
                    <div className="absolute inline-flex h-full w-full animate-pulse rounded-2xl border-2 border-[#f3d44a]/40" />

                    <a
                      href="https://www.axis.com/en-us/products/axis-camera-station-pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block h-full w-full"
                    >
                      <img
                        src="/images/axis-camera-station-edge-qr.png"
                        alt="QR code to Axis Camera Station Edge"
                        className="h-full w-full object-contain transition hover:scale-105"
                      />
                    </a>
                  </div>

                  <div className="mt-3 text-xs font-bold text-[#8b7a20]">
                    Click or scan
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-7 shadow-xl">
                <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                  Why it stands out
                </div>
                <h3 className="mt-3 text-3xl font-black text-[#111827]">
                  Built for visibility, investigations, and growth
                </h3>
                <div className="mt-6 space-y-3">
                  {[
                    "Supports efficient investigations with smart search, scrubbing, export, and reporting.",
                    "Brings video, access control, intercom, and related Axis devices together more cleanly.",
                    "Adds browser-based and cloud-connected capabilities for users, devices, and system management.",
                    "Scales from a single site to larger or multi-building school environments.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#ece7d2] bg-[#faf8ef] px-4 py-3 text-sm leading-6 text-[#374151]"
                    >
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-xl">
                <img
                  src={assets.proPhone}
                  alt="AXIS Camera Station Pro mobile access"
                  className="mx-auto h-72 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#ddd9c8] bg-[#efefea] px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-xl">
              <div className="mb-5 text-2xl font-black text-[#111827]">
                AXIS Camera Station Edge
              </div>
              <div className="overflow-hidden rounded-[1.6rem] border border-[#ece7d2] bg-gradient-to-br from-[#fff8d8] via-[#fff6c9] to-white p-8">
                <img
                  src={assets.proMonitor}
                  alt="AXIS Camera Station Edge visual"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-7 shadow-xl">
                <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                  Why it stands out
                </div>
                <h3 className="mt-3 text-3xl font-black text-[#111827]">
                  Built for simple daily use
                </h3>
                <div className="mt-6 space-y-3">
                  {[
                    "Gives staff live video access without a complicated workflow.",
                    "Makes it easier to review events, verify activity, and stay aware.",
                    "Supports mobile use so decision-makers can stay connected away from a desk.",
                    "Provides a practical entry point for schools that want a cleaner surveillance experience.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#ece7d2] bg-[#faf8ef] px-4 py-3 text-sm leading-6 text-[#374151]"
                    >
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#faf8ef]">
                <img
                  src={assets.proMobile}
                  alt="Mobile video operations"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#ddd9c8] bg-[#f6f5ef] px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-xl">
              <div className="mb-5 text-2xl font-black text-[#111827]">
                AXIS Camera Station Storage
              </div>
              <div className="flex items-center justify-center rounded-2xl border border-[#ece7d2] bg-white p-6">
                <img
                  src={assets.proPackshot}
                  alt="AXIS Camera Station Storage"
                  className="max-h-80 w-auto object-contain"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-7 shadow-xl">
              <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                Why it matters
              </div>
              <h3 className="mt-3 text-3xl font-black text-[#111827]">
                Keep important video available
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  "Retention and storage planning should support real investigations, not just basic recording.",
                  "Larger schools often need more flexibility as camera counts and expectations increase.",
                  "Expansion recorders and flexible server options help the system grow more cleanly.",
                  "Reliable recording supports confidence when incidents need review later.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[#ece7d2] bg-[#faf8ef] px-4 py-3 text-sm leading-6 text-[#374151]"
                  >
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefea] px-6 py-16 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-xl">
              <div className="mb-5 text-2xl font-black text-[#111827]">
                See what fixed cameras may miss
              </div>
              <div className="flex h-[320px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#ddd7c0] bg-[#f4f3ec]">
                <img
                  src={assets.bodycam}
                  alt="Body worn camera in hallway"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ddd7c0] bg-white p-7 shadow-xl">
              <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                Why it matters
              </div>
              <h3 className="mt-3 text-3xl font-black text-[#111827]">
                A clearer record of what actually happened
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  "Provide an on-person view during student incidents, hallway events, and security responses.",
                  "Support staff accountability and transparency with better captured context.",
                  "Improve evidence collection for investigations, reporting, and follow-up review.",
                  "Help reduce uncertainty when events move beyond the view of mounted cameras.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[#ece7d2] bg-[#faf8ef] px-4 py-3 text-sm leading-6 text-[#374151]"
                  >
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f5ef] px-6 py-16 md:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#ddd7c0] bg-white p-8 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                  Why Northeast Data
                </div>
                <h2 className="mt-3 text-3xl font-black text-[#111827] md:text-5xl">
                  The right technology matters, but so does the right partner
                </h2>
                <div className="mt-8 rounded-2xl border border-[#e5dfc7] bg-[#faf8ef] p-5">
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-[#8b7a20]">
                    Authorized Partner
                  </div>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-20 w-full max-w-[240px] items-center justify-center rounded-xl border border-[#ece7d2] bg-white px-4 py-3">
                      <img
                        src={axisPartnerLogo}
                        alt="Authorized Axis Partner"
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-[#4b5563]">
                      Northeast Data is an authorized Axis partner, helping
                      schools evaluate, design, and implement security solutions
                      that align with operational, safety, and budget goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Solution-focused guidance, not just product recommendations",
                  "A practical approach to entrances, visibility, communication, and response",
                  "Support for phased upgrades and long-term planning",
                  "A more consultative experience for school leadership teams",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#e5dfc7] bg-[#fff9de] p-5 text-sm font-semibold leading-6 text-[#374151]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f5ef] px-6 py-20 md:px-10">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-[#e0d389] bg-gradient-to-br from-[#fff7cf] via-[#fffbe6] to-white p-8 shadow-xl md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex rounded-full border border-[#d4b83f] bg-[#fff4bf] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#6b5a00]">
                  Scan Me
                </div>

                <h2 className="mt-5 text-4xl font-black text-[#111827] md:text-5xl">
                  Explore more from Axis for education
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-[#4b5563] md:text-lg">
                  Scan this code to open the Axis education solutions page and explore
                  more ideas around school safety, campus awareness, and connected
                  security technologies.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Open the Axis education solutions page",
                    "Share it easily during meetings or walkthroughs",
                    "Give decision-makers a quick way to keep exploring",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#374151]"
                    >
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-[2rem] bg-[#f3d44a]/30 blur-2xl" />

                  <div className="relative rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-2xl">
                    <div className="mb-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#8b7a20]">
                      Scan to Learn More
                    </div>

                    <div className="relative mx-auto flex h-[240px] w-[240px] items-center justify-center rounded-2xl border border-[#ece7d2] bg-[#faf8ef] p-3">
                      <div className="absolute inline-flex h-full w-full animate-pulse rounded-2xl border-2 border-[#f3d44a]/40" />
                      <a
                        href="https://www.axis.com/en-us/solutions/education?utm_source=Print&utm_medium=Flyer&utm_campaign=Americas-ncam-us-CampusSecurity-2024&utm_id=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block h-full w-full"
                      >
                        <img
                          src="/images/axis-education-qr.png"
                          alt="QR code to Axis education solutions page"
                          className="h-full w-full object-contain transition hover:scale-105"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefea] px-6 pb-20 pt-8 text-center md:px-10">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#e0d389] bg-gradient-to-br from-[#fff7cf] via-[#fffbe6] to-white p-10 shadow-xl md:p-14">
            <div className="text-xs font-black uppercase tracking-[0.32em] text-[#8b7a20]">
              Next Step
            </div>
            <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
              See exactly how this could work in your school.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:nedatainfo@northeastdata.com?subject=School%20Security%20Walkthrough"
                className="inline-flex items-center justify-center rounded-2xl border border-[#d4b83f] bg-[#f6dd75] px-8 py-4 text-base font-black uppercase tracking-[0.18em] text-[#1f2937] shadow-sm transition hover:-translate-y-0.5"
              >
                Book a Walkthrough
              </a>
              <a
                href="https://www.northeastdata.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-[#cfcbb6] bg-white px-8 py-4 text-base font-bold uppercase tracking-[0.18em] text-[#1f2937] shadow-sm transition hover:-translate-y-0.5"
              >
                Visit Northeast Data
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#d9d7c8] bg-[#f3f1ea] px-6 py-10 md:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-black text-[#111827]">Northeast Data Inc.</div>
              <div className="mt-1 text-sm leading-6 text-[#6b7280]">
                Network Integration &amp; Security Solutions
              </div>
              <div className="mt-3 text-sm leading-6 text-[#6b7280]">
                Axis products and solutions shown in this brochure are presented by
                Northeast Data as an authorized partner. All trademarks and brand
                assets remain the property of their respective owners.
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <div className="flex h-16 w-[220px] items-center justify-center rounded-xl border border-[#ddd7c0] bg-white px-4 py-3 shadow-sm">
                <img
                  src={axisPartnerLogo}
                  alt="Authorized Axis Partner"
                  className="max-h-10 w-auto object-contain"
                />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#8b7a20]">
                Authorized Partner
              </div>
            </div>
          </div>
        </footer>
      </div>

      {brochureOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-4">
          <div className="relative h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e5e7eb] bg-[#f8f8f3] px-5 py-3">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-[#8b7a20]">
                Brochure Viewer
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setBrochureOpen(false)}
                  className="rounded-lg bg-[#111827] px-4 py-2 text-sm font-bold text-white"
                >
                  Close
                </button>
              </div>
            </div>
            <iframe
              src={`${brochureFile}#page=${brochurePage}&zoom=125`}
              title="Brochure Viewer"
              className="h-[calc(92vh-57px)] w-full"
            />
          </div>
        </div>
      )}

      {areaModalOpen && (
        <div className="fixed inset-0 z-[120] overflow-y-auto bg-black/60 px-4 py-6">
          <div className="relative h-[96vh] w-[95vw] max-w-[1500px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#ece7d2] bg-[#f8f8f3] px-6 py-4">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.22em] text-[#8b7a20]">
                  Interactive Area View
                </div>
                <div className="mt-1 text-2xl font-black text-[#111827]">
                  {zone.visualTitle}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setAreaModalOpen(false)}
                className="rounded-xl bg-[#111827] px-4 py-2 text-sm font-bold text-white"
              >
                Close
              </button>
            </div>

            <div className="max-h-[85vh] overflow-y-auto">
              <div className="p-6">
                <div className="grid gap-6 lg:grid-cols-[1.7fr_0.55fr]">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#ddd7c0] bg-white shadow-inner">
                    <img
                      src={zone.image}
                      alt={zone.name}
                      className="h-[500px] w-full object-contain sm:h-[620px] lg:h-[760px]"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-2xl border border-[#ece7d2] bg-[#faf8ef] p-4">
                      <div className="text-xs font-black uppercase tracking-[0.22em] text-[#8b7a20]">
                        Example Axis Equipment
                      </div>
                      <div className="mt-3 grid gap-2">
                        {zone.equipment.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-[#ece7d2] bg-white px-3 py-2 text-xs font-semibold leading-5 text-[#374151]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#ddd7c0] bg-[#faf8ef] p-4">
                      <div className="text-xs font-black uppercase tracking-[0.22em] text-[#8b7a20]">
                        Outcome
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#374151]">
                        {zone.result}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#e3d99b] bg-[#fff8d8] p-4">
                      <div className="text-xs font-black uppercase tracking-[0.22em] text-[#7a6500]">
                        Area View
                      </div>
                      <div className="mt-2 text-sm leading-6 text-[#374151]">
                        {zone.visualDesc}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#e3d99b] bg-[#fff8d8] p-4">
                      <div className="text-xs font-black uppercase tracking-[0.22em] text-[#7a6500]">
                        Recommended Focus
                      </div>
                      <div className="mt-3 grid gap-3 md:grid-cols-2">
                        {zone.focus.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-[#ece7d2] bg-white px-3 py-2 text-sm font-semibold text-[#374151]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}