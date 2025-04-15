const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageCloudinary = async file => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", upload_preset); 
  uploadData.append("cloud_name", cloud_name); 

  // try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: "post",
      body: uploadData,
    });

    const data = await res.json();

  //   if (res.ok) {
  //     return { url: data.secure_url };
  //   } else {
  //     console.error("Cloudinary upload error:", data);
  //     return null;
  //   }
  // } catch (error) {
  //   console.error("Cloudinary upload exception:", error);
  //   return null;
  // }
  return data;
};

export default uploadImageCloudinary;