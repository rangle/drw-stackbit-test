import * as React from 'react';

export const Quote = ({
  hasDarkBackground,
  hasQuoteIcon,
  body,
  author,
  ...props
}) => {
  return (
    <div class={hasDarkBackground ? 'bg-navy-500' : 'bg-sand-500' } data-sb-field-path={props['data-sb-field-path']}>
  <div class="max-w-5xl py-24 md:py-32 px-4 sm:px-6 mx-auto">
    <div class="relative">
      {
        hasQuoteIcon && (<div class="absolute text-teal-500 w-24 h-16">
        <svg viewBox="0 0 94 60" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M48.249 59.0394L72.5905 1H93L78.0206 59.0394H48.249ZM2 59.0394L26.3416 1H46.751L31.7716 59.0394H2Z" stroke-width="1.43307"/>
</svg>
        </div>)
      }
        <div class={`font-display text-2xl md:text-4xl md:leading-10 relative ${hasQuoteIcon ? 'pt-10' : '' }} ${ hasDarkBackground ? 'text-navy-50' : ''}`} data-sb-field-path='.body'>
          {body}
        </div>
      <span class={`block mt-4 text-xs md:text-sm ${ hasDarkBackground ? 'text-navy-50' : ''}`} data-sb-field-path='.author'>—{author}</span>
      {/* {{ if .Params.cta.is_enabled }}
      {{ with .Params.cta }}
        <div class="{{ if .has_primary_cta }}mt-8{{ else }}mt-4{{ end }} {{ if .cta_align_center }}flex justify-center{{ end }}">
            {{ $text_size := "text-xs md:text-sm"}}
            {{ $cta_template := "cta-secondary" }}
            {{ if .has_primary_cta }}
              {{ $cta_template = "cta"}}
            {{ end }}
            {{ partial $cta_template (dict "url" .url "is_external_link" .is_external_link "text" .text "text_size" $text_size)}}
        </div>
      {{ end }}
      {{ end }} */}
    </div>
  </div>
</div>

  );
};

