```javascript
// pages/aboutSolution.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  // Handle potential error during session retrieval
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>Logged in as {session.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
```