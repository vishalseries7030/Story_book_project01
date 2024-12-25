export default function Page1(){
    return(
        <div
        className="grid grid-cols-2 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dydh2rfnk/image/upload/v1734683825/NBT-Chandrayaan3/assets/bgImages/page18/n2y1wpnuwpeyw5humxyc.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top Left Section */}
        <div className="w-4/5 h-2/5 text-justify">
          <p>
            Dadaji understood that Veer had asked this question to impress him
            about his knowledge. So he played along.
          </p>
          <p>
            <strong>Dadaji:</strong> You tell me. I don't remember exactly.
          </p>
          <p>
            <strong>Veer:</strong> It is known as the 'Tiranga Point' where
            Chandrayaan 2 crash-landed, and 'Shiv Shakti Point' where Chandrayaan
            3 successfully landed.
          </p>
        </div>
  
        {/* Top Right Section */}
        <div className="w-4/5 h-2/5 text-justify">
          <p>
            <strong>Dadaji:</strong> Brilliant! Veer. Everything which our country
            does has a scientific and spiritual dimension to it. Shri Modi has
            named these two points himself after the success of Chandrayaan 3.
          </p>
        </div>
      </div>
    )
}