export default function JPoulsenCeramicsHomepage() {

  const featuredProjects = [
    {
      title: "Luxury Bathrooms",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Walk-in Showers",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Kitchen Tiling",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  const services = [
    {
      title: "Bathroom Tiling",
      text: "High-end wall and floor tiling for bathrooms, en-suites and full renovation projects.",
    },
    {
      title: "Walk-in Showers & Wet Rooms",
      text: "Clean, modern shower spaces with carefully finished large-format porcelain and stone-effect tiles.",
    },
    {
      title: "Kitchen Tiling",
      text: "Kitchen floors, splashbacks and contemporary feature finishes designed to elevate the whole room.",
    },
    {
      title: "Large Format Tiles",
      text: "Precise installation of large porcelain tiles and slab-style finishes for a premium architectural look.",
    },
    {
      title: "Floor Tiling",
      text: "Durable, level and beautifully finished tiled floors for kitchens, bathrooms and open-plan spaces.",
    },
    {
      title: "Preparation & Finishing",
      text: "Careful preparation, waterproofing and finishing work to ensure the final result looks right and lasts.",
    },
  ];

  const reasons = [
    "Attention to detail on every installation",
    "Clean, professional workmanship",
    "Specialists in luxury bathrooms and kitchens",
    "Large-format porcelain and feature tile experience",
    "Reliable communication from quote to completion",
    "Based in Northamptonshire and covering surrounding areas",
  ];

  const testimonials = [
    {
      quote:
        "Fantastic workmanship and a brilliant finish. The bathroom looks completely transformed.",
      name: "Bathroom Client",
    },
    {
      quote:
        "Professional, tidy and clearly takes pride in the work. We are delighted with the kitchen tiling.",
      name: "Kitchen Client",
    },
    {
      quote:
        "The quality of the tiling is outstanding. Clean lines, perfect cuts and a really premium final look.",
      name: "Home Renovation Client",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  ];

  const areas = [
    "Northampton",
    "Daventry",
    "Towcester",
    "Wellingborough",
    "Kettering",
    "Market Harborough",
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-[#111827]">

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f2555] text-white">
              JP
            </div>

            <div>
              <div className="font-serif text-xl font-semibold text-[#1f2555]">
                J Poulson Ceramics
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#6b7280]">
                Luxury tiling & bathroom installs
              </div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm font-medium lg:flex">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">Why Choose Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#1f2555] px-5 py-3 text-sm font-semibold text-white"
          >
            Request Quote
          </a>

        </div>
      </header>

      {/* HERO */}

      <section className="relative">

        <img
          src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1800&auto=format&fit=crop"
          className="h-[75vh] w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-[1400px] px-6 text-white">

            <h1 className="font-serif text-6xl font-semibold leading-tight">
              Precision tiling & luxury bathroom installations
            </h1>

            <p className="mt-6 max-w-xl text-lg">
              High-end wall and floor tiling for bathrooms, kitchens and modern
              interior spaces — delivered with clean lines and premium finish.
            </p>

            <div className="mt-8 flex gap-4">
              <a className="rounded-full bg-white px-6 py-3 text-[#1f2555]">
                Request Quote
              </a>
              <a className="rounded-full border border-white px-6 py-3">
                View Projects
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="mx-auto max-w-[1400px] px-6 py-20">

        <h2 className="font-serif text-4xl font-semibold">Recent Installations</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-3xl bg-white shadow">

              <img
                src={p.image}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-serif text-2xl">{p.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="bg-white py-20">

        <div className="mx-auto max-w-[1400px] px-6">

          <h2 className="font-serif text-4xl font-semibold">Services</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {services.map((s) => (
              <div key={s.title} className="rounded-3xl bg-[#fafaf9] p-8 shadow">

                <h3 className="font-serif text-xl">{s.title}</h3>
                <p className="mt-3 text-gray-600">{s.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section id="gallery" className="bg-[#f8fafc] py-20">

        <div className="mx-auto max-w-[1400px] px-6">

          <h2 className="font-serif text-4xl font-semibold">
            Gallery
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

            {gallery.map((g, i) => (
              <img
                key={i}
                src={g}
                className="rounded-2xl object-cover"
              />
            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="mx-auto max-w-[1400px] px-6 py-20">

        <div className="grid gap-6 xl:grid-cols-3">

          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl bg-white p-8 shadow">

              <p className="text-lg">“{t.quote}”</p>

              <div className="mt-4 text-sm text-gray-500">
                {t.name}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* AREAS */}

      <section className="bg-[#1f2555] py-20 text-white">

        <div className="mx-auto max-w-[1400px] px-6">

          <h2 className="font-serif text-4xl">
            Serving Northamptonshire
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

            {areas.map((a) => (
              <div key={a} className="rounded-xl border border-white/20 px-4 py-3 text-center">
                {a}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t bg-white py-12">

        <div className="mx-auto max-w-[1400px] px-6">

          <div className="font-serif text-2xl text-[#1f2555]">
            J Poulson Ceramics
          </div>

          <p className="mt-4 text-gray-500">
            Professional tiling services across Northamptonshire.
          </p>

        </div>

      </footer>

    </div>
  );
}
