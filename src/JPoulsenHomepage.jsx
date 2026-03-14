
export default function JPoulsenHomepage() {
  const featuredProjects = [
    {
      title: 'Luxury Bathrooms',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Walk-in Showers',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Kitchen Tiling',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop',
    },
  ];

  const services = [
    {
      title: 'Bathroom Tiling',
      text: 'High-end wall and floor tiling for bathrooms, en-suites and full renovation projects.',
    },
    {
      title: 'Walk-in Showers & Wet Rooms',
      text: 'Clean, modern shower spaces with carefully finished large-format porcelain and stone-effect tiles.',
    },
    {
      title: 'Kitchen Tiling',
      text: 'Kitchen floors, splashbacks and contemporary feature finishes designed to elevate the whole room.',
    },
    {
      title: 'Large Format Tiles',
      text: 'Precise installation of large porcelain tiles and slab-style finishes for a premium architectural look.',
    },
    {
      title: 'Floor Tiling',
      text: 'Durable, level and beautifully finished tiled floors for kitchens, bathrooms and open-plan spaces.',
    },
    {
      title: 'Preparation & Finishing',
      text: 'Careful preparation, waterproofing and finishing work to ensure the final result looks right and lasts.',
    },
  ];

  const reasons = [
    'Attention to detail on every installation',
    'Clean, professional workmanship',
    'Specialists in luxury bathrooms and kitchens',
    'Large-format porcelain and feature tile experience',
    'Reliable communication from quote to completion',
    'Based in Northamptonshire and covering surrounding areas',
  ];

  const testimonials = [
    {
      quote:
        'Fantastic workmanship and a brilliant finish. The bathroom looks completely transformed and the detail is superb.',
      name: 'Bathroom Client',
    },
    {
      quote:
        'Professional, tidy and clearly takes pride in the work. We are delighted with the kitchen tiling and finish.',
      name: 'Kitchen Client',
    },
    {
      quote:
        'The quality of the tiling is outstanding. Clean lines, perfect cuts and a really premium final look.',
      name: 'Home Renovation Client',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
  ];

  const areas = ['Northampton', 'Daventry', 'Towcester', 'Wellingborough', 'Kettering', 'Market Harborough'];

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f2555] text-white shadow-sm">
              <span className="font-serif text-lg tracking-wide">JP</span>
            </div>
            <div>
              <div className="font-serif text-2xl font-semibold leading-none text-[#1f2555]">J Poulson Ceramics</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[#6b7280]">Luxury tiling & bathroom installs</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#374151] lg:flex">
            <a href="#projects" className="transition hover:text-[#1f2555]">Projects</a>
            <a href="#services" className="transition hover:text-[#1f2555]">Services</a>
            <a href="#about" className="transition hover:text-[#1f2555]">Why Choose Us</a>
            <a href="#contact" className="transition hover:text-[#1f2555]">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#1f2555] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#171c45]"
          >
            Request a Quote
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/70 via-[#0f172a]/40 to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1800&auto=format&fit=crop"
            alt="Luxury tiled bathroom"
            className="h-[78vh] min-h-[640px] w-full object-cover"
          />

          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-6 lg:px-10">
            <div className="max-w-3xl text-white">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Northamptonshire tiling specialist
              </div>
              <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Precision tiling & luxury bathroom installations
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                High-end wall and floor tiling for bathrooms, kitchens and modern interior spaces — delivered with clean lines,
                careful detailing and a premium finish.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#1f2555] shadow-lg transition hover:bg-[#f3f4f6]"
                >
                  Request a Quote
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  View Recent Projects
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 text-sm text-white/90 md:grid-cols-4">
                {['Bathroom & kitchen specialists', 'Fully insured', 'Large-format porcelain', 'Northamptonshire based'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f2555]/70">Featured work</div>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#111827] md:text-5xl">Recent installations</h2>
              <p className="mt-4 text-lg leading-8 text-[#4b5563]">
                A selection of bathroom, shower and kitchen tiling projects finished with a clean, contemporary style.
              </p>
            </div>
            <a href="#gallery" className="text-sm font-semibold text-[#1f2555] transition hover:opacity-70">See full gallery →</a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-3xl font-semibold text-[#111827]">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#6b7280]">
                    Premium finishes, careful detailing and a polished final result designed to elevate the whole space.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f2555]/70">Services</div>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">What we do</h2>
              <p className="mt-4 text-lg leading-8 text-[#4b5563]">
                Specialist tiling services focused on quality, detail and a premium finish across bathrooms, kitchens and interiors.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-[28px] border border-[#e5e7eb] bg-[#fafaf9] p-8 shadow-sm">
                  <div className="mb-5 h-12 w-12 rounded-2xl bg-[#1f2555]/10" />
                  <h3 className="font-serif text-2xl font-semibold text-[#111827]">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#6b7280]">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop"
              alt="Bathroom transformation"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>

          <div id="about" className="flex flex-col justify-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f2555]/70">Why choose us</div>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">A premium finish, done properly</h2>
            <p className="mt-5 text-lg leading-8 text-[#4b5563]">
              J Poulson Ceramics focuses on clean workmanship, careful preparation and a high standard of finish from the first tile to the last detail.
            </p>

            <div className="mt-8 grid gap-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="mt-1 h-3 w-3 rounded-full bg-[#1f2555]" />
                  <p className="text-base leading-7 text-[#374151]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#f8fafc] py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f2555]/70">Gallery</div>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Bathrooms, kitchens & detail shots</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {gallery.map((image, idx) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-[24px] bg-white shadow-sm ${idx === 0 || idx === 3 ? 'col-span-2 row-span-2' : ''}`}
                >
                  <img src={image} alt={`Project gallery ${idx + 1}`} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[28px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="text-xl text-[#1f2555]">★★★★★</div>
                <p className="mt-5 text-lg leading-8 text-[#374151]">“{testimonial.quote}”</p>
                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#6b7280]">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1f2555] py-20 text-white">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Service area</div>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Serving Northamptonshire & surrounding areas</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Based locally and working across the county on bathroom renovations, kitchen tiling and premium interior projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {areas.map((area) => (
                <div key={area} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-base font-medium backdrop-blur-sm">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#1f2555] to-[#2f3b85] p-10 text-white shadow-[0_30px_80px_rgba(31,37,85,0.28)] md:p-14 lg:p-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Get in touch</div>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Planning a bathroom or kitchen project?</h2>
              <p className="mt-5 text-lg leading-8 text-white/85">
                Get in touch for a free quote and expert advice on bathrooms, kitchens, large-format tiling and high-end interior finishes.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@jpoulsonceramics.co.uk"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#1f2555] transition hover:bg-[#f3f4f6]"
                >
                  Request a Quote
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  View Recent Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f2555] text-white">
                <span className="font-serif text-base tracking-wide">JP</span>
              </div>
              <div>
                <div className="font-serif text-2xl font-semibold text-[#1f2555]">J Poulson Ceramics</div>
                <div className="text-xs uppercase tracking-[0.25em] text-[#6b7280]">Wall & floor tiling specialist</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-base leading-7 text-[#6b7280]">
              Professional tiling and bathroom installation work across Northamptonshire, with a focus on premium finishes and carefully detailed interiors.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f2555]/70">Quick links</div>
            <div className="mt-5 grid gap-3 text-base text-[#374151]">
              <a href="#projects" className="transition hover:text-[#1f2555]">Projects</a>
              <a href="#services" className="transition hover:text-[#1f2555]">Services</a>
              <a href="#about" className="transition hover:text-[#1f2555]">Why Choose Us</a>
              <a href="#contact" className="transition hover:text-[#1f2555]">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f2555]/70">Contact</div>
            <div className="mt-5 grid gap-3 text-base text-[#374151]">
              <div>Northamptonshire</div>
              <div>hello@jpoulsonceramics.co.uk</div>
              <div>07XXX XXX XXX</div>
              <div>Facebook / Instagram</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
