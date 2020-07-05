import React from 'react'

export default () => {
  return (
    <article
      className={
        'fixed inset-0 w-screen h-screen grid justify-center items-center'
      }
    >
      <a
        href={'http://github.com/reiwa'}
        className={'tracking-wider text-xl hover:text-blue-700'}
      >
        {'@reiwa'}
      </a>
    </article>
  )
}
