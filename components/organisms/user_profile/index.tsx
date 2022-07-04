import { FC, memo } from "react";
import { Image, Wrap, WrapItem } from "@chakra-ui/react";

interface UserProfileProps {
    name: string
    avatarUrl: string
}

const UserProfile: FC<UserProfileProps> = ({ name, avatarUrl }) => {
    return (
        <Wrap>
            <WrapItem>
                <Image borderWidth={2} borderStyle={'solid'} alt={name} src={avatarUrl} boxSize={'150px'}
                       borderRadius={'100px'} maxWidth={'150px'}/>
            </WrapItem>
        </Wrap>
    )
}

export const UserProfileComponent = memo(UserProfile);