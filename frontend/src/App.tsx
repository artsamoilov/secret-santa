import {createClient, Session} from '@supabase/supabase-js';

import './index.css';
import {useEffect, useState} from "react";
import {Auth} from "@supabase/auth-ui-react";

const App = () => {
  const supabase = createClient(
    'https://czahejlcmwhrgnpvfuvf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YWhlamxjbXdocmducHZmdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1NzQ5MjEsImV4cCI6MjAxNzE1MDkyMX0.eZUKRhdmHbhYFss93kXQq8EzGkI5evedwv9YOvwFuqg'
  );

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => setSession(session));
  }, []);

  const handleLogOutClick = () => supabase.auth.signOut().then(() => setSession(null));

  if (!session) {
    return (
      <div className="w-[400px]">
        <Auth supabaseClient={supabase} />
      </div>
    );
  }
  else {
    return (
      <div>
        <h1>Logged in!</h1>
        <button onClick={handleLogOutClick} className="bg-blue-400 p-[16px] rounded">Log out</button>
      </div>
    );
  }
};

export default App;
