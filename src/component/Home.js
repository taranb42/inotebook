import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        <section>
          <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="mx-auto max-w-xl text-center">
                  <h2 class="text-2xl font-bold text-white md:text-3xl">
                    R Systems’ mission is to enable digital innovation for
                    enterprises in the Banking, Finance & Insurance industry.
                  </h2>

                  <p class="hidden text-white/90 sm:mt-4 sm:block">
                    Digital disruption is affecting the Banking, Finance and
                    Insurance industries at every level. The rise of mobile
                    convenience and online banking has put these organizations
                    under heavy pressure to become more customer-centric, or
                    risk becoming obsolete. As consumer expectations continue to
                    increase around user simplicity, the future of Banking,
                    Finance and Insurance providers depends on their ability to
                    navigate the process of digital transformation.
                  </p>

                  <div class="mt-4 md:mt-8">
                    <a
                      href="https://www.rsystems.com/digital-platforms-and-solutions/"
                      target="blank"
                      class="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition blue:bg-indigo-700 focus:outline-white focus:ring focus:ring-yellow-400"
                    >
                      Get Connected Today
                    </a>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <img
                  alt="Student"
                  src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                  class="h-40 w-full object-cover sm:h-56 md:h-full"
                />

                <img
                  alt="Student"
                  src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  class="h-40 w-full object-cover sm:h-56 md:h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

              <p class="mt-4 text-gray-600">
                Our full-lifecycle Digital Product Engineering services employ
                the highest standards of architectural design, development, and
                customization. Well-versed in the realm of UX design, Agile
                development, and DevOps, EVERY digital product we produce is
                guided by principles of scalable performance and long term
                usability.
              </p>

              <a
                href="#"
                class="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition blue:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;