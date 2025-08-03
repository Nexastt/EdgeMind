export const downloadAPK = async (filename: string) => {
  try {
    console.log('Starting direct download...');

    // Direct download from local file
    const downloadUrl = `/EdgeMind.apk`;

    // Create a temporary link element for direct download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    link.target = '_blank';

    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Direct download initiated successfully!');
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    return false;
  }
};

// EdgeMind APK filename
export const EDGEMIND_FILENAME = 'EdgeMind.apk';