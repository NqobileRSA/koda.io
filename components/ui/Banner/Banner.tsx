import './Banner.css';
type Props = { title: string };

const Banner = (props: Props) => {
  return (
    <div
      className="relative w-full h-[85vh] max-h-[900px] bg-cover bg-center"
      id="top"
      style={{ backgroundImage: "url('/businessman.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-2" />
      <div className="absolute top-1/2 left-0 w-full text-center uppercase transform -translate-y-1/2 z-15">
        <div className="container mx-auto p-4">
          <div className="row flex justify-center">
            {/* {props.title} */}
            <h1 className="text-6xl tracking-wide mb-6 text-white uppercase">
              {props.title}
            </h1>
            {/* Hero Subtitle */}
            {/* <h5 className="text-lg text-[#3f3f3f] tracking-wide">
              we advice + we design + we develop
            </h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
