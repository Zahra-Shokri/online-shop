import { useEffect } from 'react';

const useTitle = (titleName) => {
    useEffect(() => {
        document.title = titleName;
    }, [])
}

export default useTitle;