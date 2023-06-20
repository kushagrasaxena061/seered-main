

import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ 
  icon: Icon,
  onClick,
}) => {
  return ( 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-red-600 hover:to-indigo-600
        px-4 
        py-2 
        text-black
        shadow-sm 
        ring-1 
        ring-inset 
        ring-black 
        hover:bg-zinc-800 
        focus:outline-offset-0
      "
    >
      <Icon />
    </button>
   );
}
 
export default AuthSocialButton;
