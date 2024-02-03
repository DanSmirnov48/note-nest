import { ActionButton, ActionButtonProps } from '@/components'
import { LuFileSignature } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {

    const handleCreation = async () => { }

    return (
        <ActionButton onClick={handleCreation} {...props}>
            <LuFileSignature className="w-4 h-4 text-zinc-300" />
        </ActionButton>
    )
}