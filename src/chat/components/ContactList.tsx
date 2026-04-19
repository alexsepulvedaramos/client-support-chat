import { NavLink, useParams } from 'react-router';

import { useQuery } from '@tanstack/react-query';
import { ScrollArea } from '@/components/ui/scroll-area';

import { getClients } from '@/fake/fake-data';

function ContactList() {
  const { clientId } = useParams();
  const { data: clients, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: () => getClients(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {isLoading ? (
              <div className="space-y-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-full flex items-center mt-3">
                    <div className="h-6 w-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 animate-pulse" />
                    <div className="h-4 bg-gray-300 rounded animate-pulse flex-1" />
                  </div>
                ))}
              </div>
            ) : (
              clients?.map((client) => (
                <NavLink
                  key={client.id}
                  to={`/chat/${client.id}`}
                  className={({ isActive }) =>
                    `w-full flex items-center mt-3 px-2 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-500 text-white shadow-lg font-medium'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <div
                    className={`h-6 w-6 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-xs font-semibold ${
                      client.id === clientId ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    {client.name.charAt(0)}
                    {client.name.charAt(1)}
                  </div>
                  <span className="truncate">{client.name}</span>
                </NavLink>
              ))
            )}
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
