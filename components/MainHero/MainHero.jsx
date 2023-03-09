import * as React from 'react';

export const MainHero = ({
  backgroundImage = 'https://res.cloudinary.com/drw/image/upload/c_limit,w_1000/q_auto,f_auto/comm-drw/uploads/blue-texture-cropped.png',
  backgroundImageAlt = 'blue texture background',
  eyebrow,
  eyebrowImage,
  eyebrowImageAlt,
  heading,
  date,
  body,
  heroImage = 'https://res.cloudinary.com/drw/image/upload/q_90,c_fill,w_905,h_785,f_auto/comm-drw/careers/17.jpg',
  heroImageAlt,
  ...props
}) => {
  return (
    <div class="
    relative 
    bg-navy-900
    after:content-['']
    after:block 
    after:absolute 
    after:bottom-0 
    after:w-full 
    after:h-28 
    after:bg-gradient-to-t 
    after:from-navy-900"
    data-sb-field-path={props['data-sb-field-path']}
  >
    <img
      src={backgroundImage}
      class="h-full w-full object-cover opacity-25 absolute inset-0" alt={backgroundImageAlt}
    />
  <div class="container mx-auto">
    <div class="relative z-10 lg:max-w-lg xl:max-w-xl lg:w-full">
      <div class="py-24 md:py-28 lg:pl-6 lg:pr-0 lg:py-40 xl:pt-48 mx-auto container px-4 sm:px-6">
        <div class="sm:text-center lg:text-left">
          <span class="block font-mono text-orange-500 mb-6" data-sb-field-path=".eyebrow">{eyebrow}</span>
          <img
            class="sm:mx-auto lg:mx-0 max-h-14 mb-8"
            src={eyebrowImage}
            alt={eyebrowImageAlt}
          />
          <h1 class="text-4xl lg:text-5xl text-navy-50">
            <span class="block xl:inline font-bold leading-tight" data-sb-field-path=".heading">{heading}</span>
          </h1>
          <p class="mt-4 text-sm font-mono leading-normal text-navy-50 sm:mt-5 sm:text-md lg:text-base sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            {date}
          </p>
          <p class="mt-4 text-base leading-normal text-navy-50 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" data-sb-field-path=".body">
            {body}
          </p>
          {/* {{ with .Params.cta }}
            {{ if .is_enabled }}
              <div class="pt-10 pb-5">
                    {{ partial "cta" (dict "context" . "url" .url "is_external_link" .is_external_link "text" .text) }}
              </div>
            {{ end }}
          {{ end }} */}
        </div>
      </div>
    </div>
  </div>
  {/* {{ if .Params.has_video_hero }}
  {{ with .Params.video_url}}
    {{ $video_url_no_ext := index (split . ".") 0 }}
    <div class="relative z-10 overflow-hidden pl-10 xl:pl-0 transform translate-y-10 -mt-24 lg:-mt-10 lg:absolute lg:left-auto lg:bottom-0 lg:inset-y-0 lg:pt-24 lg:right-0 lg:w-1/2">
      <video class="left-slash-16 lg:left-slash-36 h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" loop autoplay muted playsinline>
        <source src="{{ site.Params.cloudinary_video_url }}/q_auto{{ $video_url_no_ext }}.mp4" type="video/mp4" />
        <source
          src="{{ site.Params.cloudinary_video_url }}/q_auto{{ $video_url_no_ext }}.webm"
          type="video/webm"
        />
      </video>
    </div>
  {{ end }} */}
  <div class="relative z-10 overflow-hidden pl-10 xl:pl-0 transform translate-y-10 -mt-24 lg:-mt-10 lg:absolute lg:left-auto lg:bottom-0 lg:inset-y-0 lg:pt-24 lg:right-0 lg:w-1/2">
    <img 
      src={heroImage}
      class="left-slash-16 lg:left-slash-36 h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      alt={heroImageAlt}
    />
  </div>
</div>
  );
};

