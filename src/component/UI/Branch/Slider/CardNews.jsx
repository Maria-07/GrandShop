import { Card, Image } from "antd";
import React from "react";

const CardNews = ({ i }) => {
  console.log(i);
  return (
    <div className="flex justify-center">
      <div className="border-[0.2px] shadow-lg rounded-[40px] ">
        <Card
          hoverable
          bodyStyle={{ padding: 0 }}
          style={{ width: "430px", height: "590px", borderRadius: "40px" }}
        >
          <div className="relative">
            {" "}
            <Image
              preview={false}
              alt="example"
              src="https://s3-alpha-sig.figma.com/img/1703/7451/f0724713d52865091fc82e52c1ae545e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PT7sT~ii6gHnogUNUM3U1JrMCYaMgbNYpGyS1CTCbrZjgnSHf0FhajlkOvl9COq3Mzwe9Eq6UvJrOD8TP4dPPTtPaFRpp9q4YGWKJ3ih9fYs1Qll4Z-bThgAgL9PSq2XCblvKvEpafh0Wfh2vA31fcFXBIUt2LYhSyCKvrWEO-uVo6eLjQbce~SPmBBA8rEVKijRFNOLFliGyt-wqOBoBvB-eyigb~-fTj8oVMLSjKu9QF0dgC~3BeuaneQEIm8viTVHaIBQ7Qi8lXVGimgtwz4rnhIZfSTdmzAe8mhrAxiEM5Jk-ZirFv-6yC4IdkEIlkI2VXc0BBDtkUCq7-e0bA__"
              style={{
                objectFit: "cover",
                height: "590px",
                width: "430px",
                borderRadius: "40px",
              }}
            />
            <div className="absolute bottom-[5%] left-[35%]">
              <button className="bg-secondary text-black font-semibold text-xl py-[10px] px-[34px] rounded-[35px]">
                Branch {i}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardNews;
