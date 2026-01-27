export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]); // remove data:mime;base64,
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
