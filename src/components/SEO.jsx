import React from 'react'
import Head from 'next/head'

export default function SEO({ title }) {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0'
      />
      <meta charSet='utf-8' />
      <title>{title || 'Next js template'}</title>
      <meta
        name='description'
        content='Next js template — это коворкинг в г. Ташкент, основанный с целью создать атмосферу, максимально подходящую не только для работы, но и отдыха. Next js template коворкинг-центр позволяет стартаперам, фрилансерам и руководителям небольших компаний экономить на аренде офиса.'
      />
      <meta
        name='keywords'
        content='Cspace, coworking, co-working, center, tashkent'
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={title || 'Next js template'}
        key='ogtitle'
      />
      <meta
        property='og:description'
        content='Next js template — это коворкинг в г. Ташкент, основанный с целью создать атмосферу, максимально подходящую не только для работы, но и отдыха. Next js template коворкинг-центр позволяет стартаперам, фрилансерам и руководителям небольших компаний экономить на аренде офиса.'
        key='ogdesc'
      />
      <meta
        property='og:site_name'
        content={title || 'Next js template'}
        key='ogsitename'
      />
      <meta
        property='og:image'
        content='https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be'
        key='ogimage'
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title || 'Next js template'} />
      <meta
        name='twitter:description'
        content='Next js template — это коворкинг в г. Ташкент, основанный с целью создать атмосферу, максимально подходящую не только для работы, но и отдыха. Next js template коворкинг-центр позволяет стартаперам, фрилансерам и руководителям небольших компаний экономить на аренде офиса.'
      />
      <meta name='twitter:site' content={title || 'Next js template'} />
      <meta name='twitter:creator' content='Udevs' />
      <meta
        name='twitter:image'
        content='https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be'
      />

      <link rel='icon' href='/favicon.ico' />
      {/* <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;600;700&display=swap'
        rel='stylesheet'
      /> */}
    </Head>
  )
}
