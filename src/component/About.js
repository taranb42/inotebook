import React, { useContext } from "react";
import noteContext from "../noteContext";

const About = () => {
  const a = useContext(noteContext);

  return (

    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Growing competition from FinTech firms and online mobility
          </h2>

          <p class="hidden text-gray-500 md:mt-4 md:block">
            Businesses that harness ML can avail greater actionable insights and
            make more educated decisions to expand their organization. R Systems
            offers ML-based services to help you attain superior quality
            standards and enhanced accuracy. Our experts deliver custom machine
            learning services and solutions to help organizations create
            extraordinary digital products and services.
            With our ML capabilities powering your organization, you will be able to identify and analyze critical data to derive intelligent information.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#"
              class="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition blue:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              AI/Machine Learning
            </a>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src="/logo4.jpg"
        class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default About;
