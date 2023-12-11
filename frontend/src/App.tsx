import {createClient, Session} from '@supabase/supabase-js';
import {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import DashboardPage from "./pages/DashboardPage/DashboardPage.tsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";

const App = () => {
  const supabase = createClient(
    'https://czahejlcmwhrgnpvfuvf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YWhlamxjbXdocmducHZmdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1NzQ5MjEsImV4cCI6MjAxNzE1MDkyMX0.eZUKRhdmHbhYFss93kXQq8EzGkI5evedwv9YOvwFuqg'
  );

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    if (!session) {
      supabase.auth.getSession()
        .then(({data: {session}}) => setSession(session));
    }
  }, [supabase]);

  console.log(session?.user.role);

  // if (!session) {
  //   return <i>Loading...</i>;
  // }

  return (
    <Routes>
      <Route
        index
        element={
        <PrivateRoute role={session?.user.role}>
          <DashboardPage />
        </PrivateRoute>
      }
      />
      <Route
        path="/login"
        element={<LoginPage session={session} supabase={supabase} />}
      />
      <Route
        path="*"
        element={<div><h1>Error</h1><Link to='/'>Go to main</Link></div>}
      />
    </Routes>
  );
};

export default App;
