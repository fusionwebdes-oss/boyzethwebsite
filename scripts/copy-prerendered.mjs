import { mkdirSync, copyFileSync, existsSync, readdirSync, unlinkSync } from "fs"
import { join, relative } from "path"

const prerenderedDir = ".next/server/app"
const assetsDir = ".open-next/assets"

const skipDirs = new Set(["_not-found", "_global-error", "favicon.ico", "api"])
const skipFiles = new Set(["sitemap.xml", "sitemap.xml.body", "sitemap.xml.meta", "robots.txt"])

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) walk(fullPath, files)
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(fullPath)
  }
  return files
}

function safeCopy(src, dest) {
  if (existsSync(dest)) {
    try { unlinkSync(dest) } catch {}
  }
  mkdirSync(join(dest, ".."), { recursive: true })
  copyFileSync(src, dest)
}

if (!existsSync(prerenderedDir)) {
  console.log("No prerendered dir found at", prerenderedDir)
  process.exit(0)
}

const htmlFiles = walk(prerenderedDir)
let copied = 0

for (const file of htmlFiles) {
  const relPath = relative(prerenderedDir, file).replace(/\\/g, "/")
  const parts = relPath.split("/")
  if (skipDirs.has(parts[0])) continue

  const fileName = parts[parts.length - 1]
  if (skipFiles.has(fileName)) continue

  if (relPath === "index.html") {
    safeCopy(file, join(assetsDir, "index.html"))
    copied++
    continue
  }

  const urlPath = relPath.replace(/\.html$/, "")
  const destFile = join(assetsDir, urlPath, "index.html")
  mkdirSync(join(assetsDir, urlPath), { recursive: true })
  safeCopy(file, destFile)
  copied++
}

console.log(`Copied ${copied} prerendered pages to assets`)
