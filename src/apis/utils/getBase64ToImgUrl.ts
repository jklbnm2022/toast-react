import axios from "axios";
import { PREFIX_UTIL_HOST } from "../../stores/prefixApis";

export default async function getBlobToImgUrl(blob: Blob) {
  const form = new FormData();
  form.append("image", blob);
  const response = await axios.post(`${PREFIX_UTIL_HOST}/images/file`, form);
  return response.data;
}
