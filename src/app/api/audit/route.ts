import { NextResponse } from "next/server"

const API_KEY = process.env.PAGESPEED_API_KEY || "AIzaSyCEkh4h3__KnNv_-Xe_6HoiP74Hhvvir_I"
const API_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 })
  }

  try {
    const categories = ["PERFORMANCE", "SEO", "ACCESSIBILITY", "BEST_PRACTICES"]
    const params = new URLSearchParams({ url, key: API_KEY })
    categories.forEach((c) => params.append("category", c))
    const res = await fetch(`${API_URL}?${params}`, { next: { revalidate: 3600 } })

    if (!res.ok) {
      const err = await res.text()
      return NextResponse.json({ error: `PageSpeed API error: ${res.status}`, details: err }, { status: res.status })
    }

    const data = await res.json()
    const lr = data.lighthouseResult
    if (!lr) {
      return NextResponse.json({ error: "No lighthouse result returned" }, { status: 502 })
    }

    const cats = lr.categories
    const perf = Math.round((cats.performance?.score || 0) * 100)
    const seo = Math.round((cats.seo?.score || 0) * 100)
    const a11y = Math.round((cats.accessibility?.score || 0) * 100)
    const bp = Math.round((cats["best-practices"]?.score || 0) * 100)
    const overall = Math.round((perf + seo + a11y + bp) / 4)

    const auditEntries = Object.entries(lr.audits || {}) as [string, { score: number | null; title: string; description?: string }][]
    const failed = auditEntries
      .filter(([, a]) => a.score !== null && a.score < 0.5 && !a.title.startsWith("http") && a.title.length < 80)
      .slice(0, 8)
      .map(([, a]) => ({
        severity: a.score === null ? "warning" as const : a.score < 0.3 ? "critical" as const : "warning" as const,
        text: a.title,
      }))
    const passed = auditEntries
      .filter(([, a]) => a.score !== null && a.score >= 0.9 && a.title.length < 80)
      .slice(0, 2)
      .map(([, a]) => ({
        severity: "good" as const,
        text: a.title,
      }))
    const issues = [...failed, ...passed]

    return NextResponse.json({
      score: overall,
      seo,
      speed: perf,
      mobile: a11y,
      security: bp,
      issues,
    })
  } catch (err) {
    return NextResponse.json({ error: "Failed to run audit", details: String(err) }, { status: 500 })
  }
}
