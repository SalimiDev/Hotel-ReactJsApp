import { toast } from 'react-toastify';
export const notify = (type, message) => {
    if (type === 'success') {
        toast.success(message);
    } else {
        toast.error(message);
    }
};
