
import { useState, useEffect } from 'react';

function useGetItem(itemName) {
    const [data, setData] = useState(null);
   

    useEffect(() => {
        async function fetchData() {
          
                const response = await fetch(`http://localhost:8000/api/v1/seller/mobile/model-name/${itemName}`, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok)
                    {
               
                const result = await response.json();
                setData(result.data);
            
            }
        }
        fetchData();
    }, [itemName]);

    return { data };
}

export default useGetItem;
