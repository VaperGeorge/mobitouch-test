import isUrl from "is-url";

export const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.author) {
    errors.author = "Required";
  }
  if (!values.youtube_id) {
    errors.youtube_id = "Required";
  }
  if (!values.itunes_url) {
    errors.itunes_url = "Required";
  } else if (!isUrl(values.itunes_url)) {
    errors.itunes_url = "You must enter a valid URL from YouTube";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};
