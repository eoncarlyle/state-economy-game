export default function WrappedReactNode({ children }: { children: JSX.Element }) {
  return (<> {children} </>) as React.ReactNode;
}
