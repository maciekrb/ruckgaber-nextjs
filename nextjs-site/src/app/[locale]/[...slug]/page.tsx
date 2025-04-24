import React from 'react'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { initLingui } from '@/initLingui'
import { slugToPageName } from '@/locales/namedSlugs'

export default async function Page({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const { locale, slug } = await params
  initLingui(locale)
  const pageName = slugToPageName(slug)
  if (!pageName) {
    return notFound()
  }

  const PageComponent = dynamic(() => import(`./${pageName}.tsx`))
  return <PageComponent params={{ locale }} />
}
