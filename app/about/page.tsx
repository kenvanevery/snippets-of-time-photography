import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
            Snippets of Time Photography
          </p>

          <h1 className="text-4xl font-light tracking-wide md:text-6xl">
            About Us
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-gray-500" />
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-gray-300">
          <p>
            We’re Ken and Debbie, a husband-and-wife team with a shared love of
            photography, travel, family, and the incredible places and moments
            that surround us.
          </p>
          {/* Ken & Debbie */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-14 md:my-20">

  {/* Ken */}
  <div className="text-center">
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
      <img
        src="/images/about/ken-photographer.jpg"
        alt="Ken photographing along the water in Northern Michigan"
        className="w-full h-full object-cover scale-[1.12]"
      />
    </div>

    <h3 className="mt-5 text-2xl text-white">
      Ken
    </h3>

    <p className="mt-1 text-sm tracking-[0.25em] uppercase text-slate-400">
      Photographer
    </p>
  </div>

  {/* Debbie */}
  <div className="text-center">
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
      <img
        src="/images/about/debbie-photographer.jpg"
        alt="Debbie photographing along a Northern Michigan back road"
        className="w-full h-full object-cover object-center"
      />
    </div>

    <h3 className="mt-5 text-2xl text-white">
      Debbie
    </h3>

    <p className="mt-1 text-sm tracking-[0.25em] uppercase text-slate-400">
      Photographer
    </p>
  </div>

</div>

          <p>
            For us, photography has always been about more than simply taking a
            picture. It’s about preserving a moment, capturing a place the way
            it felt, and sometimes noticing the beauty in something most people
            might walk right past.
          </p>

          <p>
            Living in Northern Michigan gives us no shortage of inspiration.
            From the Great Lakes and quiet back roads to wildlife, landscapes,
            old buildings, flowers, and the changing seasons, we enjoy
            photographing the things that make this part of the country
            special. Our travels have also given us opportunities to photograph
            places well beyond Michigan, and we look forward to continuing that
            journey.
          </p>

          <p>
            Family is a huge part of our lives. Between the two of us, we have
            six children and sixteen grandchildren, which means life is rarely
            boring and there is always another memory being made.
          </p>
        </div>

        {/* SPECIAL THANK YOU */}
        <div className="mx-auto my-16 h-px max-w-3xl bg-gray-800" />

        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-light tracking-wide">
            A Special Thank You
          </h2>

          <div className="space-y-6 text-lg leading-8 text-gray-300">
            <p>
              We also want to give a very special thank you to Ken’s sister,
              whose passion for photography played an important role in our own
              journey. She introduced us to so much of what we have come to love
              about photography, generously helped us with equipment and
              knowledge, and invited us along on photography trips that created
              memories we will always treasure.
            </p>

            <p>
              Her encouragement, generosity, and enthusiasm helped turn an
              interest into something much bigger, and Snippets of Time
              Photography would not be what it is today without her influence.
            </p>
          </div>
        </div>

        {/* AWARDS INTRO */}
        <div className="mx-auto my-16 h-px max-w-3xl bg-gray-800" />

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            Behind the Images
          </p>

          <h2 className="mb-6 text-3xl font-light tracking-wide md:text-4xl">
            Awards &amp; Recognition
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            Over the years, our photography has received a number of awards,
            recognitions, and opportunities we never expected. While
            recognition has never been the reason we pick up a camera, it is
            always meaningful when an image that captured something special to
            us connects with others as well.
          </p>
        </div>

        {/* LOCOMOTIVE */}
        <div className="mb-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto w-full max-w-md overflow-hidden bg-gray-950">
            <Image
              src="/images/about/steam-locomotive-1225.jpg"
              alt="Black and white photograph of steam locomotive 1225"
              width={1200}
              height={1800}
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
              People&apos;s Choice Award
            </p>

            <h3 className="mb-5 text-3xl font-light">
              Steam Locomotive No. 1225
            </h3>

            <p className="text-lg leading-8 text-gray-300">
              Ken&apos;s black-and-white photograph of steam locomotive No. 1225
              received the People&apos;s Choice Award for Black &amp; White
              through the ViewBug photography community. The dramatic steam,
              machinery, and low perspective came together to create one of our
              most recognized black-and-white images.
            </p>
          </div>
        </div>

        {/* DEBBIE TROLLEY */}
        <div className="mb-24">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
              Debbie&apos;s Photography
            </p>

            <h3 className="mb-5 text-3xl font-light">
              From Photograph to Petoskey Billboard
            </h3>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
              Debbie&apos;s photograph of the Petoskey Downtown Trolley was
              selected for the 2025 Petoskey Calendar and featured as the
              photograph for July. The image later received another very public
              showcase when it appeared on a Petoskey-area billboard during the
              summer of 2026.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden bg-gray-950">
              <Image
                src="/images/galleries/northern-michigan/Downtown Trolley.jpg"
                alt="Petoskey Downtown Trolley photographed by Debbie"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden bg-gray-950">
              <Image
                src="/images/about/petoskey-trolley-billboard.jpg"
                alt="Billboard featuring Debbie's Petoskey Downtown Trolley photograph"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* MACKINAC BRIDGE */}
        <div className="mb-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-2">
            <Image
              src="/images/galleries/northern-michigan/Mackinac-Bridge-Reflections.jpg"
              alt="Mackinac Bridge reflected in the Straits of Mackinac"
              width={1200}
              height={1800}
              className="h-auto w-full"
            />
          </div>

          <div className="md:order-1">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
              Michigan Recognition
            </p>

            <h3 className="mb-5 text-3xl font-light">
              Mackinac Bridge Reflections
            </h3>

            <p className="text-lg leading-8 text-gray-300">
              Ken&apos;s photograph of the Mackinac Bridge and its reflection on
              the Straits of Mackinac also received recognition in a Michigan
              photography competition. Photographing one of Michigan&apos;s most
              recognizable landmarks from a different perspective made the
              recognition especially meaningful.
            </p>
          </div>
        </div>

        {/* FICK & SONS */}
        <div className="mb-24">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
              A Photograph on the Road
            </p>

            <h3 className="mb-5 text-3xl font-light">
              Fick &amp; Sons
            </h3>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
              One of our favorite stories began with Ken&apos;s photograph of the
              Mackinac Bridge at night. Fick &amp; Sons saw the image and liked
              it so much they asked to incorporate it into the custom artwork
              on one of their tanker trailers. Seeing one of our photographs
              transformed into something traveling the highways of Northern
              Michigan was an experience we never expected and certainly
              won&apos;t forget.
            </p>
          </div>

          <div className="overflow-hidden bg-gray-950">
            <Image
              src="/images/about/fick-sons-tanker.png"
              alt="Fick and Sons tanker featuring Ken's Mackinac Bridge photograph"
              width={1800}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* MORE FAVORITES */}
        <div className="mx-auto my-16 h-px max-w-3xl bg-gray-800" />

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
            The Journey Continues
          </p>

          <h2 className="mb-5 text-3xl font-light">
            A Few More Favorites
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            Awards and recognition are only part of the story. What continues
            to inspire us is finding extraordinary moments in landscapes,
            weather, history, and the ordinary things people sometimes pass
            without a second look.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Image
              src="/images/galleries/northern-michigan/Breakwall-During-Storm.jpg"
              alt="Powerful winter storm crashing over a Great Lakes breakwall"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <Image
              src="/images/about/old_truck.jpg"
              alt="Weathered vintage truck surrounded by wildflowers"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* CLOSING */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <div className="mx-auto mb-10 h-px w-24 bg-gray-600" />

          <p className="text-xl leading-9 text-gray-200">
            What matters most to us is still what started all of this in the
            first place: being there when the moment happens and preserving a
            snippet of time.
          </p>

          <p className="mt-8 text-lg text-gray-400">
            Thank you for visiting our gallery and being part of the journey.
          </p>

          <p className="mt-8 text-xl font-light tracking-wide">
            Ken &amp; Debbie
          </p>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-500">
            Snippets of Time Photography
          </p>
        </div>
      </section>
    </main>
  );
}