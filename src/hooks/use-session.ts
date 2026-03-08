import { useAuth } from "@clerk/clerk-react"

export const use_session = () => {
    const { isLoaded, isSignedIn, userId, sessionId } = useAuth();
    
    return {
        loading: isLoaded,
        signed_in: isSignedIn,
        user_id: userId,
        session_id: sessionId,
    }
}