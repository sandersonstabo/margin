import {
    useAuth,
    useClerk,
    useSession,
    useSignIn,
    useSignUp,
    useUser,
} from "@clerk/react-router";

export const use_auth = () => {
    const clerk = useClerk();
    const auth = useAuth();
    const user = useUser();
    const session = useSession();
    const sign_in = useSignIn();
    const sign_up = useSignUp();

    const loading = !auth.isLoaded || (auth.isSignedIn && !user.isLoaded);
    const session_loading = auth.isSignedIn && !session.isLoaded;

    return {
        clerk,
        auth,
        user,
        session,
        sign_in,
        sign_up,
        loading,
        session_loading,
        signed_in: auth.isSignedIn,
        user_id: auth.userId,
        session_id: auth.sessionId,
        actor: user.user,
        active_session: session.session,
    };
};
