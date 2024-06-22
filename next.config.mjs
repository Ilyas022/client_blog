import path from 'node:path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(dirname, 'styles')],
		prependData: `@import "@/styles/theme.module.scss";\n@import "@/styles/mixins.module.scss";`,
	},
}

export default nextConfig
