import axios from "axios";
import { PREFIX_UTIL_HOST } from "../../stores/prefixApis";

export default async function getBlobToImgUrl(blob: Blob) {
  const form = new FormData();
  form.append("image", blob);
  const response = await axios.post(`${PREFIX_UTIL_HOST}/images/file`, form);
  return response.data;
}

// 참고: https://forteleaf.tistory.com/entry/axiospost-%EC%97%90-form-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EB%84%A3%EA%B8%B0
