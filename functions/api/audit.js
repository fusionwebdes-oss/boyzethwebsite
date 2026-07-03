export async function onRequest(context) {
  const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type", "Content-Type": "application/json" }

  const url = new URL(context.request.url)
  const siteUrl = url.searchParams.get("url")

  if (!siteUrl) return new Response(JSON.stringify({ error: "Missing url parameter" }), { status: 400, headers })

  try {
    const apiKey = context.env.PAGESPEED_API_KEY || "AIzaSyCEkh4h3__KnNv_-Xe_6HoiP74Hhvvir_I"
    const apiUrl = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
    const categories = ["PERFORMANCE", "SEO", "ACCESSIBILITY", "BEST_PRACTICES"]
    const params = new URLSearchParams({ url: siteUrl, key: apiKey })
    categories.forEach((c) => params.append("category", c))

    const res = await fetch(`${apiUrl}?${params}`)

    if (!res.ok) {
      const err = await res.text()
      return new Response(JSON.stringify({ error: `PageSpeed API error: ${res.status}`, details: err }), { status: res.status, headers })
    }

    const data = await res.json()
    const lr = data.lighthouseResult
    if (!lr) return new Response(JSON.stringify({ error: "No lighthouse result returned" }), { status: 502, headers })

    const cats = lr.categories
    const perf = Math.round((cats.performance?.score || 0) * 100)
    const seo = Math.round((cats.seo?.score || 0) * 100)
    const a11y = Math.round((cats.accessibility?.score || 0) * 100)
    const bp = Math.round((cats["best-practices"]?.score || 0) * 100)
    const overall = Math.round((perf + seo + a11y + bp) / 4)

    const auditEntries = Object.entries(lr.audits || {})
    const failed = auditEntries.filter(([, a]) => a.score !== null && a.score < 0.5 && !a.title.startsWith("http") && a.title.length < 80).slice(0, 8).map(([, a]) => ({ severity: a.score < 0.3 ? "critical" : "warning", text: a.title }))
    const passed = auditEntries.filter(([, a]) => a.score !== null && a.score >= 0.9 && a.title.length < 80).slice(0, 2).map(([, a]) => ({ severity: "good", text: a.title }))
    const issues = [...failed, ...passed]

    return new Response(JSON.stringify({ score: overall, seo, speed: perf, mobile: a11y, security: bp, issues }), { status: 200, headers })
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to run audit", details: String(err) }), { status: 500, headers })
  }
}
