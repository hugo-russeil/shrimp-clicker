import Bodyparts from './Bodyparts';
import Waves from '../utils/Waves';

export default function BodypartsContainer() {

  return (
    <div className={"w-full bg-[#0064A8]"}>
      <Waves colors={["fill-blue-400", "fill-[#0064A8]", "fill-blue-400", "fill-[#0064A8]"]} backgroundColor={"bg-[#D3D3D3]"} className={"h-32 top-[-1px] bg-[#D3D3D3]"}/>
      <Bodyparts />
    </div>
  )
}
