const PREFIX_API_HOST = `${
  process.env.REACT_APP_MODE === "development"
    ? "/api"
    : process.env.REACT_APP_BACK_HOST
}`;

const PREFIX_UTIL_HOST =
  process.env.REACT_APP_MODE === "development"
    ? "/util"
    : process.env.REACT_APP_UTIL_HOST;

export { PREFIX_API_HOST, PREFIX_UTIL_HOST };
