import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DynamicComponent } from '../components/DynamicComponent';
import { pagesByType, siteConfig, urlToContent } from '../utils/content';

const FlexiblePage = ({ page }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState(
    router.query.location,
  );

  useEffect(() => {
    setSelectedLocation(router.query.location);
  }, [router.query.location]);

  const locations = ['Amsterdam', 'Chicago', 'Houston', 'London'];

  const jobs = [
    {
      id: 1,
      title: 'Blockchain Infrastructure Developer',
      locations: ['Amsterdam', 'Chicago', 'Houston', 'London'],
    },
    {
      id: 2,
      title: 'DevOps/Cloud Engineer',
      locations: ['Amsterdam', 'Chicago'],
    },
    {
      id: 3,
      title: 'Quantitative Researcher',
      locations: ['Chicago', 'London'],
    },
    {
      id: 4,
      title: 'Senior Software Development Engineer in Test',
      locations: ['Amsterdam'],
    },
    {
      id: 5,
      title: 'Strategy & Execution Analyst',
      locations: ['Amsterdam', 'Houston'],
    },
  ];

  return (
    <div className="page">
      <Head>
        <title>{page.title}</title>
      </Head>
      <div data-sb-object-id={page.__id}>
        {page.sections?.length > 0 && (
          <div data-sb-field-path="sections">
            {page.sections.map((section, index) => (
              <DynamicComponent
                key={index}
                {...section}
                data-sb-field-path={`.${index}`}
              />
            ))}
          </div>
        )}
      </div>
      <div class="bg-sand-500">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row gap-4 py-10 items-center flex-wrap">
            <div class="flex">
              <div class="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  type="button"
                  class="border bg-white border-navy-500 text-navy-900 px-4 py-2 flex justify-between items-center w-60"
                >
                  <span class="flex-1">
                    {selectedLocation || 'Job Location'}
                  </span>
                  <span
                    class={`transition ease-out duration-200 ${
                      isFilterOpen ? 'transform -rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      width="19"
                      height="12"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 1L9.5 10L1 0.999999"
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                  </span>
                </button>
                {isFilterOpen && (
                  <div class="absolute left-0 w-full z-10 bg-sand-500 border shadow-lg border-teal-500 overflow-hidden">
                    {locations.map((location) => (
                      <div key={location}>
                        <Link
                          shallow
                          href={`?location=${location}`}
                          class="block w-full px-4 py-2 text-left text-sm hover:bg-dark-green-500 hover:text-dark-green-50 disabled:text-gray-500"
                          onClick={() => {
                            setIsFilterOpen(false);
                          }}
                        >
                          {location}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-sand-500">
        <div class="container mx-auto pb-12 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <h2 class="text-2xl leading-6 font-display text-navy-900">
            Jobs by Category — Operations
          </h2>
          <div class="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 md:gap-x-4 gap-y-6 md:gap-y-8">
            {jobs
              .filter((job) => {
                return job.locations.find(
                  (location) =>
                    !selectedLocation || selectedLocation === location,
                );
              })
              .map((job) => (
                <a
                  key={job.id}
                  href="{{ .Page.RelPermalink  }}"
                  class="block w-full group hover:shadow-solid-navy-lg-br transition"
                >
                  <div class="bg-sand-50 py-5 pl-6 relative h-full pr-20">
                    <h3 class="text-lg group-hover:text-teal-600 transition">
                      {job.title}
                    </h3>
                    <p class="font-mono pt-3">{job.locations.join(', ')}</p>
                    <div class="absolute right-0 bottom-0 bg-teal-500">
                      <svg
                        width="59"
                        height="59"
                        viewBox="0 0 59 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.0483 16L37.0234 29.5L22.0483 43"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexiblePage;

export function getStaticProps({ params }) {
  const url = '/' + (params.slug || []).join('/');
  return { props: { page: urlToContent(url), siteConfig: siteConfig() } };
}

export function getStaticPaths() {
  const pages = pagesByType('Page');
  return {
    paths: Object.keys(pages),
    fallback: false,
  };
}
