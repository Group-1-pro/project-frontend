export default async function uploadImageToAzure(imageFile) {
    const sasToken = "sp=r&st=2023-08-21T10:14:40Z&se=2024-04-02T18:14:40Z&sv=2022-11-02&sr=c&sig=eyOqx2m7VE93UNWHVELMHsPCjgZDPUfZdI8LI%2BtmD30%3D"
    const uploadUrl = `https://wanderhands.blob.core.windows.net/wanderhands/${imageFile.name}?${sasToken}`;
  
    try {
      const response = await fetch(uploadUrl, {
        // mode:'no-cors',
        method: 'PUT',
        headers: {
          'Content-Type': imageFile.type,
          'x-ms-blob-type': 'BlockBlob',
        },
        body: imageFile,
      });
  
      if (response.ok) {
        // The image has been uploaded successfully
        console.log(response)
        const imageUrl = `https://wanderhands.blob.core.windows.net/wanderhands/${imageFile.name}`;
        return imageUrl;
      } else {
        // Handle error
        throw new Error('Image upload failed');
      }
    } catch (error) {
      // Handle error
      console.error('Error uploading image:', error);
      throw error;
    }
  }