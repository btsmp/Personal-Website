export function SectionWhite({ id, children, classes }) {
  return (
    <section
      id={id}
      className={`bg-white text-[#0A0A0A] w-full flex flex-col-reverse md:flex-row items-center justify-center sm:justify-between gap-16 px-0 sm:px-36 py-28 ${classes}`}

    >
      {children}
    </section>
  )
}