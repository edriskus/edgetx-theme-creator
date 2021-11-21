const dataToImage = (dataUrl: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(dataUrl);
      resolve(img);
    };
    img.src = dataUrl;
  });
};

export async function cropImg(dataUrl: string): Promise<Blob | undefined> {
  const image = await dataToImage(dataUrl);
  const imageWidth = image.naturalWidth;
  const imageHeight = image.naturalHeight;

  const canvas = document.createElement("canvas");

  const ctx = canvas.getContext("2d");
  canvas.width = 480;
  canvas.height = 272;

  const hRatio = canvas.width / imageWidth;
  const vRatio = canvas.height / imageHeight;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = -(imageWidth * ratio - canvas.width) / 2;
  const centerShift_y = -(imageHeight * ratio - canvas.height) / 2;

  if (ctx != null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      image,
      0,
      0,
      imageWidth,
      imageHeight,
      centerShift_x,
      centerShift_y,
      imageWidth * ratio,
      imageHeight * ratio
    );

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error("Canvas is empty");
            return;
          }
          resolve(blob);
        },
        "image/png",
        1
      );
    });
  }
}
