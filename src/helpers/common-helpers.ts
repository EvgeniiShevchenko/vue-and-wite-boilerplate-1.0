export const formDataToBase64 = (formData) => {
  return new Promise((resolve) => {
    if (formData === null) resolve(formData);

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      console.error(error);
    };
    fileReader.readAsDataURL(formData.get("file"));
  });
};
