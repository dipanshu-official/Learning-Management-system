import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppContextProvider = (props) => {
    // Define the state and update function
    const value = {}

    return (
        <AppContext.Provider value={value}>
            {/* Render the children components */}
            {props.children}
        </AppContext.Provider>
    );
};