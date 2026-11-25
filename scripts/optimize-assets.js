import { createHash } from 'node:crypto'
import { readdir, readFile, mkdir, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDirectory = path.resolve('source-assets')
const outputDirectory = path.resolve('public/images')
const manifestPath = path.resolve('src/image-assets.js')
const widths = [480, 960, 1600]
const sourceFiles = (await readdir(sourceDirectory))
  .filter((name) => name.toLowerCase().endsWith('.png'))
  .sort()

await mkdir(outputDirectory, { recursive: true })

const uniqueImages = new Map()
const imageAssets = {}
let sourceBytes = 0

for (const name of sourceFiles) {
  const sourcePath = path.join(sourceDirectory, name)
  const sourceBuffer = await readFile(sourcePath)
  const sourceHash = createHash('sha256').update(sourceBuffer).digest('hex')
  sourceBytes += sourceBuffer.length

  let asset = uniqueImages.get(sourceHash)
  if (!asset) {
    const metadata = await sharp(sourceBuffer).rotate().metadata()
    const width = metadata.width
    const height = metadata.height
    const outputName = `${path.parse(name).name}.webp`
    const basePath = path.join(outputDirectory, outputName)
    const baseScale = Math.min(1, 1920 / width, 1920 / height)
    const baseWidth = Math.round(width * baseScale)
    const srcSet = []

    await sharp(sourceBuffer)
      .rotate()
      .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(basePath)

    for (const targetWidth of widths) {
      if (targetWidth >= baseWidth) continue
      const variantName = `${path.parse(name).name}-${targetWidth}.webp`
      await sharp(sourceBuffer)
        .rotate()
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: 80, effort: 5 })
        .toFile(path.join(outputDirectory, variantName))
      srcSet.push(`/images/${variantName} ${targetWidth}w`)
    }

    srcSet.push(`/images/${outputName} ${baseWidth}w`)
    asset = {
      src: `/images/${outputName}`,
      srcSet: srcSet.join(', '),
      width,
      height,
    }
    uniqueImages.set(sourceHash, asset)
  }

  imageAssets[`/${name}`] = asset
}

await writeFile(
  manifestPath,
  `export const imageAssets = ${JSON.stringify(imageAssets, null, 2)}\n`,
)

const outputFiles = await readdir(outputDirectory)
const outputStats = await Promise.all(
  outputFiles.map((name) => stat(path.join(outputDirectory, name))),
)
const outputBytes = outputStats.reduce((total, file) => total + file.size, 0)
console.log(`Processed ${sourceFiles.length} source images (${uniqueImages.size} unique).`)
console.log(`Source: ${(sourceBytes / 1024 / 1024).toFixed(1)} MB`)
console.log(`Responsive WebP output: ${(outputBytes / 1024 / 1024).toFixed(1)} MB`)
