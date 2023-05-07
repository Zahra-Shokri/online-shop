import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type, text) => {
    if(type === 'SUCCESS')
        toast.success(text);
    else
        toast.error(text);
}
