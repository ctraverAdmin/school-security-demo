import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function AxisSchoolSecurityBrochure() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedZone, setSelectedZone] = useState("main_entry");
  const [demoMode, setDemoMode] = useState("visitor");
  const [cloudTab, setCloudTab] = useState("overview");

  const stepMessages = [
    "You gain immediate visibility the moment a door is accessed, so nothing happens without awareness.",
    "You can instantly see who is entering and verify activity without relying on guesswork.",
    "Your team is notified in real time so no critical event is missed or delayed.",
    "You can communicate instantly to guide behavior or stop a situation before it escalates.",
    "Your staff stays in control from start to finish with a coordinated, confident response.",
  ];

  const steps = [
    {
      title: "Door Opens",
      desc: "An unauthorized door event is detected at the main entrance.",
      system: "Access Control",
      color: "bg-red-500",
    },
    {
      title: "Camera Locks On",
      desc: "The nearest camera auto-focuses on the doorway and tracks movement.",
      system: "Video Surveillance",
      color: "bg-amber-400",
    },
    {
      title: "Alert Triggered",
      desc: "Staff receive an instant alert with live video and event details.",
      system: "Real-Time Notification",
      color: "bg-yellow-300",
    },
    {
      title: "Audio Responds",
      desc: "A live or automated audio warning plays in the affected area.",
      system: "Network Audio",
      color: "bg-lime-300",
    },
    {
      title: "Situation Controlled",
      desc: "Security staff verify, communicate, and respond before escalation.",
      system: "Unified Security Response",
      color: "bg-emerald-400",
    },
  ];

  const buildingZones = {
    main_entry: {
      name: "Main Entrance",
      risk: "High traffic access point",
      focus:
        "Visitor management, vestibule control, video intercom, and front-door camera coverage.",
      system: ["Door control", "Intercom", "Live video", "Visitor screening"],
      whyItMatters:
        "Your main entrance is the first and often most vulnerable point of access into the building. By combining visitor management, vestibule control, video intercom, and front-door camera coverage, staff can verify who is requesting access before unlocking doors and maintain a clear record of who enters the building.",
      result:
        "Office staff can verify, communicate, and unlock only when appropriate.",
      x: "24%",
      y: "52%",
    },
    hallway: {
      name: "Main Hallway",
      risk: "Movement between classrooms and common spaces",
      focus:
        "Hallway cameras, incident visibility, paging, and targeted messaging.",
      system: ["Indoor cameras", "Audio announcements", "Alert routing", "Incident review"],
      whyItMatters:
        "Hallways are where daily movement, supervision, and incident visibility all come together. With the right mix of cameras, audio announcements, and alert routing, your team can quickly verify activity, guide students, and respond to issues before they disrupt the school day.",
      result: "Teams can monitor flow, investigate behavior, and direct students quickly.",
      x: "55%",
      y: "27%",
    },
    admin: {
      name: "Administration Office",
      risk: "Decision point during incidents",
      focus:
        "Unified dashboard, event monitoring, remote door control, and live response.",
      system: ["Monitoring station", "Remote unlock/lock", "Alert view", "Communications"],
      whyItMatters:
        "The administration office is where visibility and decision-making need to come together fast. A unified dashboard gives administrators one place to monitor events, control doors, review alerts, and coordinate communication without losing time switching between systems.",
      result: "Administrators gain a single place to see events and act fast.",
      x: "56%",
      y: "69%",
    },
    gym: {
      name: "Gym / Event Space",
      risk: "Crowded events and after-hours use",
      focus:
        "Large-area coverage, event messaging, access scheduling, and perimeter awareness.",
      system: ["Wide-area cameras", "Scheduled access", "PA / audio", "After-hours monitoring"],
      whyItMatters:
        "Gyms and event spaces create unique security challenges because they often serve large groups, outside visitors, and after-hours activities. Better coverage, messaging, and scheduled access help your staff maintain control before, during, and after events.",
      result:
        "Large gatherings stay more manageable before, during, and after events.",
      x: "82%",
      y: "30%",
    },
    parking: {
      name: "Parking Lot",
      risk: "Arrival, dismissal, and exterior activity",
      focus:
        "Exterior cameras, perimeter awareness, incident verification, and response support.",
      system: ["Outdoor cameras", "Perimeter visibility", "Event search", "Response support"],
      whyItMatters:
        "Parking lots are critical during arrival, dismissal, and after-hours activity. Strong exterior coverage and event verification give your team better awareness of what is happening outside the building and better information when a response is needed.",
      result: "Staff can see what happened outside and react with better information.",
      x: "81%",
      y: "73%",
    },
  };

  const demoModes = {
    visitor: {
      title: "Visitor Entry Demo",
      summary:
        "Give your front-desk team the ability to verify visitors, communicate clearly, and control entry from a single, simple interface.",
      stats: [
        "Video intercom verification",
        "Remote unlock decision",
        "Automatic event recording",
      ],
      timeline: [
        "Visitor arrives",
        "Office sees live video",
        "Two-way talk begins",
        "Door is granted or denied",
      ],
    },
    lockdown: {
      title: "Emergency Response Demo",
      summary:
        "See how cameras, doors, and audio work together to give your team faster, more confident control when every second counts.",
      stats: [
        "Immediate live visibility",
        "Fast communication",
        "Coordinated building response",
      ],
      timeline: [
        "Incident detected",
        "Relevant cameras display",
        "Audio instruction plays",
        "Staff act from one interface",
      ],
    },
    afterhours: {
      title: "After-Hours Protection Demo",
      summary:
        "Stay in control of entrances, athletic spaces, and parking areas even after hours with clear visibility and response tools.",
      stats: ["Scheduled door control", "Exterior monitoring", "Recorded event review"],
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
      title: "Safer entrances",
      text: "Control who gets in, verify visitors faster, and reduce front-door uncertainty.",
      icon: "🚪",
    },
    {
      title: "Faster response",
      text: "Give staff live visibility, event awareness, and tools to act in seconds.",
      icon: "⚡",
    },
    {
      title: "Stronger communication",
      text: "Use intercoms and network audio to guide, warn, and inform in real time.",
      icon: "📣",
    },
    {
      title: "Smarter operations",
      text: "Simplify daily management with better visibility, easier workflows, and scalable control.",
      icon: "🧠",
    },
  ];

  const objectionPoints = [
    "Works as a phased upgrade, not an all-at-once rip-and-replace.",
    "Supports both everyday operations and emergency response.",
    "Scales from a single building to district-wide deployments.",
    "Combines security, communication, and operational efficiency in one strategy.",
  ];

  const cloudTabs = {
    overview: {
      title: "Cloud Overview",
      blurb:
        "Connect your devices into a managed cloud layer so your team can access, manage, and respond from anywhere with confidence.",
      bullets: [
        "Remote video and event access",
        "Managed device lifecycle",
        "Secure cloud-connected workflows",
      ],
    },
    operations: {
      title: "Daily Operations",
      blurb:
        "Use the cloud layer to simplify monitoring, device health, updates, and access to live and recorded events.",
      bullets: [
        "Browser-based access",
        "Faster onboarding and provisioning",
        "Consistent system availability",
      ],
    },
    response: {
      title: "Response & Continuity",
      blurb:
        "Keep decision-makers connected to cameras, events, and alerts even when they are not sitting at a local workstation.",
      bullets: [
        "Anywhere access",
        "Centralized event awareness",
        "Scalable multi-site management",
      ],
    },
  };

  const zone = buildingZones[selectedZone];
  const cloud = cloudTabs[cloudTab];
  const demo = demoModes[demoMode];
  const progress = useMemo(
    () => ((activeStep + 1) / steps.length) * 100,
    [activeStep, steps.length],
  );

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-35">
          <source src="/school-security-demo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.92))]" />

        <div className="relative w-full px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <div className="mb-16 flex items-center gap-6">
                <img
                  src="/logo.png"
                  alt="Northeast Data"
                  className="h-auto max-h-20 w-auto object-contain md:max-h-28"
                />
                <div>
                  <div className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
                    Northeast Data
                  </div>
                  <div className="mt-1 text-base font-medium text-zinc-400 md:text-lg">
                    Axis-Powered Security Solutions for Schools
                  </div>
                </div>
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.9] md:text-7xl xl:text-8xl">
                See the building.
                <br />
                Click the risk.
                <br />
                Watch the system react.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
                See how cameras, doors, intercoms, and audio work together across your school building.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#simulation"
                  className="rounded-xl bg-amber-300 px-8 py-4 text-base font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
                >
                  Launch Simulation
                </a>
                <a
                  href="#map"
                  className="rounded-xl border border-white/20 px-8 py-4 text-base font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/5"
                >
                  Explore Building Map
                </a>
                <a
                  href="mailto:nedatainfo@northeastdata.com?subject=School%20Security%20Walkthrough"
                  className="rounded-xl border border-amber-300/40 bg-black/30 px-8 py-4 text-base font-bold uppercase tracking-[0.18em] text-amber-200 transition hover:bg-amber-300/10"
                >
                  Book a Walkthrough
                </a>
              </div>

              <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {valuePoints.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur transition hover:scale-[1.03] hover:border-amber-300/40 hover:shadow-lg hover:shadow-amber-300/10"
                  >
                    <div className="mb-3 text-3xl">{item.icon}</div>
                    <div className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-zinc-200">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                    Preview
                  </div>
                  <div className="mt-2 text-2xl font-black">
                    One platform. Multiple layers of response.
                  </div>
                </div>
                <div className="rounded-full bg-amber-300 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-black">
                  Live
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Interactive incident simulation",
                  "Clickable building map",
                  "Cloud-connected operations view",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/35 p-4 text-lg font-semibold text-zinc-100"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">
                  Why this matters to you
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-100">
                  This gives you a clear way to see risk, understand how your building responds,
                  and feel confident in how your team can act without getting buried in technical details.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="simulation" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Live Simulation
            </div>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Walk through a real-time security event
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              Click through the sequence and see how the system detects, verifies, communicates,
              and responds.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">
                    Incident Progress
                  </div>
                  <div className="mt-2 text-2xl font-black">Simulation Timeline</div>
                </div>
                <div className="text-sm font-bold text-amber-300">
                  {activeStep + 1} / {steps.length}
                </div>
              </div>

              <div className="mb-6 h-2 rounded-full bg-white/10">
                <motion.div
                  className="h-2 rounded-full bg-amber-300"
                  animate={{ width: `${progress}%` }}
                />
              </div>

              <div className="space-y-3">
                {steps.map((step, i) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(i)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                      activeStep === i
                        ? "border-amber-300 bg-amber-300 text-black"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`mt-1 h-3 w-3 rounded-full ${
                        activeStep === i ? "bg-black" : step.color
                      }`}
                    />
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.2em] opacity-80">
                        Step {i + 1}
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
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(39,39,42,0.92))] p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                      Current Event
                    </div>
                    <h3 className="mt-3 text-4xl font-black">{steps[activeStep].title}</h3>
                  </div>
                  <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                    {steps[activeStep].system}
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200">
                  {steps[activeStep].desc}
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {[
                    "Operator sees live feed",
                    "Relevant doors can be managed",
                    "Audio or staff response can begin",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-semibold text-zinc-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-amber-300/20 bg-black/25 p-5">
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                    What this means for you
                  </div>
                  <p className="mt-3 text-base leading-7 text-zinc-200">
                    {stepMessages[activeStep]}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="map" className="bg-zinc-950 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Clickable Building Map
            </div>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Explore how security works across the entire building
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              Click a zone to see the risk, the recommended technology, and the practical outcome
              for that area.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[560px] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#1c1c1f,#0c0c0d)] p-6 shadow-2xl">
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />

              <div className="relative h-full min-h-[500px] rounded-[1.5rem] border border-white/10 bg-black/30">
                <div className="absolute left-[13%] top-[22%] h-[60%] w-[28%] rounded-[1.5rem] border border-white/10 bg-white/5" />
                <div className="absolute left-[16%] top-[26%] text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  Main Entrance
                </div>
                <div className="absolute left-[16%] top-[31%] h-[14%] w-[20%] rounded-xl border border-white/10 bg-black/25" />
                <div className="absolute left-[16%] top-[48%] h-[20%] w-[20%] rounded-xl border border-white/10 bg-black/25" />

                <div className="absolute left-[41%] top-[44%] h-[8%] w-[12%] rounded-full border border-white/10 bg-white/5" />
                <div className="absolute left-[43%] top-[46.5%] text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Hallway
                </div>

                <div className="absolute left-[46%] top-[14%] h-[28%] w-[18%] rounded-[1.5rem] border border-white/10 bg-white/5" />
                <div className="absolute left-[48.5%] top-[18%] text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  Main Hallway
                </div>
                <div className="absolute left-[49%] top-[24%] h-[10%] w-[12%] rounded-xl border border-white/10 bg-black/25" />

                <div className="absolute left-[43%] top-[52%] h-[34%] w-[24%] rounded-[1.5rem] border border-white/10 bg-white/5" />
                <div className="absolute left-[46%] top-[56%] text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  Admin Office
                </div>
                <div className="absolute left-[46%] top-[62%] h-[16%] w-[16%] rounded-xl border border-white/10 bg-black/25" />

                <div className="absolute left-[70%] top-[16%] h-[28%] w-[24%] rounded-[1.5rem] border border-white/10 bg-white/5" />
                <div className="absolute left-[74%] top-[20%] text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  Gym
                </div>
                <div className="absolute left-[74%] top-[27%] h-[10%] w-[14%] rounded-xl border border-white/10 bg-black/25" />

                <div className="absolute left-[69%] top-[63%] h-[20%] w-[26%] rounded-[1.5rem] border border-white/10 bg-white/5" />
                <div className="absolute left-[72%] top-[67%] text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  Parking Lot
                </div>
                <div className="absolute left-[72%] top-[73%] h-[6%] w-[18%] rounded-xl border border-white/10 bg-black/25" />

                <div className="absolute left-[41%] top-[38%] h-[2px] w-[8%] bg-white/10" />
                <div className="absolute left-[60%] top-[28%] h-[2px] w-[10%] bg-white/10" />
                <div className="absolute left-[56%] top-[42%] h-[14%] w-[2px] bg-white/10" />

                {Object.entries(buildingZones).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedZone(key)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transition"
                    style={{ left: item.x, top: item.y }}
                  >
                    <div
                      className={`relative flex h-6 w-6 items-center justify-center rounded-full border-4 ${
                        selectedZone === key ? "border-amber-300 bg-amber-300" : "border-white bg-black"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          selectedZone === key ? "bg-black" : "bg-amber-300"
                        }`}
                      />
                      <div
                        className={`absolute h-10 w-10 rounded-full ${
                          selectedZone === key ? "animate-ping bg-amber-300/20" : "bg-transparent"
                        }`}
                      />
                    </div>
                  </button>
                ))}

                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-300">
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
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl"
              >
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                  Selected Area
                </div>
                <h3 className="mt-3 text-4xl font-black">{zone.name}</h3>
                <p className="mt-4 text-lg font-semibold text-red-300">Risk: {zone.risk}</p>
                <p className="mt-5 text-lg leading-8 text-zinc-300">{zone.focus}</p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                    Why it matters
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">{zone.whyItMatters}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {zone.system.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm font-bold text-zinc-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
                  <p className="text-lg leading-8 text-zinc-100">{zone.result}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950/70 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Cloud Solution Layer
            </div>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Extend your security system with cloud-based connectivity and control
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              Move beyond stand-alone hardware and present a smarter, more scalable security
              platform. Connect devices, events, and management through the cloud so schools gain
              easier access, stronger visibility, and greater operational control.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#17171a,#09090b)] p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                    How it works
                  </div>
                  <div className="mt-2 text-2xl font-black">School-to-cloud architecture map</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-200">
                  Hybrid Cloud Flow
                </div>
              </div>

              <div className="relative min-h-[540px] rounded-[1.6rem] border border-white/10 bg-black/35 p-6">
                <div className="grid h-full min-h-[500px] gap-6 lg:grid-cols-[1fr_auto_1fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">
                      At the School
                    </div>
                    <div className="mt-3 grid gap-3 text-sm text-zinc-200">
                      <div className="rounded-xl bg-black/35 px-3 py-3">Axis cameras</div>
                      <div className="rounded-xl bg-black/35 px-3 py-3">Door controllers</div>
                      <div className="rounded-xl bg-black/35 px-3 py-3">Intercoms</div>
                      <div className="rounded-xl bg-black/35 px-3 py-3">Network audio</div>
                    </div>
                  </div>

                  <div className="hidden items-center justify-center lg:flex">
                    <div className="text-3xl font-black text-amber-200">→</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">
                      People &amp; Apps
                    </div>
                    <div className="mt-3 grid gap-3 text-sm text-zinc-200">
                      <div className="rounded-xl bg-black/35 px-3 py-3">Admins in browser</div>
                      <div className="rounded-xl bg-black/35 px-3 py-3">Security operators</div>
                      <div className="rounded-xl bg-black/35 px-3 py-3">Partner software</div>
                      <div className="rounded-xl bg-black/35 px-3 py-3">Remote investigators</div>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="mx-auto max-w-md rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5 text-center shadow-lg shadow-amber-300/10">
                      <div className="text-sm font-black uppercase tracking-[0.2em] text-amber-200">
                        Cloud Layer
                      </div>
                      <div className="mt-3 text-3xl font-black text-white">Axis Cloud Connect</div>
                      <div className="mt-3 text-sm leading-7 text-zinc-200">
                        Managed services, remote connectivity, lifecycle workflows, and secure access.
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center lg:col-span-3">
                    <div className="hidden text-3xl font-black text-amber-200 lg:block">↓</div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">
                        Outcomes
                      </div>
                      <div className="mt-3 grid gap-3 text-sm text-zinc-200 sm:grid-cols-2">
                        <div className="rounded-xl bg-black/35 px-3 py-3">Anywhere access</div>
                        <div className="rounded-xl bg-black/35 px-3 py-3">Simplified onboarding</div>
                        <div className="rounded-xl bg-black/35 px-3 py-3">Proactive updates</div>
                        <div className="rounded-xl bg-black/35 px-3 py-3">Scalable multi-site management</div>
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
                      ? "border-amber-300 bg-amber-300 text-black"
                      : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-black uppercase tracking-[0.24em] opacity-75">
                    Cloud View
                  </div>
                  <div className="mt-2 text-2xl font-black">{value.title}</div>
                  <div className="mt-2 text-sm leading-6 opacity-80">{value.blurb}</div>
                </button>
              ))}

              <AnimatePresence mode="wait">
                <motion.div
                  key={cloudTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(24,24,27,0.94))] p-7 shadow-xl"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                    What this gives you
                  </div>
                  <h3 className="mt-3 text-3xl font-black">{cloud.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-zinc-200">
                    This gives your team easier access to critical information, better visibility across
                    your systems, and the ability to manage everything without being tied to a single
                    location.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {cloud.bullets.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold text-zinc-100"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-amber-300/20 bg-black/20 p-4">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                      Executive takeaway
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-100">
                      The cloud layer helps position the solution as easier to manage, easier to access,
                      and better suited for future growth.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Interactive Security Scenarios
            </div>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Choose the scenario that matters most to your school
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              Explore how your system performs during everyday operations, emergency situations, and
              after-hours activity so you can see exactly how it supports your staff and protects your
              building.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="space-y-4">
              {Object.entries(demoModes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setDemoMode(key)}
                  className={`w-full rounded-[1.5rem] border p-6 text-left transition ${
                    demoMode === key
                      ? "border-amber-300 bg-amber-300 text-black"
                      : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-black uppercase tracking-[0.24em] opacity-75">
                    Demo Mode
                  </div>
                  <div className="mt-2 text-2xl font-black">{value.title}</div>
                  <div className="mt-2 text-sm leading-6 opacity-80">{value.summary}</div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={demoMode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(24,24,27,0.92))] p-8 shadow-2xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                      Current Demo
                    </div>
                    <h3 className="mt-3 text-4xl font-black">{demo.title}</h3>
                  </div>
                  <div className="rounded-full bg-black/30 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                    Client-Facing Tool
                  </div>
                </div>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">{demo.summary}</p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {demo.stats.map((stat) => (
                    <div
                      key={stat}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-bold text-zinc-100"
                    >
                      {stat}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-6">
                  <div className="mb-4 grid gap-3 md:grid-cols-2">
                    {objectionPoints.slice(0, 2).map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-100"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                    Suggested Talk Track
                  </div>
                  <div className="mt-4 grid gap-3">
                    {demo.timeline.map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-300 text-sm font-black text-black">
                          {i + 1}
                        </div>
                        <div className="text-sm font-semibold text-zinc-100">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                Key Reasons Schools Buy
              </div>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                A better security story for administrators, operations teams, and decision-makers
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {objectionPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/25 px-4 py-4 text-sm font-semibold text-zinc-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 pt-8 text-center md:px-10">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-amber-300/20 bg-[linear-gradient(135deg,rgba(251,191,36,0.18),rgba(0,0,0,0.96))] p-10 shadow-2xl md:p-14">
          <div className="text-xs font-bold uppercase tracking-[0.32em] text-amber-300">
            Next Step
          </div>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            See exactly how this would work in your school.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            Most schools don’t realize where their biggest security gaps are until after something
            happens. A walkthrough gives you a clear, real-world view of your risks and exactly how
            your team can respond faster, communicate better, and stay in control.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left md:grid-cols-3">
            {[
              "Identify real security gaps in your building",
              "See how your team can respond faster and with more confidence",
              "Walk away with a clear plan tailored to your school",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-black/25 px-4 py-4 text-sm font-semibold text-zinc-100"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-4 text-sm font-semibold text-amber-200">
              No cost. No obligation. Just clarity.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:nedatainfo@northeastdata.com"
                className="rounded-xl bg-amber-300 px-8 py-4 text-base font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
              >
                Schedule Your Security Walkthrough
              </a>
              <a
                href="#simulation"
                className="rounded-xl border border-white/20 px-8 py-4 text-base font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/5"
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

