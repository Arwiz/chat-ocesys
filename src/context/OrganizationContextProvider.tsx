"use client"
import React, { createContext, useContext, useState } from 'react';


export type OrganizationContextType = {
  organization_id?: string,
  set_organization?: (org_id: string) => void,
}


const initialState: OrganizationContextType = {
  organization_id: undefined,
}


// Create a context for email validation
export const OrganizationContext = createContext(initialState) ;

export const useOrganizationContext = (): OrganizationContextType => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error('Paper context not available');
  }
  return context;
};

//Orgnization provider component
export const OrganizationContextProvider = ({ children , orgnization_id}: { children: React.ReactNode, orgnization_id?: string }) => {

    const [organizationId, setOrganizationId] = useState<string| undefined>(orgnization_id);
   

  return (
    <OrganizationContext.Provider  value={{ organization_id : organizationId, set_organization: setOrganizationId }}>
      {children}
    </OrganizationContext.Provider>
  );
};