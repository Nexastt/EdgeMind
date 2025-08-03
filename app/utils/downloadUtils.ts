export const downloadAPK = async (filename: string) => {
  try {
    console.log('Starting direct download...');

    // Direct download from Vercel deployment (APK in public folder)
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

// Configuration for different hosting services
export const HOSTING_CONFIG = {
  // Vercel Deployment (Current)
  vercel: {
    url: '/EdgeMind.apk',
    instructions: 'APK hosted directly in Vercel deployment from public folder'
  },

  // GitHub Releases (Alternative)
  github: {
    url:
        'https://github.com/yourusername/edgemind/releases/latest/download/EdgeMind.apk',
    instructions:
        'Upload APK to GitHub Releases and use the direct download link'
  },

  // Google Drive (Alternative)
  googleDrive: {
    url:
        'https://drive.google.com/uc?export=download&id=1bl5NOEgWdnShLn3sFeS7AwuJEyhxMJha',
    instructions: 'APK hosted on Google Drive with direct download link'
  },

  // Dropbox (Alternative)
  dropbox: {
    url: 'https://dl.dropboxusercontent.com/s/your-file-id/EdgeMind.apk',
    instructions:
        'Upload to Dropbox, get sharing link, and replace "www.dropbox.com" with "dl.dropboxusercontent.com"'
  },

  // Firebase Storage (Alternative)
  firebase: {
    url: 'https://storage.googleapis.com/your-project/EdgeMind.apk',
    instructions: 'Upload to Firebase Storage and use the public download URL'
  }
};