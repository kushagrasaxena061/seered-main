"use client";


import Button from "./Button";


const AccountContent = () => {
  return ( 
    <div className="mb-7 px-6">
        <div className="flex flex-col gap-y-4">
        <p>No active plan.</p>
        <Button 
          onClick={() => {}}
          className="w-[300px]"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
 
export default AccountContent;
