import React, { useState } from "react";
import Draggable from "react-draggable";

export default () => {
  const [modalY, setModalY] = useState(0);
  const [boundsY, setBoundsY] = useState(24);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {/* axis: 方向 */}
      {/* cancel: 指定されてる要素以外でドラッグが可能 */}
      {/* bounds: ドラッグができる範囲*/}
      {/* position: 絶対的な位置*/}
      {/* positionOffSet: 絶対的な位置からの相対位置*/}
      <Draggable
        axis="y"
        // position={{ x: 0, y: 0 }}
        cancel="p"
        bounds={{
          top: isModalOpen ? 0 : boundsY * -1,
          bottom: isModalOpen ? boundsY : 0
        }}
        positionOffset={{
          x: 0,
          y: isModalOpen ? 0 : 250
        }}
        position={{ x: 0, y: modalY }}
        onDrag={(e, { y }) => {
          console.log(e);
          setModalY(y);
          setBoundsY(() => {
            // offsetTop: 24 (top-6) + initial modal height: 116 (7.25rem)

            return 800;
          });
        }}
        onStop={(e, { y }) => {
          console.log(e);
          setModalY(0);
          if (y <= -24) {
            setIsModalOpen(true);
          }
          if (y >= 24) {
            setIsModalOpen(false);
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            backgroundColor: "red",
            height: "300px"
          }}
        >
          <b>ここをつかんで移動</b>
          <p>ドラッグで移動したい要素</p>
        </div>
      </Draggable>
    </div>
  );
};
