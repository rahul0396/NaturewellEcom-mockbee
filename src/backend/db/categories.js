import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Protein",
    description: "It is good for muscle builidng",
    categoryImage: "https://picsum.photos/150"
  },
  {
    _id: uuid(),
    categoryName: "Mass Gainer",
    description: "It is good for muscle builidng",
    categoryImage: "https://ibb.co/TTH5KDM"
  },
  {
    _id: uuid(),
    categoryName: "Juices",
    description: "It is good for muscle builidng",
    categoryImage:
      "https://drive.google.com/file/d/1dsFz-FuTOFKXplBT3imLw9TxJRe-7nXe/view?usp=share_link"
  },
  {
    _id: uuid(),
    categoryName: "Capsules",
    description: "It is good for muscle builidng",
    categoryImage:
      "https://drive.google.com/file/d/1b6VgEpENjOS3uMKSpIiavpUdej2lIgNh/view?usp=share_link"
  },
  {
    _id: uuid(),
    categoryName: "Peanut Butter",
    description: "It is good for muscle builidng",
    categoryImage:
      "https://drive.google.com/file/d/15TYRM0iSKI9DzrwPa01ow0PlltZJQGWO/view?usp=share_link"
  },
  {
    _id: uuid(),
    categoryName: "Gummies",
    description: "It is good for muscle builidng",
    categoryImage:
      "https://drive.google.com/file/d/1I5K3tdGuPUYPzuMNwH1o0yduxXL3DIwC/view?usp=share_link"
  }
  // {
  //   _id: uuid(),
  //   categoryName: "fiction",
  //   description:
  //     "literature in the form of prose, especially novels, that describes imaginary events and people",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "non-fiction",
  //   description:
  //     "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "horror",
  //   description:
  //     "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  // },
];
