import style from "./Main.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import largeBanner from "../../../assets/images/large-phone.jpg";

const Main = () => {
  // $(window).scroll(function (e) {
  //   parallaxScroll();
  // });
  // function parallaxScroll() {
  //   var scrolled = $(window).scrollTop();
  //   $(".y1").css({ transform: "translate3d(0," + scrolled * -0.15 + "px, 0)" });
  //   $(".y2").css({ transform: "translate3d(0," + scrolled * -0.25 + "px, 0)" });
  //   $(".y3").css({ transform: "translate3d(0," + scrolled * -0.3 + "px, 0)" });
  //   $(".y4").css({ transform: "translate3d(0," + scrolled * -0.4 + "px, 0)" });
  //   $(".y5").css({ transform: "translate3d(0," + scrolled * -0.5 + "px, 0)" });
  //   $(".y6").css({ transform: "translate3d(0," + scrolled * -0.6 + "px, 0)" });
  // }
  return (
    <div className={style.Main} id="main">
      <ParallaxBanner
        id={style.firstBanner}
        layers={[{ image: `${largeBanner}`, speed: -15 }]}
        className="aspect-[2/1]"
        style={{ inset: "0 0" }}
      >
        <div className={style.text_main}>
          <h1>
            Welcome to <span>BTM Electronics</span>
          </h1>
          <h1> Your trusted wholesale partner</h1>
          {/* <div className="wrapper">
            <span className="scroll-text">
              <span className="fl y3">H</span>
              <span className="fl y1">e</span>
              <span className="fl y4">y&nbsp;</span>
              <span className="fl y2">t</span>
              <span className="fl y4">h</span>
              <span className="fl y3">e</span>
              <span className="fl y5">r</span>
              <span className="fl y2">e</span>
              <span className="fl y4">,&nbsp;</span>
              <span className="fl y6">f</span>
              <span className="fl y1">r</span>
              <span className="fl y4">i</span>
              <span className="fl y2">e</span>
              <span className="fl y5">n</span>
              <span className="fl y2">d</span>
              <span className="fl y3">.</span>
            </span>
            <p>scroll down</p>
          </div> */}
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Main;
