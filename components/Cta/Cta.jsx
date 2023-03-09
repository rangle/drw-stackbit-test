import * as React from 'react'
import Link from 'next/link'

export const Cta = ({
  url,
  text,
  isSecondary,
  textColor = 'text-orange-500',
  hover = 'hover:text-navy-900',
  font = 'font-mono',
  textSize
}) => {
  const isMailTo = (url) => /^mailto?/i.test(url)
  const isHttp = (url) => /^http?/i.test(url)
  const isAnchor = /^#/i.test(url)
  const isExternal = isHttp(url) || isMailTo(url)

  const internalProps = {
    href: url.startsWith('/') || isAnchor ? url : `/${url}`
  }

  const externalProps = {
    href: url.length > 0 ? url : null,
    target: isMailTo(url) ? '_self' : '_blank'
  }
  return (
    <Link
      {...(isExternal ? externalProps : internalProps)}
      legacyBehavior
      passHref
    >
      {isSecondary ? (
        <a
          className={`
        ${textColor} 
        ${hover} 
        ${font} 
        ${textSize}
        cursor-pointer
        underline
        transition
        hover:no-underline 
      `}
        >
          <span data-sb-field-path='.ctaText'>{text}</span>
          <span>
            {isExternal ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-4 w-4 inline relative ml-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            ) : (
              <> &#8594;</>
            )}
          </span>
        </a>
      ) : (
        <a
          className='
          border border-teal-500
          inline-block
          text-sm text-navy-50
          outline-none
          py-5
          px-12
          bg-navy-500
          focus:ring-2 focus:ring-teal-600 focus:ring-offset-2
          hover:shadow-solid-teal hover:border-navy-500
          transition
          duration-200
        '
        >
          <span data-sb-field-path='.ctaText'>{text}</span>
        </a>
      )}
    </Link>
  )
}
