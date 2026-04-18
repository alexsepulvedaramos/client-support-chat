import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NavLink } from 'react-router';

function ContactList() {
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <div className="h-6 w-6 rounded-full bg-blue-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                G5
              </div>
              G5 Customer
            </Button>
            <NavLink to="/chat/1" className="w-full flex items-center mt-3">
              <div className="h-6 w-6 rounded-full bg-green-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                JD
              </div>
              John Doe
            </NavLink>
            <NavLink to="/chat/2" className="w-full flex items-center mt-3">
              <div className="h-6 w-6 rounded-full bg-purple-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                AS
              </div>
              Alice Smith
            </NavLink>
            <NavLink to="/chat/3" className="w-full flex items-center mt-3">
              <div className="h-6 w-6 rounded-full bg-yellow-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                RJ
              </div>
              Robert Johnson
            </NavLink>
            <NavLink to="/chat/4" className="w-full flex items-center mt-3">
              <div className="h-6 w-6 rounded-full bg-pink-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                EW
              </div>
              Emma Wilson
            </NavLink>
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <NavLink to="/chat/5" className="w-full flex items-center mt-3">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </NavLink>
          <NavLink to="/chat/6" className="w-full flex items-center mt-3">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </NavLink>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ContactList;
