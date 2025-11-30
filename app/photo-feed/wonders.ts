import photo1 from "@/photofeeds/photo1.jpg";
import photo2 from "@/photofeeds/photo2.jpg";
import photo3 from "@/photofeeds/photo3.jpg";
import photo4 from "@/photofeeds/photo4.jpg";
import photo5 from "@/photofeeds/photo5.jpg";
import photo6 from "@/photofeeds/photo6.jpg";
  

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Beautiful city of USA",
    src: photo1,
    photographer: "Ajiboye",
    location: "Nigeria",
    },
    {
    id: "2",
    name: "Beautiful forex in USA",
    src: photo2,
    photographer: "Ajiboye",
    location: "Nigeria",
    },
     {
    id: "3",
    name: "Beautiful ice city",
    src: photo3,
    photographer: "Ajiboye",
    location: "Nigeria",
    },
     {
    id: "4",
    name: "personal computer",
    src: photo4,
    photographer: "Ajiboye",
    location: "Nigeria",
    },
     {
    id: "5",
    name: "Writing materials with PC",
    src: photo5,
    photographer: "Ajiboye",
    location: "Nigeria",
    },
     {
    id: "6",
    name: "Beautiful tower in USA",
    src: photo6,
    photographer: "Ajiboye",
    location: "Nigeria",
    },

];
interface WonderImage {
  id: string;
  name: string;
  src: string;
  photographer: string;
  location: string;
}   