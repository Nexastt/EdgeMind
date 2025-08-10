export const downloadAPK = async (filename: string) => {
  try {
    console.log('Starting download...');

    // Create a temporary anchor element for direct download
    const link = document.createElement('a');
    link.href = GITHUB_RELEASE_URL;
    link.download = EDGEMIND_FILENAME;
    link.style.display = 'none';

    // Append to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Download initiated successfully!');
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    return false;
  }
};

// EdgeMind APK filename
export const EDGEMIND_FILENAME = 'EdgeMind.apk';

// GitHub release configuration
export const GITHUB_RELEASE_URL =
    'https://github.com/Nexastt/EdgeMind/releases/download/apk/EdgeMind.apk';