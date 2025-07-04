import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos-06/logos";
import Marquee from "@/components/ui/marquee";

const Logos06Page = () => {
  return (
    <div className="flex items-center justify-center px-6 pb-12">
      <div className="overflow-hidden">
        <p className="text-center text-lg">
          Hundreds of models in a HIPAA-compliant framework
        </p>

        <div className="mt-6 flex items-center justify-center gap-x-14 gap-y-10 max-w-screen-xl">
          <Marquee pauseOnHover className="[--duration:20s] [&_svg]:mr-10">
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Logos06Page;
