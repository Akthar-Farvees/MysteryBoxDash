import { Auth, DataStore } from 'aws-amplify';
import React, {createContext, useState, useEffect } from 'react'
import { Restaurant  } from '../models';


const RestaurantContext = createContext({});

const RestaurantContextProvider = ({children}) => {
    const [user, setUser] = useState();
    const [restaurant, setRestaurant] = useState();
    const sub = user?.attributes?.sub;
    
    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
    }, [])

    

    // useEffect(() => {
    //     //Fetch Restaurant and filter by adminSub

    //     if (!sub){
    //         return;
    //     }
    //     DataStore.query(Restaurant, (r) => r.adminSub("eq", sub)).then((restaurants) => console.log(restaurants) );
    // }, [sub])

    // console.log("Sub is: "+sub);
  
  return (
        <RestaurantContext.Provider>
            {children}
        </RestaurantContext.Provider>
    )
  
}

export default RestaurantContextProvider;
