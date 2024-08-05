export async function uploadImage(imageFile) {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'nyxlzfzp');
  
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/taniii/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  }
  