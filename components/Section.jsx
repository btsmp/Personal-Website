export function Section({ children, id, ...rest }) {
  return (
    <section
      id={id}
      className='mt-9 flex justify-center items-center flex-col h-screen'
      {...rest}
    >
      {children}
    </section>
  )
}