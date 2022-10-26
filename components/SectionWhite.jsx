export function SectionWhite({ children, id }) {
  return (
    <section
      id={id}
      className='bg-white text-[#0A0A0A] w-full flex flex-col-reverse md:flex-row items-center justify-center sm:justify-between gap-16 px-0 sm:px-36 py-28'
    >
      {children}
    </section>
  )
}