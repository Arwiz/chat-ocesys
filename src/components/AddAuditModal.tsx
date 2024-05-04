"use client";

import { AddButton } from "@/atoms/AddButton";
import { useEffect, useState } from "react";
import { Modal, Checkbox, Label, TextInput, Button } from "flowbite-react";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { SERVER_API_URL } from "@/utils/fetch-data";
import { useRouter } from "next/navigation";
import { useOrganizationContext } from "@/context/OrganizationContextProvider";


export function AddAuditComponent() {
  const [openModal, setOpenModal] = useState(false);
  const organizationContext  =  useOrganizationContext()

  const [title, setTitle] = useState<string | undefined>('');
  
  const router = useRouter();


    const create_template = () => {
        
        console.log('create_template', SERVER_API_URL);
        if (title?.trim()?.length > 0) {
             save_templatae_on_server(title , 'singhd')
        }

    }
  
  const save_templatae_on_server = async (title: string, org_id: string) => {
      const session = await getSession();
    console.log('SERVER_API_URL => ', SERVER_API_URL, session );
    try
    {
      
      // Make the API call to save data
      const response = await fetch(`${SERVER_API_URL}/api/papers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + session?.token
                    'Authorization': '' + session?.user.token
                },
                body: JSON.stringify({
                    title,
                    organization_id : organizationContext?.organization_id
                }),
        // Send your form data in the request body
      });
        console.log('response', response);
        if (response.ok) {
            // Handle successful save
          console.log('Data saved successfully', response);
          setOpenModal(false)
          router.refresh();
        } else {
            // Handle save failure
            console.error('Failed to save data:', response.statusText);
        }
    } catch (error) {
      console.error('Error saving data:', error);
     }
    
}

    
    useEffect(() => {
       if(!openModal) {
            setTitle(undefined)
        }
     },[openModal]);

  return (
    <>
      <AddButton  handller={() => setOpenModal(true)}>New Template</AddButton>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>New Template{ organizationContext?.organization_id}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
             <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="title" value="Template Name" />
                    </div>
                    <TextInput id="title" type="text" placeholder="xyx..." required value={title} onChange={(evt)=> setTitle(evt.target.value) }/>
                </div>
             </form>
          </div>
        </Modal.Body>
        <Modal.Footer className=" justify-end">
          <Button onClick={create_template}>Create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}