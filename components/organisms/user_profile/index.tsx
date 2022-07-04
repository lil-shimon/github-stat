import { FC, memo } from "react";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";

interface UserProfileProps {
    name: string
    avatarUrl: string
}

const UserProfile: FC<UserProfileProps> = ({ name, avatarUrl }) => {
    return (
        <>
            <Wrap>
                <WrapItem>
                    <Avatar name={name} src={avatarUrl}/>
                </WrapItem>
            </Wrap>
        </>
    )
}

export const UserProfileComponent = memo(UserProfile);