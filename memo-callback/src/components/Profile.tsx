import React, { memo } from 'react'

type Props = {
   firstname: string,
   lastname: string
}

const Profile = memo(({ firstname, lastname }: Props) => {
   console.log("rendered profile component")
  return (
    <div>
      Profile
      Full Name: {firstname} {lastname}.
    </div>
  )
})


export default Profile