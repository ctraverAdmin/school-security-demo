import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function AxisSchoolSecurityBrochure() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedZone, setSelectedZone] = useState("main_entry");
  const [demoMode, setDemoMode] = useState("visitor");
  const [cloudTab, setCloudTab] = useState("overview");

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
      "Use audio and intercom to direct behavior.",
      "Communicate clearly during uncertainty.",
      "Help stop escalation before it spreads.",
    ],
    [
      "Coordinate response from one system.",
      "Keep staff aligned from detection through action.",
      "Strengthen confidence across the building.",
    ],
  ];

  const steps = [
    {
      title: "Door Event Detected",
      desc: "A door is opened at the main entrance and the event is immediately registered.",
      system: "Access Control",
      image: "/images/ai-hero-entrance.png",
    },
    {
      title: "Video Verification Begins",
      desc: "The nearest camera provides live visual context so staff can verify activity quickly.",
      system: "Video Surveillance",
      image: "/images/ai-monitoring-room.png",
    },
    {
      title: "Staff Are Alerted",
      desc: "Relevant staff receive the event with live awareness and critical details.",
      system: "Real-Time Notification",
      image: "/images/communication.png",
    },
    {
      title: "Communication Starts",
      desc: "Intercom and audio tools allow staff to speak, guide, or warn in the affected area.",
      system: "Intercom / Network Audio",
      image: "/images/communicationstart.png",
    },
    {
      title: "Response Is Managed",
      desc: "Staff coordinate from one system to assess, communicate, and respond with more control.",
      system: "Unified Security Response",
      image: "/images/response.png",
    },
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
      marker: { left: "26%", top: "50%" },
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
      marker: { left: "55%", top: "34%" },
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
      marker: { left: "54%", top: "70%" },
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
      marker: { left: "82%", top: "34%" },
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
      marker: { left: "82%", top: "70%" },
    },
  };

  const demoModes = {
    visitor: {
      title: "Visitor Entry",
      summary: [
        "Verify visitors before granting access.",
        "Support front office staff with live video and communication.",
        "Create a better and more secure check-in experience.",
      ],
      stats: [
        "See visitors before unlocking",
        "Support a better check-in process",
        "Capture events automatically",
      ],
      timeline: [
        "Visitor arrives at entry point",
        "Office sees live video",
        "Two-way communication begins",
        "Access is granted or denied",
      ],
    },
    lockdown: {
      title: "Emergency Response",
      summary: [
        "Connect cameras, access control, and communication tools.",
        "Give staff faster awareness when seconds matter.",
        "Support a more coordinated building response.",
      ],
      stats: [
        "Immediate live visibility",
        "Faster communication",
        "More coordinated response",
      ],
      timeline: [
        "Incident is detected",
        "Relevant cameras display",
        "Audio guidance begins",
        "Staff act from one interface",
      ],
    },
    afterhours: {
      title: "After-Hours Activity",
      summary: [
        "Stay aware of entrances and exterior areas after hours.",
        "Support athletic spaces and evening events.",
        "Document activity with better visibility and review tools.",
      ],
      stats: [
        "Scheduled door control",
        "Exterior monitoring",
        "Recorded event review",
      ],
      timeline: [
        "Door event occurs",
        "Camera verifies activity",
        "Staff receive alert",
        "Response is documented",
      ],
    },
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

  const proofPoints = [
    "Designed to support both daily operations and emergency response",
    "Can be phased in over time instead of requiring a full rip-and-replace",
    "Scales from a single school to district-wide deployments",
    "Brings security, communication, and operational visibility into one strategy",
  ];

  const cloudTabs = {
    overview: {
      title: "Cloud Overview",
      blurb: [
        "Connect devices into a managed cloud layer.",
        "Access systems, events, and tools from anywhere.",
        "Support more flexible and modern security operations.",
      ],
      bullets: [
        "Remote access to video and events",
        "Cloud-connected workflows",
        "More flexible management",
      ],
    },
    operations: {
      title: "Daily Operations",
      blurb: [
        "Simplify device access and system monitoring.",
        "Support routine review and maintenance.",
        "Make daily management easier for staff.",
      ],
      bullets: [
        "Browser-based management",
        "Simplified device onboarding",
        "Consistent operational access",
      ],
    },
    response: {
      title: "Response & Continuity",
      blurb: [
        "Keep decision-makers connected when away from a workstation.",
        "Maintain awareness during active situations.",
        "Support visibility across one site or many.",
      ],
      bullets: [
        "Anywhere visibility",
        "Centralized awareness",
        "Scalable multi-site coordination",
      ],
    },
  };

  const zone = buildingZones[selectedZone];
  const cloud = cloudTabs[cloudTab];
  const demo = demoModes[demoMode];
  const progress = useMemo(
    () => ((activeStep + 1) / steps.length) * 100,
    [activeStep, steps.length]
  );

  return (
    <div className="min-h-screen overflow-hidden bg-[#efefea] text-[#1f2937]">
      <section className="relative overflow-hidden border-b border-[#d9d7c8] bg-gradient-to-br from-[#f8f8f3] via-[#efefea] to-[#e6e3d5]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#f7e8a3] blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#fff5c8] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-12 flex items-center gap-5">
                  <img
                    src="/logo.png"
                    alt="Northeast Data"
                    className="h-auto max-h-20 w-auto object-contain md:max-h-24"
                  />
                  <div>
                    <div className="text-3xl font-black leading-tight tracking-tight text-[#111827] md:text-5xl">
                      Northeast Data
                    </div>
                    <div className="mt-1 text-base font-medium text-[#6b7280] md:text-lg">
                      Axis-Powered Security Solutions for Schools
                    </div>
                  </div>
                </div>

                <div className="inline-flex rounded-full border border-[#d8c96d] bg-[#fff4bf] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#6b5a00] shadow-sm">
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
                  Real-time situational awareness starts when cameras, access
                  control, intercom, and audio systems work together as one
                  connected platform.
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

                <div className="mt-10 max-w-4xl">
                  <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                    What schools are dealing with every day
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      "Unverified visitors entering the building",
                      "Incidents happening without real-time visibility",
                      "Delays in communication during emergencies",
                      "Disconnected systems slowing response",
                      "Limited visibility across hallways and shared spaces",
                      "Challenges managing after-hours activity and events",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-[#e5dfc7] bg-[#fff9de] px-4 py-3 text-sm font-semibold text-[#374151]"
                      >
                        <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d1af22]" />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex w-full justify-center">
                  <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
                    <a
                      href="#simulation"
                      className="flex items-center justify-center rounded-xl border border-[#d4b83f] bg-[#f6dd75] px-8 py-4 text-center text-base font-black uppercase tracking-[0.18em] text-[#1f2937] shadow-sm transition hover:-translate-y-0.5"
                    >
                      Launch Simulation
                    </a>
                    <a
                      href="#map"
                      className="flex items-center justify-center rounded-xl border border-[#cfcbb6] bg-white px-8 py-4 text-center text-base font-bold uppercase tracking-[0.18em] text-[#1f2937] shadow-sm transition hover:-translate-y-0.5"
                    >
                      Explore Building Map
                    </a>
                    <a
                      href="mailto:nedatainfo@northeastdata.com?subject=School%20Security%20Walkthrough"
                      className="flex items-center justify-center rounded-xl border border-[#d9c86a] bg-[#fff6cc] px-8 py-4 text-center text-base font-bold uppercase tracking-[0.18em] text-[#534400] shadow-sm transition hover:-translate-y-0.5"
                    >
                      Book a Walkthrough
                    </a>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[2rem] border border-[#d8d4bf] bg-white p-6 shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.26em] text-[#8b7a20]">
                      What decision-makers will see
                    </div>
                    <div className="mt-2 text-2xl font-black text-[#111827]">
                      A clearer picture of risk, response, and readiness
                    </div>
                  </div>
                  <div className="rounded-full border border-[#d8c96d] bg-[#fff4bf] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#6b5a00]">
                    
                  </div>
                </div>

                <img
                  src="/images/set.png"
                  alt="AI-generated school security visuals"
                  className="mt-6 w-full rounded-2xl border border-[#ece7cf] object-cover shadow-sm"
                />

                <div className="mt-6 grid gap-4">
                  {[
                    "A guided incident simulation",
                    "A clickable school security map",
                    "A cloud-connected operations overview",
                    "Practical reasons schools buy",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#ece7cf] bg-[#faf8ef] p-4 text-base font-semibold text-[#1f2937]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#e2d799] bg-[#fff8d8] p-5">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-[#7a6500]">
                    Why this matters
                  </div>
                  <div className="mt-3 space-y-2">
                    {[
                      "It shows risk in a way a static brochure cannot.",
                      "It helps school leaders understand the solution faster.",
                      "It makes the conversation more visual, practical, and persuasive.",
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
            <div className="text-xs font-black uppercase tracking-[0.3em] text-[#8b7a20]">
              Live Simulation
            </div>
            <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
              Walk through a real-world security event
            </h2>
            <div className="mx-auto mt-5 max-w-3xl space-y-2">
              {[
                "Click through the sequence step by step.",
                "See how the system detects, verifies, communicates, and responds.",
                "Understand how staff gain control faster during a live event.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start justify-center gap-3 text-lg leading-8 text-[#4b5563]"
                >
                  <div className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d1af22]" />
                  <div className="text-left">{item}</div>
                </div>
              ))}
            </div>
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
                <div className="text-sm font-black text-[#7a6500]">
                  {activeStep + 1} / {steps.length}
                </div>
              </div>

              <div className="mb-6 h-2 rounded-full bg-[#ece8d7]">
                <motion.div
                  className="h-2 rounded-full bg-[#e4c64d]"
                  animate={{ width: `${progress}%` }}
                />
              </div>
<div className="mb-4 text-center text-sm font-bold text-amber-600 animate-pulse">
  👇 Click a step below to walk through the incident
</div>
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(i)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                      activeStep === i
                        ? "border-[#d6bc43] bg-[#fff0a8] text-[#111827]"
                        : "border-[#ece7d2] bg-[#faf8ef] text-[#1f2937] hover:bg-[#f6f1d8]"
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
                    <div>
                      <div className="text-lg md:text-xl font-extrabold uppercase tracking-[0.25em] text-amber-600">
                        Step {i + 1}
                      </div>
                      <div className="mt-1 text-lg font-black">
                        {step.title}
                      </div>
                      <div className="mt-1 text-sm opacity-80">
                        {step.system}
                      </div>
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

                <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#ece7d2]">
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {[
                    "Live video gives visual context",
                    "Relevant access points can be managed",
                    "Staff can communicate immediately",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#ece7d2] bg-[#faf8ef] p-4 text-sm font-semibold text-[#374151]"
                    >
                      {item}
                    </div>
                  ))}
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

      <section
        id="map"
        className="border-t border-[#ddd9c8] bg-[#f6f5ef] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-[#8b7a20]">
              Clickable Building Map
            </div>
            <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
              Explore how security works across the building
            </h2>
            <div className="mx-auto mt-5 max-w-3xl space-y-2">
              {[
                "Click each area to see the risk.",
                "Review recommended technology for that location.",
                "Understand the practical outcome for staff and administrators.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start justify-center gap-3 text-lg leading-8 text-[#4b5563]"
                >
                  <div className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d1af22]" />
                  <div className="text-left">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[560px] rounded-[2rem] border border-[#ddd7c0] bg-white p-6 shadow-xl">
              <div
                className="relative h-full min-h-[500px] rounded-[1.5rem] border border-[#ebe6d2] bg-[#f4f3ec]"
                style={{
                  backgroundImage:
                    "linear-gradient(#ece8d7 1px, transparent 1px), linear-gradient(90deg, #ece8d7 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="absolute left-[13%] top-[22%] h-[60%] w-[28%] rounded-[1.5rem] border border-[#d9d4bc] bg-[#fff8cc] shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                />
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-[13%] top-[26%] z-10 w-[28%] text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#756200]"
                >
                  Main Entrance
                </motion.div>

                <div className="absolute left-[17%] top-[30%] h-[45%] w-[20%] rounded-xl border border-[#ddd7c0] bg-white" />
                <div className="absolute left-[15%] top-[28%] h-[6%] w-[2%] rounded-sm bg-[#d6cfb2]" />
                <div className="absolute left-[22%] top-[36%] h-[4%] w-[12%] rounded-md border border-[#c7be98] bg-[#e8ddb6] shadow-sm" />
                <div className="absolute left-[20.5%] top-[40.5%] h-[2.2%] w-[8%] rounded-md border border-[#c7be98] bg-[#e8ddb6]" />
                <div className="absolute left-[24.5%] top-[42.2%] h-[1.6%] w-[1.6%] rounded-full border border-[#a99658] bg-[#c7b06a]" />

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="absolute left-[43%] top-[14%] h-[34%] w-[24%] rounded-[1.5rem] border border-[#d9d4bc] bg-[#fff8cc] shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                />
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute left-[43%] top-[18%] z-10 w-[24%] text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#756200]"
                >
                  Main Hallway
                </motion.div>
                <div className="absolute left-[49%] top-[24%] h-[20%] w-[12%] rounded-xl border border-[#ddd7c0] bg-white" />

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="absolute left-[43%] top-[52%] h-[34%] w-[24%] rounded-[1.5rem] border border-[#d9d4bc] bg-[#fff8cc] shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                />
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-[43%] top-[56%] z-10 w-[24%] text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#756200]"
                >
                  Admin Office
                </motion.div>
                <div className="absolute left-[46%] top-[62%] h-[16%] w-[16%] rounded-xl border border-[#ddd7c0] bg-white" />

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="absolute left-[70%] top-[14%] h-[34%] w-[24%] rounded-[1.5rem] border border-[#d9d4bc] bg-[#fff8cc] shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                />
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                  className="absolute left-[70%] top-[19%] z-10 w-[24%] text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#756200]"
                >
                  Gym
                </motion.div>
                <div className="absolute left-[75%] top-[24%] h-[20%] w-[14%] rounded-xl border border-[#ddd7c0] bg-white" />

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="absolute left-[69%] top-[52%] h-[34%] w-[26%] rounded-[1.5rem] border border-[#d9d4bc] bg-[#fff8cc] shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                />
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-[69%] top-[56%] z-10 w-[26%] text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#756200]"
                >
                  Parking Lot
                </motion.div>
                <div className="absolute left-[73%] top-[63%] h-[16%] w-[18%] rounded-xl border border-[#ddd7c0] bg-white" />

                {Object.entries(buildingZones).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedZone(key)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transition hover:scale-105"
                    style={{ left: item.marker.left, top: item.marker.top }}
                    aria-label={item.name}
                  >
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full border-4 shadow-sm ${
                        selectedZone === key
                          ? "border-[#d1af22] bg-[#f3d44a]"
                          : "border-[#f1e8b2] bg-white"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          selectedZone === key
                            ? "bg-[#1f2937]"
                            : "bg-[#d1af22]"
                        }`}
                      />
                      <motion.div
                        className="absolute h-12 w-12 rounded-full bg-[#f3d44a]/30"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.4, 0.15, 0.4],
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </div>
                  </button>
                ))}

                <div className="absolute bottom-4 left-4 rounded-xl border border-[#ddd7c0] bg-white px-4 py-3 text-sm font-semibold text-[#4b5563] shadow-sm">
                  Demo Campus Layout
                </div>
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
                <h3 className="mt-3 text-4xl font-black text-[#111827]">
                  {zone.name}
                </h3>

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
                  <p className="mt-2 text-lg leading-8 text-[#374151]">
                    {zone.result}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ddd9c8] bg-[#efefea] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-[#8b7a20]">
              Cloud Solution Layer
            </div>
            <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
              Extend the system with cloud-connected visibility and control
            </h2>
            <div className="mx-auto mt-5 max-w-3xl space-y-2">
              {[
                "Move beyond stand-alone hardware.",
                "Support more flexible and scalable management.",
                "Give schools easier access to systems, events, and tools.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start justify-center gap-3 text-lg leading-8 text-[#4b5563]"
                >
                  <div className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d1af22]" />
                  <div className="text-left">{item}</div>
                </div>
              ))}
            </div>
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
                <div className="rounded-full border border-[#e8de9e] bg-[#fff6c9] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#6b5a00]">
                  Hybrid Cloud Flow
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] border border-[#ece7d2] bg-[#faf8ef]">
                <img
                  src="/images/ai-cloud-network.png"
                  alt="AI-generated connected systems and cloud visual"
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
                    <div className="rounded-2xl border border-[#e5dfc7] bg-white p-4">
                      <div className="text-sm font-black uppercase tracking-[0.2em] text-[#8b7a20]">
                        At the School
                      </div>
                      <div className="mt-3 grid gap-3 text-sm text-[#374151]">
                        <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                          Axis cameras
                        </div>
                        <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                          Door controllers
                        </div>
                        <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                          Intercoms
                        </div>
                        <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                          Network audio
                        </div>
                      </div>
                    </div>

                    <div className="hidden items-center justify-center lg:flex">
                      <div className="text-3xl font-black text-[#b79a1d]">→</div>
                    </div>

                    <div className="rounded-2xl border border-[#e5dfc7] bg-white p-4">
                      <div className="text-sm font-black uppercase tracking-[0.2em] text-[#8b7a20]">
                        People &amp; Apps
                      </div>
                      <div className="mt-3 grid gap-3 text-sm text-[#374151]">
                        <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                          Admins in browser
                        </div>
                        <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                          Security operators
                        </div>
                        <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                          Partner software
                        </div>
                        <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                          Remote investigators
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-3">
                      <div className="mx-auto max-w-md rounded-2xl border border-[#e3d99b] bg-[#fff8d8] p-5 text-center shadow-sm">
                        <div className="text-sm font-black uppercase tracking-[0.2em] text-[#7a6500]">
                          Cloud Layer
                        </div>
                        <div className="mt-3 text-3xl font-black text-[#111827]">
                          Axis Cloud Connect
                        </div>
                        <div className="mt-3 text-sm leading-7 text-[#4b5563]">
                          Managed services, remote connectivity, lifecycle
                          workflows, and secure access.
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center lg:col-span-3">
                      <div className="hidden text-3xl font-black text-[#b79a1d] lg:block">
                        ↓
                      </div>
                    </div>

                    <div className="lg:col-span-3">
                      <div className="rounded-2xl border border-[#e5dfc7] bg-white p-4">
                        <div className="text-sm font-black uppercase tracking-[0.2em] text-[#8b7a20]">
                          Outcomes
                        </div>
                        <div className="mt-3 grid gap-3 text-sm text-[#374151] sm:grid-cols-2">
                          <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                            Anywhere access
                          </div>
                          <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                            Simplified onboarding
                          </div>
                          <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                            Proactive updates
                          </div>
                          <div className="rounded-xl bg-[#fff9de] px-3 py-3">
                            Scalable multi-site management
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

              <AnimatePresence mode="wait">
                <motion.div
                  key={cloudTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-[2rem] border border-[#ddd7c0] bg-white p-7 shadow-xl"
                >
                  <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                    What this gives you
                  </div>
                  <h3 className="mt-3 text-3xl font-black text-[#111827]">
                    {cloud.title}
                  </h3>

                  <div className="mt-6 grid gap-3">
                    {cloud.bullets.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[#ece7d2] bg-[#faf8ef] px-4 py-3 text-sm font-semibold text-[#374151]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#e3d99b] bg-[#fff8d8] p-4">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-[#7a6500]">
                      Executive takeaway
                    </div>
                    <div className="mt-2 space-y-2">
                      {[
                        "Easier to manage",
                        "Easier to access",
                        "Better prepared for future growth",
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
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ddd9c8] bg-[#f6f5ef] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-[#8b7a20]">
              Interactive Security Scenarios
            </div>
            <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
              Choose the scenario that matters most
            </h2>
            <div className="mx-auto mt-5 max-w-3xl space-y-2">
              {[
                "Show how the system supports normal operations.",
                "Show how it performs during emergencies.",
                "Show how it helps after hours and during events.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start justify-center gap-3 text-lg leading-8 text-[#4b5563]"
                >
                  <div className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d1af22]" />
                  <div className="text-left">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="space-y-4">
              {Object.entries(demoModes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setDemoMode(key)}
                  className={`w-full rounded-[1.5rem] border p-6 text-left transition ${
                    demoMode === key
                      ? "border-[#d6bc43] bg-[#fff0a8] text-[#111827]"
                      : "border-[#ddd7c0] bg-white text-[#1f2937] hover:bg-[#faf8ef]"
                  }`}
                >
                  <div className="text-xs font-black uppercase tracking-[0.24em] opacity-70">
                    Demo Mode
                  </div>
                  <div className="mt-2 text-2xl font-black">{value.title}</div>
                  <div className="mt-3 space-y-1">
                    {value.summary.map((item) => (
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

            <AnimatePresence mode="wait">
              <motion.div
                key={demoMode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-[2rem] border border-[#ddd7c0] bg-white p-8 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                      Current Demo
                    </div>
                    <h3 className="mt-3 text-4xl font-black text-[#111827]">
                      {demo.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-[#e5d98b] bg-[#fff6c9] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#6b5a00]">
                    Client-Facing Tool
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-[#ece7d2]">
                  <img
                    src="/images/ai-school-set.png"
                    alt="AI-generated school environment visual"
                    className="h-56 w-full object-cover"
                  />
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {demo.stats.map((stat) => (
                    <div
                      key={stat}
                      className="rounded-2xl border border-[#ece7d2] bg-[#faf8ef] p-4 text-sm font-bold text-[#374151]"
                    >
                      {stat}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#ddd7c0] bg-[#faf8ef] p-6">
                  <div className="mb-4 grid gap-3 md:grid-cols-2">
                    {proofPoints.slice(0, 2).map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[#e5dfc7] bg-white px-4 py-3 text-sm font-semibold text-[#374151]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.24em] text-[#8b7a20]">
                    Talk Track
                  </div>
                  <div className="mt-4 grid gap-3">
                    {demo.timeline.map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-xl border border-[#e5dfc7] bg-white px-4 py-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3d44a] text-sm font-black text-[#1f2937]">
                          {i + 1}
                        </div>
                        <div className="text-sm font-semibold text-[#374151]">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-[#efefea] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#ddd7c0] bg-white p-8 shadow-xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7a20]">
                Why Schools Buy
              </div>
              <h2 className="mt-3 text-3xl font-black text-[#111827] md:text-5xl">
                A better security story for administrators, operations teams,
                and decision-makers
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {proofPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#e5dfc7] bg-[#fff9de] px-4 py-4 text-sm font-semibold text-[#374151]"
                >
                  {item}
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
              <div className="mt-5 space-y-2">
                {[
                  "Schools are not just buying hardware.",
                  "They are buying clarity, design guidance, implementation support, and confidence.",
                  "The solution has to match real-world needs, not just a spec sheet.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-lg leading-8 text-[#4b5563]"
                  >
                    <div className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d1af22]" />
                    <div>{item}</div>
                  </div>
                ))}
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

      <section className="bg-[#efefea] px-6 pb-28 pt-8 text-center md:px-10">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#e0d389] bg-gradient-to-br from-[#fff7cf] via-[#fffbe6] to-white p-10 shadow-xl md:p-14">
          <div className="text-xs font-black uppercase tracking-[0.32em] text-[#8b7a20]">
            Next Step
          </div>
          <h2 className="mt-4 text-4xl font-black text-[#111827] md:text-6xl">
            See exactly how this could work in your school.
          </h2>

          <div className="mx-auto mt-6 max-w-3xl space-y-2 text-left">
            {[
              "Identify real security gaps in the building.",
              "See how staff can respond faster and with more confidence.",
              "Walk away with a clearer plan tailored to the school.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-lg leading-8 text-[#4b5563]"
              >
                <div className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d1af22]" />
                <div>{item}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-4 text-sm font-semibold text-[#7a6500]">
              No cost. No obligation. Just clarity.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:nedatainfo@northeastdata.com"
                className="rounded-xl border border-[#d4b83f] bg-[#f6dd75] px-8 py-4 text-base font-black uppercase tracking-[0.18em] text-[#1f2937] shadow-sm transition hover:-translate-y-0.5"
              >
                Schedule Your Security Walkthrough
              </a>
              <a
                href="#simulation"
                className="rounded-xl border border-[#d6d0b8] bg-white px-8 py-4 text-base font-bold uppercase tracking-[0.18em] text-[#1f2937] shadow-sm transition hover:-translate-y-0.5"
              >
                Restart Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}