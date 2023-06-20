
import Sidebar from "./components/Sidebar";
import Delete from "./components/delete";


export default async function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    
      <Sidebar>
        {children}
      </Sidebar>
    
      
    
  
  );
}
