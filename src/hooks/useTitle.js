import { useEffect } from 'react';

const useTitle = (titleName) => {
    useEffect(() => {
        document.title = titleName;
    }, [titleName])
}

export default useTitle;