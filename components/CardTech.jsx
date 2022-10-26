export function CardTech({ name, icon: Icon }) {
  return (
    <div className='m-auto w-52 flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-xl p-4 hover:scale-105 duration-200'>

      <Icon size={180} />
      <h1 className='font-medium text-lg'>{name}</h1>

    </div>
  )
}