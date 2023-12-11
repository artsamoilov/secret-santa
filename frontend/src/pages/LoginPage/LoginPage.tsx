import {Auth} from "@supabase/auth-ui-react";
import {Session, SupabaseClient} from "@supabase/supabase-js";

const LoginPage = (
  {
    session,
    supabase
  }:{
    session: Session | null,
    supabase: SupabaseClient
  }) => {
  const handleLogOutClick = () => supabase.auth.signOut()
    // .then(() => setSession(null));

  return (
    <>
      <Auth providers={[]} supabaseClient={supabase} />
      <p>Session user email: {session?.user.email}</p>
      <button onClick={handleLogOutClick}>Logout</button>
    </>
  )
}

export default LoginPage;
