import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/Article/ArticlesCell'
import { ColorSchemeToggle } from 'src/components/ColorSchemeToggle'
import { Welcome } from 'src/components/Welcome'

export default function IndexPage() {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Welcome />
      <ColorSchemeToggle />
      <ArticlesCell />
    </>
  )
}
