import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader size={100} color="rgb(0,136,202,0.75" className="animate-spin"  />
    </div>
  )
}
