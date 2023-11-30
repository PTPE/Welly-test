export default function ConditionalRendering({ isLoggedIn }) {
  return (
    <>
      6. React：條件渲染
      <p>You are now {isLoggedIn ? "logged in" : "logged out"}.</p>
    </>
  );
}
