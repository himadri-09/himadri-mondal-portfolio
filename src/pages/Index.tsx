
import Hotjar from '@hotjar/browser';

const siteId = 6513098;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
const Index = () => {
  return (
   <>
     <div>
      <h1 className=" bg-slate-600 h-96 w-2/6">
        Helloooooo
      </h1>
     </div>
   </>
  );
};

export default Index;
