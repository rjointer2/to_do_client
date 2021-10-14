
import { ApolloError, useMutation } from '@apollo/client';
import React, { useReducer, useState } from 'react'
import { UPDATE_USER } from '../../apollo_client/mutations/user';
import { formErrorReducer, initialFormErrorState } from '../../hooks/useFormErrorHook';
import { useGlobalState } from '../../hooks/useGlobalStateHook';
import { Card_Info_Top_Item, Card_Master, CenteredDiv } from '../../styled_components/aligment'
import { AvatarCircle, EditIcon, TrashIcon } from '../../styled_components/assets'
import { FormLabel } from '../../styled_components/form'
import UserAvatar from '../UserAvatar/UserAvatar';

export default function UpdateUserImage() {

    const { state } = useGlobalState()
    const { user } = state;
 
    const [fileInput, setFileInput] = useState<File | string>('');
    const [preview, setPreview] = useState<string | ArrayBuffer | null>('');
    const [ formErrorState, formErrorDispatch ] = useReducer(formErrorReducer, initialFormErrorState);

    const [updateUser] = useMutation(UPDATE_USER);

    const handleFileInput = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        if(!e.target.files) {
            formErrorDispatch({ 
                type: "INIT_FORM_ERROR", 
                payload: `You must select a photo`
            })
            return false
        }
        setFileInput(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = async () => {
            setPreview(reader.result)
        }
    }

    const updateUserImaage = async () => {
        try { 
            await updateUser({ variables: {
                "picture": preview,
                "username": "", 
                "password": "", 
                "email": "", 
                "confirmPassword": ""
            } })
        } catch(err) {
            const error = err as unknown as ApolloError
            console.log(error.message)
        }
    }

    return (
        <div>
            <FormLabel>Picture</FormLabel>
                <Card_Master>
                    <CenteredDiv>
                        { user && <UserAvatar url={user.id} /> }
                        <input  type="file" name="image" onChange={handleFileInput} value="" />    
                        { preview && <>
                            <AvatarCircle src={preview} alt="new image of user, and not a cat..." /> 
                            <FormLabel>
                                Update Profile Pricture? 
                            </FormLabel>
                            <Card_Master>
                                <br/>
                                <Card_Info_Top_Item>
                                    Yes <EditIcon  onClick={updateUserImaage} />
                                </Card_Info_Top_Item>
                                <Card_Info_Top_Item>
                                    No <TrashIcon  onClick={() => setPreview('')} />
                                </Card_Info_Top_Item>
                            </Card_Master>
                        </> }
                    </CenteredDiv>
            </Card_Master>
        </div>
    )
}
