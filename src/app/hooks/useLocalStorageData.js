

import { useEffect, useState } from 'react';
import { GetAllLocalStorage } from '../CommonUtility/GetAllLocalStorage';

const useLocalStorageData = () => {
    const [localData, setLocalData] = useState({});

    useEffect(() => {
        const data = GetAllLocalStorage();
        setLocalData(data);
    }, []);

    return localData;
};

export default useLocalStorageData;
