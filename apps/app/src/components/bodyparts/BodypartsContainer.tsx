import Bodyparts from './Bodyparts';
import Waves from '../utils/Waves';

export default function BodypartsContainer() {

  return (
    <div className={"w-full bg-[#0064A8] my-12"}>
      <Waves colors={["fill-blue-400", "fill-[#0064A8]", "fill-blue-400", "fill-[#0064A8]"]} backgroundColor={"bg-gray-500"} className={"h-8 top-[1px]"}/>
      <Bodyparts />
    </div>
  )
}
