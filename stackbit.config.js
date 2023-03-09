import Page from './.stackbit/models/Page'
import FooterConfig from './.stackbit/models/FooterConfig'
import MainHero from './.stackbit/models/MainHero'
import Quote from './.stackbit/models/Quote'
import CurvedImage from './.stackbit/models/CurvedImage'
import SlashSailHero from './.stackbit/models/SlashSailHero'
import SiteConfig from './.stackbit/models/SiteConfig'

const sbConfig = {
  stackbitVersion: '~0.5.0',
  ssgName: 'nextjs',
  cmsName: 'git',
  nodeVersion: '16',
  dataDir: 'content/data',
  pagesDir: 'content/pages',
  pageLayoutKey: 'type',
  assets: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'images',
    publicPath: '/'
  },
  models: {
    Page,
    FooterConfig,
    MainHero,
    Quote,
    SlashSailHero,
    CurvedImage,
    SiteConfig
  }
}

export default sbConfig
