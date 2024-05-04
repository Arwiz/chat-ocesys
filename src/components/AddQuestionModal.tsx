"use client";

import { AddButton } from "@/atoms/AddButton";
import { useEffect, useState } from "react";
import { Modal, Checkbox, Label, TextInput, Button } from "flowbite-react";
// import { SERVER_API_URL } from "@/utils/fetch-data";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { QuestionDesign } from "./QuestionDesign";
import { usePaperContext } from "@/context/PaperContextProvider";


type Props = {
  children: React.ReactNode,
  data: any
}

const SERVER_API_URL =   process.env.SERVER_API_URL;

export function AddQuestionComponent({children, data}: Props) {
    const [openModal, setOpenModal] = useState(false);

  const [title, setTitle] = useState<string | undefined>('');
    
  const save_question_to_paper_group = async (title: string, org_id: string) => {
    const session = await getSession();
    console.log(title, org_id, SERVER_API_URL );
    try
      {
      // Make the API call to save data
      const response = await fetch(`${SERVER_API_URL}/papers`, {
                method: 'PUT',
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
    <div>
      <AddButton  handller={() => setOpenModal(true)}>{children}</AddButton>
      <Modal size={'7xl'}   show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Question</Modal.Header>
              <Modal.Body>
                   <div className="space-y-6 overflow-y-auto">
                      <QuestionDesign onSave={(question) => {
                          console.log('On save', question);
                          }} ></QuestionDesign>
                          </div>
        </Modal.Body>
        <Modal.Footer className=" justify-end">
          {/* <Button onClick={create_template}>Create</Button> */}
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
