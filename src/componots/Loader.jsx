import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className=" w-screen h-screen   flex justify-center items-center ">
      <Oval
        height={80}
        width={80}
        color="#E50914"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#E50914"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loader;
