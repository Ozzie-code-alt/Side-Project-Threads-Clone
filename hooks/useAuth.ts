import { supabase } from "@/lib/supabase-connection";
import { Session, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// TODO: CHange this hook and use AsyncStorage to persist the user session across app restarts
export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the initial session when the hook mounts
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Initial session:", session ? "Found" : "None");
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false); // Done loading initial session
    });

    // Listen for auth state changes (sign in, sign out, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(
        "Auth state changed:",
        event,
        session ? "Session exists" : "No session"
      );
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return {
    session,
    user,
    loading,
  };
}
