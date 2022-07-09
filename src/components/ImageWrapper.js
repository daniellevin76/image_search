import { Image } from "./Image";
import "../styles.css";
export const ImageWrapper = ({ image }) => {
  /*
farm: 66
id: "52184114795"
isfamily: 0
isfriend: 0
ispublic: 1
owner: "10354154@N05"
secret: "29df2d8d30"
server: "65535"
title: "22 June 2022 Amble to Alnmouth 10 miles (17)"
  
  */

  //console.log("in the wrapper farm", imageData[1]);
  //imageData.forEach((data) => console.log(data));

  return (
    <div>
      <ul className="image-wrapper">
        {image.array.forEach((image) => {
          <Image image={image} />;
        })}
      </ul>
    </div>
  );
};
