import path from 'node:path'
import { fileURLToPath } from 'url'

import createNextIntlPlugin from 'next-intl/plugin'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(dirname, 'styles')],
		prependData: `@import "@/styles/theme.module.scss";\n@import "@/styles/mixins.module.scss";`,
	},
}

export default withNextIntl(nextConfig)
