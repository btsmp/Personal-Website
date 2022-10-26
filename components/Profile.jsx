import Image from 'next/image'

export function Profile() {
  return (
    <div className='flex'>
      <div className='bg-[#0A0A0A] rounded-full p-[1px] flex justify-center items-center'>

        <Image
          src="/profile.jpg"
          alt="Foto de Bruno Sampaio"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </div>
  )
}