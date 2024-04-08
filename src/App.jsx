import React from "react";
function App() {
  return (
    <>
      <div className="container flex p-2 flex-col md:flex-row w-full gap-4 md:px-4 md:py-4 h-screen items-center bg-slate-100 ">
        {/* Sidebar */}
        <div className="sidebar w-full md:w-[20%] h-auto md:h-full px-3 gap-4 bg-slate-600 rounded-lg flex flex-col justify-around items-right">
          <button className="bg-slate-400 text-xl text-white px-4 py-2 rounded-full self-end">
            <span class="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <div className="flex text-3xl text-white items-center gap-2 ">
            <span class="material-symbols-outlined font-semibold text-3xl">
              deployed_code
            </span>
            <h1 className="text-3xl font-semibold">Catalix</h1>
          </div>
          <nav className="flex flex-col  ">
            <div className="flex gap-4 text-white items-center border-2 border-white px-4 py-2 rounded-lg bg-blue-300">
              <span class="material-symbols-outlined">home</span>
              <p className="md:text-2xl font-medium"> Home </p>
            </div>
            <div className="flex gap-4 text-white items-center  px-4 py-2 rounded-lg">
              <span class="material-symbols-outlined"> timer </span>
              <p className="md:text-2xl font-medium"> Activities </p>
            </div>
            <div className="flex gap-4 text-white items-center  px-4 py-2 rounded-lg ">
              <span class="material-symbols-outlined">equalizer</span>
              <p className="md:text-2xl font-medium"> Analytics </p>
            </div>
            <div className="flex gap-4 text-white items-center  px-4 py-2 rounded-lg ">
              <span class="material-symbols-outlined">rocket_launch</span>
              <p className="md:text-2xl font-medium"> transformation </p>
            </div>
            <div className="flex gap-4 text-white items-center  px-4 py-2 rounded-lg">
              <span class="material-symbols-outlined">layers</span>
              <p className="md:text-2xl font-medium"> Library </p>
            </div>
          </nav>

          <div className="footer w-full p-4 border-t-4 border-white-500 rounded-sm flex flex-col gap-4">
            <div className="flex gap-4 text-white items-center rounded-lg">
              <span class="material-symbols-outlined">settings</span>
              <p className="md:text-2xl font-medium"> Settings </p>
            </div>
            <div className="flex gap-4 text-white items-center rounded-lg">
              <span class="material-symbols-outlined">logout</span>
              <p className="md:text-2xl font-medium"> Log out </p>
            </div>
          </div>
        </div>

        {/* Middle Part */}
        <div className="middlepart w-full md:w-[50%] h-auto md:h-full bg-slate-100  rounded-lg flex flex-col items-center gap-8">
          <div className="search-bar md:w-[70%] flex justify-between items-center p-2 rounded-lg border-2 border-gray-300">
            <div className="flex gap-2 md:gap-4">
              <span class="material-symbols-outlined text-blue-400 text-md">
                search
              </span>
              <p className=" text-sm md:text-md ">
                {" "}
                Search by profile, setting, artifact...{" "}
              </p>
            </div>
            <span class="material-symbols-outlined text-blue-400 text-md">
              cancel
            </span>
          </div>
          <div className="text flex flex-col gap-8 py-5">
            <h1 className="text-3xl font-medium">Set-up Catalix for Success</h1>
            <p className="text-2xl font-normal">
              Get Catalix up to date or start your transformation by following
              the guide below.
            </p>
          </div>
          <div className="card flex flex-col justify-around items-center border-2 border-gray-200 rounded-lg bg-slate-50 h-auto md:h-80 shadow-2xl py-8">
            <button className="bg-slate-400 text-xl text-white px-6 py-2 rounded-full">
              {" "}
              2/6{" "}
            </button>
            <p className=" text-3xl font-semibold p-4 mx-auto w-[80%] flex justify-center items-center ">
              {" "}
              Build your development value stream map
            </p>
            <button className="bg-slate-500 text-xl text-white px-6 py-2 rounded-full">
              Start Building
            </button>
            <div className="dits font-bold text-3xl flex gap-2 ">.......</div>
          </div>
        </div>

        {/* Last Part */}
        <div className="lastpart w-full md:w-[35%] h-auto md:h-full rounded-lg flex flex-col items-end">
          <div className="flex gap-4 ">
            <span class="material-symbols-outlined bg-slate-200 p-2 rounded-full">
              add_alert
            </span>
            <span class="material-symbols-outlined bg-slate-200 p-2 rounded-full">
              comment
            </span>
          </div>
          <div className="textt flex flex-col gap-4 p-4">
            <p className=" text-3xl font-semibold ">Get ready to transform </p>
            <p className=" text-xl font-medium text-gray-400 ">
              Here’s a video to get started. As your transformation progresses,
              you’ll get fresh tips and insights here.
            </p>
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/9824/f33c/76647abb61891fe13da188ea01dbbb9d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pUCE7D3z~AF3iEBDnEjJJ1GTeiUefPTZFAdVPKbETkgSYW1PwjqfxuXP9EZhw33qua8hGoCeyMue85g5HU1l8HaV1iI6aqotNbbn3Q6mZcpQUFqr00NMudctBJkqmLFaGHWTdp808eOtsyPEEeFZKtk2IZFj2juDpcZN9RrD-mdDMrATwkKFU-y4XI3BqNwdDK6Ep1UWSmP3pRj-TcR2rKT9DnPWiL9pEaRDU66iKTyGrIsrQJb9bnh23YxDDSoQEkzS5EOWkWfKD61J5es-UKrAcCs5mEBssBzzkK55ITeNrP~V--ayfEYM8ifMU25eIR6Ka-5rwZdcWCEuLrM0iw__"
                class="rounded-2xl"
                alt="image"
              ></img>
              <div className="w-52 h-1 bg-black rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 m-4">
                <button className="border-2 border-solid border-slate-950 p-1 rounded-xl">
                  <i class="fa-solid fa-play p-1"></i>2:36
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
