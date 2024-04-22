"use clien";

import React from 'react';
import { SignUp } from "@clerk/nextjs";


function page() {
  return (
    <div>
        <SignUp routing="hash"/>
    </div>
  )
}

export default page