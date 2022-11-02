import getBlobToImgUrl from "../../../apis/utils/getBase64ToImgUrl";

const uploadImageInS3 = async (blob: Blob | File) => {
  const response = await getBlobToImgUrl(blob);
  return response;
};

export default uploadImageInS3;
