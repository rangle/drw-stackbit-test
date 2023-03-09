import * as React from 'react'
import { Cta } from '../Cta/Cta'
import Markdown from 'markdown-to-jsx'

export const CurvedImage = ({
  body,
  text,
  url,
  heading,
  image_alt,
  image_on_right,
  image_url,
  is_dark,
  cta_secondary = false,
  ...props
}) => {
  return (
    <div
      className={is_dark ? 'bg-navy-500' : 'bg-sand-500'}
      data-sb-field-path={props['data-sb-field-path']}
    >
      <div className='container mx-auto'>
        <div className='px-5 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 sm:gap-x-5'>
          <div
            className={`mt-10 mb-6 w-64 h-64 sm:w-72 sm:h-72 mx-auto md:mt-0 relative self-start ${
              image_on_right ? 'order-last mt-8' : ''
            }`}
          >
            <div className='bg-orange-500 w-64 h-64 sm:w-72 sm:h-72 absolute inset-0 transform translate-x-3'>
              <img
                className='absolute w-64 h-64 sm:w-72 sm:h-72 curved-tl inset-0 transform translate-y-6 -translate-x-6'
                src={image_url}
                alt={image_alt}
              />
            </div>
          </div>
          <div className='mt-10 md:mt-0'>
            {heading && (
              <h2
                className={`font-headline font-bold text-3xl lg:text-4xl ${
                  is_dark ? 'text-navy-50' : 'text-navy-900'
                }`}
                data-sb-field-path='.heading'
              >
                {heading}
              </h2>
            )}
            {body && (
              <div
                className={`text-base prose mt-6 ${
                  is_dark ? 'text-navy-50' : 'text-navy-900'
                }`}
              >
                <Markdown data-sb-field-path='.body'>{body}</Markdown>
              </div>
            )}
            {url && (
              <div className='pt-10'>
                <Cta
                  url={url}
                  text={text}
                  isSecondary={cta_secondary}
                  hover={
                    cta_secondary && is_dark
                      ? 'hover:text-navy-50'
                      : 'hover:text-navy-900'
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
