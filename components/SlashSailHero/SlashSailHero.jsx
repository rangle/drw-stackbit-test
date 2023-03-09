import * as React from 'react';

export const SlashSailHero = ({
  imageOnRight,
  imageUrl = 'https://res.cloudinary.com/drw/image/upload/c_fill,g_face,q_auto,f_auto,w_380,h_480/v1636127712/comm-drw/uploads/cumberland_traders_yrobwy.jpg',
  imageAlt = 'photo of stock trader sitting in front of a wall of monitors',
  heading,
  headingIsSerif,
  body,
  isDark,
  ...props
}) => {
  return (
    <div class="bg-sand-500" data-sb-field-path={props['data-sb-field-path']}>
    <div class="container mx-auto">
      <div class="px-5 py-12 md:py-28 lg:py-32 grid grid-cols-1 md:grid-cols-2 sm:gap-x-5">
        <div class={`self-start ${imageOnRight ? 'order-last md:pl-14' : 'order-last md:order-first md:pr-14'}`}>
          <div class="mb-6 w-64 transform translate-x-4 md:-translate-x-10 h-[350px] sm:w-80 lg:w-96 md:h-[480px] mt-8 md:mt-0 mx-auto relative">
            <div class="bg-teal-500 backslash-60 h-[350px] sm:w-80 lg:w-96 md:h-[480px] absolute inset-0 transform translate-x-0 translate-y-5"></div>
            <img class="absolute w-[380px] h-[350px] sm:w-80 lg:w-96 md:h-[480px] backslash-60 inset-0 object-cover transform -translate-x-6" 
            src={imageUrl} alt={imageAlt} />
          </div>
        </div>
        <div class="mt-10 md:mt-0 flex py-4 flex-col justify-center">
          <h2 class={`text-navy-900 ${headingIsSerif ? 'text-3xl md:text-4xl font-display' : 'text-4xl md:text-5xl font-headline font-bold'}`} data-sb-field-path='.heading'>
            {heading}
          </h2>
          <div class={`text-base lg:text-xl prose mt-6 ${isDark ? 'text-navy-50' : 'text-navy-900'}`} data-sb-field-path='.body'>
            {body}
          </div>
          {/* {{ with .Params.cta }}
          {{ if .is_enabled }}
          <div class="pt-10">
              {{ partial "cta" . }}
          </div>
          {{ end }}
          {{ end }} */}
        </div>
      </div>
    </div>
  </div>
  
  );
};

