export const downloadAPK = async (filename: string) => {
  try {
    console.log('Starting download...');

    // Vercel has limitations with large files in public folder
    // Using Google Drive as a reliable alternative
    const downloadUrl =
        `https://drive.google.com/uc?export=download&id=1bl5NOEgWdnShLn3sFeS7AwuJEyhxMJha`;

    // Open download in new tab
    window.open(downloadUrl, '_blank');

    console.log('Download initiated successfully!');
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