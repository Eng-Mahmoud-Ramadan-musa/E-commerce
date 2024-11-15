import { IoMdStar } from "@/app/icons/icons";

export default function RenderStars({ rate }) {
    const stars = [];
    const wholeStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;

    // إضافة النجوم الكاملة
    for (let i = 0; i < 5; i++) {
        if (i < wholeStars) {
            // نجوم كاملة
            stars.push(<IoMdStar className="text-[gold]" key={`full-${i}`} />);
        } else if (i === wholeStars && halfStar) {
            // نجمة نصف

              stars.push(
                <div key="half" className="relative overflow-hidden">
                  <IoMdStar className="text-[gold]" />
                  <div className="absolute w-full h-full z-10 top-0 left-1/2 overflow-hidden bg-inherit ">
                  <IoMdStar className="text-gray-500  absolute -left-1/2" />
                  </div>
                </div>
              );
            
        } else {
            // نجوم فارغة
            stars.push(<IoMdStar className="text-gray-500" key={`empty-${i}`} />);
        }
    }

    return <span className="flex">{stars}</span>;
}