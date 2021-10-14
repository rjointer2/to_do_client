
// icons
import { RiUserSettingsLine } from 'react-icons/ri'
import { IoMdPaper } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

// styles
import { SettingsContainer, SettingsItems } from "./SettingStyles";


// state managment
import { useContext } from 'react';

// next
import Link from 'next/link';
import { useGlobalState } from '../../hooks/useGlobalStateHook';


export default function Settings() {

    // global state
    const { state, dispatch } = useGlobalState()
    const { user } = state;


    return (
        <SettingsContainer>
            <Link href='/search'>
                <SettingsItems>
                    <AiOutlineSearch/> Search
                </SettingsItems>
            </Link>
            { user && <>
                <Link href="settings ">
                <SettingsItems>
                    <RiUserSettingsLine/> Settings
                </SettingsItems>
                </Link>
                <Link href={`/user/${user.id}`} >
                    <SettingsItems>
                        <IoMdPaper/> Todos...
                    </SettingsItems>
                </Link>
            </> }
        </SettingsContainer>
    )
}

