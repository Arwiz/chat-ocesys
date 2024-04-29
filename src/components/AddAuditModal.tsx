"use client";

import { AddButton } from "@/atoms/AddButton";
import { useEffect, useState } from "react";
import { Modal, Checkbox, Label, TextInput, Button } from "flowbite-react";
// import { SERVER_API_URL } from "@/utils/fetch-data";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";



const SERVER_API_URL =   process.env.SERVER_API_URL;

export function AddAuditComponent() {
    const [openModal, setOpenModal] = useState(false);

     const [title, setTitle] = useState<string | undefined>('');


    const create_template = () => {
        
        console.log('create_template', title);
        if (title?.trim()?.length > 0) {
             save_templatae_on_server(title , 'singhd')
        }

    }
  
  const save_templatae_on_server = async (title: string, org_id: string) => {
    const session = await getSession();
    console.log(title, org_id, SERVER_API_URL );

    try
      {
      // Make the API call to save data
      const response = await fetch(`${SERVER_API_URL}/papers/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + session?.token
                    'Authorization': '' + session?.token
                },
                body: JSON.stringify({
                    title,
                    // orgnization_id : undefined
                }),
        // Send your form data in the request body
      });
        console.log('response', response);
        if (response.ok) {
            // Handle successful save
          console.log('Data saved successfully', response);
          setOpenModal(false)
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
        <Modal.Header>New Template</Modal.Header>
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