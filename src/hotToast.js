import toast from "react-hot-toast";

export const showSuccess = (action) => {
  toast.success(`Successfully ${action}!`);
};

export const showError = (message = "Something went wrong!!!") => {
  toast.error(message);
};