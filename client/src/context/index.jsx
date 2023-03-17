import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract("0x7Eb55D19301009135c03ADE1B9e00752a3F23B3f");
  contract
  debugger
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, "createCampaign");
  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (formData) => {
    const { title, description, target, deadline, image } = formData;
    try {
      const data = await createCampaign([
        address, //_owner
        title, //_title
        description, //_description
        description, //_description
        target, //_target
        new Date(deadline).getTime(), //_deadline
        image, //_image
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
