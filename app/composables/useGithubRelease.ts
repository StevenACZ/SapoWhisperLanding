/**
 * Composable to fetch the latest release version from GitHub API
 */
export const useGithubRelease = () => {
  const version = ref("v1.1.0"); // Fallback version
  const loading = ref(true);
  const error = ref<string | null>(null);

  const fetchLatestRelease = async () => {
    try {
      loading.value = true;
      error.value = null;

      const response = await fetch(
        "https://api.github.com/repos/StevenACZ/SapoWhisper/releases/latest",
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.tag_name) {
        version.value = data.tag_name;
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Failed to fetch release";
      console.warn("Failed to fetch GitHub release:", error.value);
      // Keep fallback version
    } finally {
      loading.value = false;
    }
  };

  // Fetch on client-side only
  onMounted(() => {
    fetchLatestRelease();
  });

  return {
    version,
    loading,
    error,
    refresh: fetchLatestRelease,
  };
};
