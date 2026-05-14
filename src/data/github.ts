const FALLBACK_VERSION = "v1.3.0";
const RELEASE_API =
  "https://api.github.com/repos/StevenACZ/SapoWhisper/releases/latest";

export async function fetchLatestVersion(): Promise<string> {
  try {
    const response = await fetch(RELEASE_API, {
      headers: { Accept: "application/vnd.github.v3+json" },
    });
    if (!response.ok) return FALLBACK_VERSION;
    const data = (await response.json()) as { tag_name?: string };
    return data.tag_name ?? FALLBACK_VERSION;
  } catch {
    return FALLBACK_VERSION;
  }
}
